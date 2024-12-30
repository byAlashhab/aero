const fs = require("fs");

const path = __filename.slice(0, __filename.length - 39);

class Aero {
  async New(name, headers, data) {
    try {
      if (fs.existsSync(`${path}/db/${name}.csv`)) {
        throw new Error("Table already exists");
      }

      if (!fs.existsSync(`${path}/db`)) {
        try {
          fs.mkdirSync(`${path}/db`);
        } catch (error) {
          console.log(error);
        }
      }

      const csvData = [
        headers.join(","),
        ...data.map((row) => row.join(",")),
      ].join("\n");

      fs.writeFileSync(`${path}/db/${name}.csv`, csvData);
    } catch (error) {
      console.log(error);
    }
  }

  async Add(name, data) {
    try {
      if (!fs.existsSync(`${path}/db/${name}.csv`)) {
        throw new Error("Table doesn't exists");
      }

      data = data.map((row) => row.join(",")).join("\n");

      fs.appendFileSync(`${path}/db/${name}.csv`, `\n${data}`);
    } catch (error) {
      console.log(error);
    }
  }

  Read(name) {
    try {
      if (!fs.existsSync(`${path}/db/${name}.csv`)) {
        throw new Error("Table doesn't exists");
      }

      let table = fs.readFileSync(`${path}/db/${name}.csv`, {
        encoding: "utf-8",
      });

      table = table.split("\n");

      const headers = table[0].split(",");
      const data = table.filter((_, i) => i !== 0).map((row) => row.split(","));

      return { headers, data };
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Aero;
