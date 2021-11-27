const fs = require("fs");
const path = require("path");

const getDataFromFile = (fileName) => {
  const jsonData = fs.readFileSync(
    path.join(__dirname, `/db/${fileName}.json`),
    "utf-8"
  );

  const data = JSON.parse(jsonData);

  return data;
};

const writeDataToFile = (fileName, data) => {
  fs.writeFileSync(path.join(__dirname, `/db/${fileName}.json`), data);
};

module.exports = {
  getDataFromFile,
  writeDataToFile,
};
