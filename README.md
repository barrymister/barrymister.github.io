# barrymister.com

Personal website built with Astro, featuring a minimal design and integration with Substack for regular updates.

## 🚀 Features

- Built with [Astro](https://astro.build)
- Minimal, modern design
- Dark mode support
- MDX blog posts
- Tailwind CSS for styling
- Responsive layout
- Integration with Substack

## 📁 Project Structure

```text
/
├── public/
│   ├── favicon.ico
├── src/
│   ├── content/
│   │   └── posts/    # Blog posts in MDX format
│   ├── layouts/
│   │   ├── Layout.astro
│   │   └── PostLayout.astro
│   └── pages/
│       ├── index.astro
│       └── posts/
│           └── index.astro
└── package.json
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch.
