import fs from "node:fs";

const copy = async () => {
  const folderName = "./src/fs/files";
  const copyFolderName = "./src/fs/files_copy";

  if (fs.existsSync(copyFolderName) || !fs.existsSync(folderName)) {
    throw new Error("FS operation failed");
  } else {
    fs.mkdirSync(copyFolderName);

    fs.readdirSync(folderName).forEach((file) => {
      fs.copyFileSync(`${folderName}/${file}`, `${copyFolderName}/${file}`);
    });
  }
};

await copy();
