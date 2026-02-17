import fs from "node:fs/promises";
import path from "node:path";

export async function GET(req, context) {
  try {
    // 1️⃣ Ambil params (Next 16 async)
    const params = await context.params;
    const filename = params.filename;

    if (!filename) {
      return new Response("Bad Request", { status: 400 });
    }

    // 2️⃣ Sanitasi filename (cegah directory traversal)
    const safeFilename = path.basename(filename);

    // 3️⃣ daftar Validasi ekstensi (whitelist)
    const allowedTypes = {
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".webp": "image/webp",
      ".avif": "image/avif",
    };
    // ambil extensi
    const ext = path.extname(safeFilename).toLowerCase();
    //cek apakah diizinkan dgn validasi allowedtypes
    const contentType = allowedTypes[ext];
    if (!contentType) {
      return new Response("Type File tidak Disupport", { status: 415 });
    }

    // 4️⃣ Build absolute path
    const filePath = path.join(
      process.cwd(), //cwd artinya root atau "/"
      "storage",
      "images",
      safeFilename,
    );

    // 5️⃣ Pastikan file benar-benar ada
    await fs.access(filePath);

    const file = await fs.readFile(filePath);

    return new Response(file, {
      headers: {
        "Content-Type": contentType,

        // 6️⃣ Security headers
        "X-Content-Type-Options": "nosniff",

        // 7️⃣ Optional caching (1 hari)
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) {
    return new Response("Not Found", { status: 404 });
  }
}
