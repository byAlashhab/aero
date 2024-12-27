const fs = require("fs");

const path = __filename.slice(0, __filename.length - 13);

class Aero {
  async New(name, headers, data) {
    if (fs.existsSync(`${path}/aero/${name}.csv`)) {
      throw new Error("Table already exists");
    }

    if (!fs.existsSync(`${path}/aero`)) {
      try {
        fs.mkdirSync(`${path}/aero`);
      } catch (error) {
        console.log(error);
      }
    }

    const csvData = [
      headers.join(","),
      ...data.map((row) => row.join(",")),
    ].join("\n");

    fs.writeFileSync(`${path}/aero/${name}.csv`, csvData);
  }

  async Add() {}

  Read(name) {
    if (!fs.existsSync(`${path}/aero/${name}.csv`)) {
      throw new Error("Table doesn't exists");
    }

    let table = fs.readFileSync(`${path}/aero/${name}.csv`, {
      encoding: "utf-8",
    });

    table = table.split("\n");

    const headers = table[0].split(",");
    const data = table.filter((_, i) => i !== 0).map((row) => row.split(","));

    return { headers, data };
  }
}

module.exports = Aero;
