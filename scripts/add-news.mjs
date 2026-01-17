#!/usr/bin/env node
/**
 * Script to add a new news article to News.tsx
 * Usage: node scripts/add-news.mjs
 * 
 * This script will prompt for article details and automatically add it to the beginning
 * of the articles array in News.tsx, ensuring newest-first sorting.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (prompt) => new Promise((resolve) => rl.question(prompt, resolve));

async function main() {
  console.log('=== Add New News Article ===\n');

  // Collect article data
  const id = await question('Article ID (e.g., 017): ');
  const title = await question('Title: ');
  const excerpt = await question('Excerpt (short description): ');
  const category = await question('Category (e.g., Infrastructure, AI, Funding): ');
  const readTime = await question('Read time in minutes (e.g., 5): ');
  const country = await question('Country (e.g., UAE, Saudi Arabia, Qatar): ');
  const date = await question('Date (YYYY-MM-DD, default: today): ') || new Date().toISOString().split('T')[0];

  rl.close();

  // Create article object
  const newArticle = `  {
    id: "${id}",
    title: "${title}",
    excerpt: "${excerpt}",
    category: "${category}",
    readTime: ${readTime},
    country: "${country}",
    date: "${date}",
  },`;

  // Read News.tsx
  const newsPath = path.join(__dirname, '../client/src/pages/News.tsx');
  let content = fs.readFileSync(newsPath, 'utf8');

  // Find the articles array start
  const articlesArrayStart = content.indexOf('const articles = [');
  if (articlesArrayStart === -1) {
    console.error('Error: Could not find articles array in News.tsx');
    process.exit(1);
  }

  // Find the first article object (after the array opening and any comments)
  const firstBraceIndex = content.indexOf('{', articlesArrayStart + 'const articles = ['.length);
  
  // Insert new article before the first existing article
  const before = content.substring(0, firstBraceIndex);
  const after = content.substring(firstBraceIndex);
  
  content = before + newArticle + '\n  ' + after;

  // Write back to file
  fs.writeFileSync(newsPath, content, 'utf8');

  console.log(`\n✅ News Article #${id} added successfully to News.tsx`);
  console.log(`   Title: ${title}`);
  console.log(`   Date: ${date}`);
  console.log(`\nNext steps:`);
  console.log(`1. Create client/src/pages/NewsArticle${id}.tsx with full content`);
  console.log(`2. Add import and route to client/src/App.tsx`);
  console.log(`3. Update homepage carousel if this is a top-3 news article`);
}

main().catch(console.error);
