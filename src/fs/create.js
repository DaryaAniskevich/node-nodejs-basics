import fs from "node:fs";

const create = async () => {
  const path = "./src/fs/files/fresh.txt";
  const content = "I am fresh and young";

  fs.writeFile(path, content, { flag: "wx" }, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
};

await create();
