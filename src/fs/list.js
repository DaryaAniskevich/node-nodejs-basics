import fs from "node:fs";

const list = async () => {
  const folder = "./src/fs/files";

  if (!fs.existsSync(folder)) {
    throw new Error("FS operation failed");
  } else {
    fs.readdirSync(folder).forEach((file) => {
      console.log(file);
    });
  }
};

await list();
