import fs from "node:fs";

const write = async () => {
  const stream = fs.createWriteStream("./src/streams/files/fileToWrite.txt");

  process.stdin.pipe(stream);

  stream.on("error", (err) => {
    console.error(err.message);
  });
};

await write();
