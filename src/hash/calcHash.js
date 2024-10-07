import fs from "node:fs";
import crypto from "node:crypto";

const calculateHash = async () => {
  const hash = crypto.createHash("SHA256");
  const stream = fs.createReadStream(
    "./src/hash/files/fileToCalculateHashFor.txt"
  );

  stream.on("data", (chunk) => {
    hash.update(chunk);
  });

  stream.on("end", () => {
    const hexHash = hash.digest("hex");
    console.log(hexHash);
  });

  stream.on("error", (err) => {
    console.error(err.message);
  });
};

await calculateHash();
