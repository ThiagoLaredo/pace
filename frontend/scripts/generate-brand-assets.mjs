import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const currentFilePath = fileURLToPath(import.meta.url);
const rootDir = path.resolve(path.dirname(currentFilePath), '..');
const publicDir = path.join(rootDir, 'public');

const logoPath = path.join(publicDir, 'images', 'Logo-pace-verde.svg');
const symbolTempPath = path.join(publicDir, 'images', 'symbol-temp.png');
const socialPath = path.join(publicDir, 'social-share.png');
const favicon64Path = path.join(publicDir, 'favicon-64.png');
const favicon512Path = path.join(publicDir, 'favicon-512.png');
const appleTouchPath = path.join(publicDir, 'apple-touch-icon.png');

const socialBackgroundSvg = Buffer.from(`
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g" cx="68%" cy="42%" r="72%">
      <stop offset="0%" stop-color="#eff09a"/>
      <stop offset="55%" stop-color="#d9eb86"/>
      <stop offset="100%" stop-color="#1dddb8"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <circle cx="600" cy="315" r="255" fill="#ffffff" fill-opacity="0.16"/>
  <circle cx="600" cy="315" r="238" fill="#ffffff" fill-opacity="0.12"/>
</svg>
`);

const faviconBackgroundSvg = Buffer.from(`
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g" cx="68%" cy="40%" r="74%">
      <stop offset="0%" stop-color="#eff09a"/>
      <stop offset="58%" stop-color="#d9eb86"/>
      <stop offset="100%" stop-color="#1dddb8"/>
    </radialGradient>
  </defs>
  <rect width="512" height="512" rx="256" fill="url(#g)"/>
  <circle cx="256" cy="256" r="210" fill="#ffffff" fill-opacity="0.16"/>
</svg>
`);

async function ensureLogoSymbolPng() {
  // Render and trim first, then crop the left side where the symbol lives.
  const rendered = await sharp(logoPath).png().trim().toBuffer();
  const meta = await sharp(rendered).metadata();

  const width = meta.width ?? 880;
  const height = meta.height ?? 200;
  const symbolWidth = Math.max(1, Math.floor(width * 0.42));

  await sharp(rendered)
    .extract({ left: 0, top: 0, width: symbolWidth, height })
    .trim()
    .png()
    .toFile(symbolTempPath);
}

async function buildSocialImage() {
  const symbol = await sharp(symbolTempPath)
    .resize({ width: 520, height: 520, fit: 'contain' })
    .png()
    .toBuffer();

  await sharp(socialBackgroundSvg)
    .composite([
      {
        input: symbol,
        left: 340,
        top: 55,
      },
    ])
    .png({ compressionLevel: 9, quality: 95 })
    .toFile(socialPath);
}

async function buildFavicons() {
  const symbol = await sharp(symbolTempPath)
    .resize({ width: 320, height: 320, fit: 'contain' })
    .png()
    .toBuffer();

  await sharp(faviconBackgroundSvg)
    .composite([
      {
        input: symbol,
        left: 96,
        top: 96,
      },
    ])
    .png({ compressionLevel: 9, quality: 95 })
    .toFile(favicon512Path);

  await sharp(favicon512Path).resize(64, 64).png().toFile(favicon64Path);
  await sharp(favicon512Path).resize(180, 180).png().toFile(appleTouchPath);
}

async function main() {
  await ensureLogoSymbolPng();
  await buildSocialImage();
  await buildFavicons();
  await fs.unlink(symbolTempPath).catch(() => undefined);

  process.stdout.write('Brand assets generated successfully.\n');
}

main().catch((error) => {
  process.stderr.write(`${error?.stack || error}\n`);
  process.exitCode = 1;
});
