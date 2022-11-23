const files = "./teste3/documents";
const fs = require("fs");

fs.readdir(files, (err, files) => {
  if (err) {
    throw err;
  } else {
    console.log(files);
  }
});

fs.appendFile("arquivo-1.txt", "arquivo-1", function (err) {
  if (err) {
    throw err;
  }
  console.log("Sucesso!");
});

fs.appendFile("arquivo-2.txt", "arquivo-2", function (err) {
  if (err) {
    throw err;
  }
  console.log("Sucesso!");
});

fs.appendFile("arquivo-3.txt", "arquivo-3", function (err) {
  if (err) {
    throw err;
  }
  console.log("Sucesso!");
});

fs.appendFile("arquivo-4.txt", "arquivo-4", function (err) {
  if (err) {
    throw err;
  }
  console.log("Sucesso!");
});

fs.appendFile("arquivo-5.txt", "arquivo-5", function (err) {
  if (err) {
    throw err;
  }
  console.log("Sucesso!");
});
