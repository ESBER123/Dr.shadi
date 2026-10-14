import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const inputDir = path.resolve("src/images");
const outputDir = path.join(inputDir, "optimized");

const images = [
  { input: "doctorshadi.png", output: "doctor.webp", width: 804 },
  {
    input: "Invisiblealigner.jpg",
    output: "invisible-aligner.webp",
    width: 1204,
  },
  {
    input: "ChildrenTeenagers.jpg",
    output: "children-teenagers.webp",
    width: 1204,
  },
  {
    input: "Digitaler3DScanner.png",
    output: "digital-scanner.webp",
    width: 1010,
  },
  { input: "FixedBraces.png", output: "fixed-braces.webp", width: 808 },
  { input: "Modjaw.png", output: "modjaw.webp", width: 1010 },
  { input: "3DImagingDVT.png", output: "3d-imaging-dvt.webp", width: 1010 },
];

await fs.mkdir(outputDir, { recursive: true });

for (const image of images) {
  const inputPath = path.join(inputDir, image.input);
  const outputPath = path.join(outputDir, image.output);

  const metadata = await sharp(inputPath).metadata();

  // Never enlarge an image beyond its original width.
  const targetWidth = Math.min(image.width, metadata.width);

  await sharp(inputPath)
    .rotate()
    .resize({
      width: targetWidth,
      withoutEnlargement: true,
    })
    .webp({
      quality: 80,
      effort: 5,
    })
    .toFile(outputPath);

  const result = await sharp(outputPath).metadata();
  const stats = await fs.stat(outputPath);

  console.log(
    `${image.input} -> ${image.output}: ` +
      `${result.width}x${result.height}, ` +
      `${(stats.size / 1024).toFixed(1)} KB`,
  );
}

console.log("Image optimization finished.");
