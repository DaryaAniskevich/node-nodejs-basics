import fs from "node:fs";

const rename = async () => {
  const file = "./src/fs/files/wrongFilename.txt";
  const newName = "./src/fs/files/properFilename.md";

  if (!fs.existsSync(file) || fs.existsSync(newName)) {
    throw new Error("FS operation failed");
  } else {
    fs.renameSync(file, newName);
  }
};

await rename();
