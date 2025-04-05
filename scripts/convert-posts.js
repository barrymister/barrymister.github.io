import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceDir = join(__dirname, '../../barrymister.github.io_backup_20250405/_posts');
const targetDir = join(__dirname, '../src/content/posts');

// Ensure target directory exists
if (!existsSync(targetDir)) {
  mkdirSync(targetDir, { recursive: true });
}

// Get all markdown files
const files = readdirSync(sourceDir)
  .filter(file => file.endsWith('.md') || file.endsWith('.markdown'));

files.forEach(file => {
  const sourcePath = join(sourceDir, file);
  const content = readFileSync(sourcePath, 'utf8');
  const { data, content: markdown } = matter(content);
  
  // Convert frontmatter
  const newFrontmatter = {
    title: data.title || 'Untitled',
    date: data.date ? new Date(data.date).toISOString().split('T')[0] : file.slice(0, 10),
    description: data.description || '',
    layout: '../../layouts/PostLayout.astro'
  };

  // Create new MDX content
  const newContent = `---
${Object.entries(newFrontmatter)
  .map(([key, value]) => `${key}: ${typeof value === 'string' ? `"${value}"` : value}`)
  .join('\n')}
---

${markdown.trim()}
`;

  // Create new filename (keep original date prefix)
  const targetFile = join(targetDir, file.replace(/\.(md|markdown)$/, '.mdx'));
  writeFileSync(targetFile, newContent, 'utf8');
  console.log(`Converted ${file} -> ${basename(targetFile)}`);
});
