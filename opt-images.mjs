// One-off image optimiser (run manually, then deleted):
//   node opt-images.mjs
//
// Bakes the "img-warm" treatment into the source photographs and resizes them
// to the largest slot they render in. Doing this here rather than with a CSS
// filter keeps the paint cheap — Lighthouse flagged the filters as an LCP
// problem — and turns a 1.5 MB PNG into a progressive JPEG.

import sharp from "sharp";
import fs from "fs";
import path from "path";

const P = "F:/chrt 2.0 shery/Projects/Dr-maya/dr-maya/public/images/";
const TMP = "C:/Users/Shaikh/AppData/Local/Temp/opencode/";

// name -> max width, max height (roughly 2x the largest slot it renders in)
const jobs = [
  ["hero-main.jpg", 1200, 1400],
  ["intro-portrait.jpg", 900, 1350],
  ["card-anxiety.jpg", 800, 1100],
  ["card-trauma.jpg", 800, 1100],
  ["card-burnout.jpg", 800, 1100],
  ["quote-bg.jpg", 2000, 1100],
  ["statement.jpg", 1600, 1000],
  ["cta-strip.jpg", 500, 1300],
  ["cta-tall.jpg", 900, 1200],
  ["office-1.jpeg", 1500, 1125],
  ["office-2.jpeg", 1500, 1125],
  ["maya.png", 1100, 1650], // -> maya.jpg
];

for (const [file, w, h] of jobs) {
  const src = P + file;
  const out = src.replace(/\.png$/, ".jpg").replace(/\.jpeg$/, ".jpg");
  const before = fs.statSync(src).size;
  const buf = await sharp(src, { failOn: "none" })
    .rotate()
    .modulate({ saturation: 0.86, brightness: 1.03 })
    .tint("#f4ece0")
    .linear(1.02, -4)
    .resize({ width: w, height: h, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 80, progressive: true, mozjpeg: true })
    .toBuffer();

  const after = buf.length;
  fs.writeFileSync(out, buf);
  if (out !== src) fs.unlinkSync(src);
  console.log(file.padEnd(20), "->", out.padEnd(16), `${before / 1024 | 0}kb -> ${after / 1024 | 0}kb`);
}