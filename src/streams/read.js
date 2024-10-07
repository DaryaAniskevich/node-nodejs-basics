import fs from "node:fs";

const read = async () => {
  const stream = fs.createReadStream("./src/streams/files/fileToRead.txt");

  stream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  stream.on("error", (err) => {
    console.error(err.message);
  });
};

await read();
