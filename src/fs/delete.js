import fs from "node:fs";

const remove = async () => {
  const file = "./src/fs/files/fileToRemove.txt";

  if (!fs.existsSync(file)) {
    throw new Error("FS operation failed");
  } else {
    fs.unlinkSync(file);
  }
};

await remove();
