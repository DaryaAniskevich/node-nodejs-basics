import fs from "node:fs";
import zlib from "node:zlib";

const compress = async () => {
  const file = "./src/zip/files/fileToCompress.txt";

  if (!fs.existsSync(file)) {
    throw new Error("FS operation failed");
  } else {
    const readStream = fs.createReadStream(file);
    const gzip = zlib.createGzip();

    readStream
      .pipe(gzip)
      .pipe(fs.createWriteStream("./src/zip/files/archive.gz"));
  }
};

await compress();
