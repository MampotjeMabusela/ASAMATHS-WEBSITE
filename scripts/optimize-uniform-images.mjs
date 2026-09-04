/**
 * Export uniform product images without cropping or colour changes.
 * Keeps the full attached frame; only applies EXIF rotation and optional downscale
 * for very large files. Usage: node scripts/optimize-uniform-images.mjs
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")
const sourcesDir = path.join(root, "scripts", "_uniform-sources")
const outDir = path.join(root, "public", "images", "uniform", "items")

const ITEMS = [
  { id: "shirt-long-sleeve", outExt: ".png" },
  { id: "shirt-short-sleeve", outExt: ".png" },
  { id: "sports-tshirt", outExt: ".jpg" },
  { id: "jersey-red-stripes", outExt: ".png" },
  { id: "pullover-red-stripes", outExt: ".png" },
  { id: "summer-tracksuit", outExt: ".png" },
  { id: "winter-tracksuit", outExt: ".png" },
  { id: "blazer", outExt: ".png" },
  { id: "red-drimac", outExt: ".png" },
  { id: "gray-red-tie-striped", outExt: ".png" },
  { id: "gray-red-tie-stripe", outExt: ".png" },
  { id: "gray-red-socks", outExt: ".png" },
  { id: "sun-hat", outExt: ".png" },
  { id: "winter-woollen-hat", outExt: ".png" },
  { id: "gray-skirt", outExt: ".png" },
  { id: "sports-white-shorts", outExt: ".png" },
  { id: "tunic", outExt: ".png" },
  { id: "girls-skirt", outExt: ".png" },
  { id: "boys-pants", outExt: ".png" },
  { id: "girls-jersey", outExt: ".png" },
  { id: "boys-jersey", outExt: ".png" },
  { id: "school-tie", outExt: ".png" },
  { id: "school-socks", outExt: ".png" },
  { id: "grey-trousers", outExt: ".png" },
  { id: "golf-tshirt", outExt: ".png" },
  { id: "track-suit", outExt: ".png" },
]

const TARGET_MAX_WIDTH = 1600

/** Preserve the full attached frame — no trim, crop, colour shifts, or sharpening. */
async function preserveUniformImage(inputPath, outputPath) {
  const tmp = `${outputPath}.tmp`
  const meta = await sharp(inputPath).metadata()
  const width = meta.width ?? 0

  let pipeline = sharp(inputPath, { failOn: "none" }).rotate()

  if (width > TARGET_MAX_WIDTH) {
    pipeline = pipeline.resize({
      width: TARGET_MAX_WIDTH,
      withoutEnlargement: true,
      fit: "inside",
      kernel: sharp.kernel.lanczos3,
    })
  }

  const ext = path.extname(outputPath).toLowerCase()
  if (ext === ".jpg" || ext === ".jpeg") {
    await pipeline.jpeg({ quality: 92, mozjpeg: true }).toFile(tmp)
  } else {
    await pipeline.png({ compressionLevel: 6, effort: 6, palette: false }).toFile(tmp)
  }

  fs.renameSync(tmp, outputPath)
  const out = await sharp(outputPath).metadata()
  const kb = Math.round(fs.statSync(outputPath).size / 1024)
  return { from: `${meta.width}x${meta.height}`, to: `${out.width}x${out.height}`, kb }
}

function resolveSourceFile(id) {
  for (const ext of [".png", ".jpg", ".jpeg", ".webp"]) {
    const candidate = path.join(sourcesDir, `${id}${ext}`)
    if (fs.existsSync(candidate)) return candidate
  }
  return null
}

fs.mkdirSync(outDir, { recursive: true })

async function main() {
  console.log("Preserving uniform item images (no crop)...\n")
  for (const item of ITEMS) {
    const input = resolveSourceFile(item.id)
    if (!input) {
      console.log(`${item.id}: skipped (no source file)`)
      continue
    }
    const output = path.join(outDir, `${item.id}${item.outExt}`)
    const result = await preserveUniformImage(input, output)
    console.log(`${item.id}: ${result.from} → ${result.to} (${result.kb} KB)`)
  }

  const catalogInput = path.join(sourcesDir, "uniform-catalog.png")
  if (fs.existsSync(catalogInput)) {
    const catalogOut = path.join(root, "public", "images", "uniform", "uniform-catalog.png")
    const result = await preserveUniformImage(catalogInput, catalogOut)
    console.log(`uniform-catalog: ${result.from} → ${result.to} (${result.kb} KB)`)
  }

  console.log("\nDone.")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
