import fs from "node:fs";
import zlib from "node:zlib";

const decompress = async () => {
  const archive = "./src/zip/files/archive.gz";

  if (!fs.existsSync(archive)) {
    throw new Error("FS operation failed");
  } else {
    const readStream = fs.createReadStream(archive);
    const gunzip = zlib.createGunzip();

    readStream
      .pipe(gunzip)
      .pipe(fs.createWriteStream("./src/zip/files/fileToCompress.txt"));
  }
};

await decompress();
