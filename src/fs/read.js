import fs from "node:fs";

const read = async () => {
  const file = "./src/fs/files/fileToRead.txt";

  if (!fs.existsSync(file)) {
    throw new Error("FS operation failed");
  } else {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        throw new Error("FS operation failed");
      } else {
        console.log(data);
      }
    });
  }
};

await read();
