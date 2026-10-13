import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distAssetsDir = path.join(__dirname, 'dist', 'assets');
const files = fs.readdirSync(distAssetsDir);
const cssFile = files.find(f => f.endsWith('.css'));
const jsFile = files.find(f => f.endsWith('.js'));

const cssContent = fs.readFileSync(path.join(distAssetsDir, cssFile), 'utf8');
const jsContent = fs.readFileSync(path.join(distAssetsDir, jsFile), 'utf8');

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230284c7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 2C8.5 2 6 4.5 6 7.5c0 2.5 1.5 5 2.5 7.5.8 2 1.5 4.5 2.5 6 0 0 1-2 1-3.5 0-1.5 0-2 0-3 0-1 .5-2 1-2s1 1 1 2c0 1 0 1.5 0 3 0 1.5 1 3.5 1 3.5 1-1.5 1.7-4 2.5-6 1-2.5 2.5-5 2.5-7.5C18 4.5 15.5 2 12 2z'/></svg>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Firoz Dental Hospital, Tirupati | Dr. P. Firoz Babu, MDS</title>
    <meta name="description" content="Firoz Dental Hospital in Tirupati led by Dr. P. Firoz Babu, MDS (Orthodontist & Implantologist with 14+ years experience). Braces, Dental Implants, Aligners, Root Canal & comprehensive dental care." />
    <meta name="keywords" content="Firoz Dental Hospital, Dr P Firoz Babu, dentist Tirupati, orthodontist Tirupati, dental implants Tirupati, invisible aligners, braces, root canal, Municipal Office Junction" />
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
    <style>
${cssContent}
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module">
${jsContent}
    </script>
  </body>
</html>`;

// Write directly to index.html at root C:\Users\SOMU\OneDrive\Desktop\firoz denta\index.html
const targetPath = path.join(__dirname, 'index.html');
fs.writeFileSync(targetPath, html, 'utf8');
console.log('Successfully bundled standalone website to:', targetPath);
console.log('Total file size:', html.length, 'bytes');
