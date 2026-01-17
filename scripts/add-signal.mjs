#!/usr/bin/env node
/**
 * Script to add a new intelligence signal to Intelligence.tsx
 * Usage: node scripts/add-signal.mjs
 * 
 * This script will prompt for signal details and automatically add it to the beginning
 * of the signals array in Intelligence.tsx, ensuring newest-first sorting.
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
  console.log('=== Add New Intelligence Signal ===\n');

  // Collect signal data
  const id = await question('Signal ID (e.g., 024): ');
  const title = await question('Title: ');
  const description = await question('Description: ');
  const sector = await question('Sector (e.g., Infrastructure, Leadership, Governance): ');
  const impact = await question('Impact score (e.g., 8.5): ');
  const horizon = await question('Horizon (e.g., 3–7y): ');
  const country = await question('Country (e.g., UAE, Saudi Arabia, Qatar): ');
  const category = await question('Category (execution, leadership, failure, capital): ');
  const date = await question('Date (YYYY-MM-DD, default: today): ') || new Date().toISOString().split('T')[0];

  rl.close();

  // Create signal object
  const newSignal = `  {
    id: "${id}",
    title: "${title}",
    description:
      "${description}",
    sector: "${sector}",
    impact: ${impact},
    horizon: "${horizon}",
    country: "${country}",
    category: "${category}",
    date: "${date}",
  },`;

  // Read Intelligence.tsx
  const intelligencePath = path.join(__dirname, '../client/src/pages/Intelligence.tsx');
  let content = fs.readFileSync(intelligencePath, 'utf8');

  // Find the signals array start
  const signalsArrayStart = content.indexOf('const signals = [');
  if (signalsArrayStart === -1) {
    console.error('Error: Could not find signals array in Intelligence.tsx');
    process.exit(1);
  }

  // Find the first signal object (after the array opening and any comments)
  const firstBraceIndex = content.indexOf('{', signalsArrayStart + 'const signals = ['.length);
  
  // Insert new signal before the first existing signal
  const before = content.substring(0, firstBraceIndex);
  const after = content.substring(firstBraceIndex);
  
  content = before + newSignal + '\n  ' + after;

  // Write back to file
  fs.writeFileSync(intelligencePath, content, 'utf8');

  console.log(`\n✅ Signal #${id} added successfully to Intelligence.tsx`);
  console.log(`   Title: ${title}`);
  console.log(`   Date: ${date}`);
  console.log(`\nNext steps:`);
  console.log(`1. Create client/src/pages/Signal${id}.tsx with full analysis`);
  console.log(`2. Add import and route to client/src/App.tsx`);
  console.log(`3. Update homepage carousel if this is a top-3 signal`);
}

main().catch(console.error);
