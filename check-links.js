import fs from 'fs/promises';
import path from 'path';
import axios from 'axios';
import cheerio from 'cheerio';

async function checkLinks() {
  try {
    // Get all post files
    const postsDir = path.join(__dirname, 'src', 'content', 'posts');
    const files = await fs.readdir(postsDir);
    const markdownFiles = files.filter(file => file.endsWith('.md'));

    for (const file of markdownFiles) {
      const filePath = path.join(postsDir, file);
      const content = await fs.readFile(filePath, 'utf-8');

      // Extract links using regex
      const linkRegex = /\[(.*?)\]\((https?:\/\/[^\)]+)\)/g;
      let match;
      const links = [];

      while ((match = linkRegex.exec(content)) !== null) {
        links.push({
          text: match[1],
          url: match[2],
          file: file
        });
      }

      // Check each link
      for (const link of links) {
        try {
          const response = await axios.head(link.url, {
            timeout: 5000,
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
          });

          if (response.status >= 400) {
            console.log(`❌ Dead link found:`);
            console.log(`  File: ${link.file}`);
            console.log(`  Text: ${link.text}`);
            console.log(`  URL: ${link.url}`);
            console.log(`  Status: ${response.status}`);
            console.log('');
          }
        } catch (error) {
          if (error.response) {
            console.log(`❌ Dead link found:`);
            console.log(`  File: ${link.file}`);
            console.log(`  Text: ${link.text}`);
            console.log(`  URL: ${link.url}`);
            console.log(`  Status: ${error.response.status}`);
            console.log('');
          } else {
            console.log(`❌ Error checking link:`);
            console.log(`  File: ${link.file}`);
            console.log(`  Text: ${link.text}`);
            console.log(`  URL: ${link.url}`);
            console.log(`  Error: ${error.message}`);
            console.log('');
          }
        }
      }
    }

    console.log('✅ Link checking completed!');

  } catch (error) {
    console.error('Error:', error);
  }
}

// Install dependencies if needed
try {
  import axios from 'axios';
  import cheerio from 'cheerio';
} catch {
  console.log('Installing dependencies...');
  import { execSync } from 'child_process';
  execSync('npm install axios cheerio');
}

checkLinks();
