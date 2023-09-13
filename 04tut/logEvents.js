const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fsPromises = require("fs").promises;
const fs = require("fs");
const path = require("path");

const logEvents = async message => {
  const dateTime = `${format(new Date(), "yyyyMMMM\t\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "logs", "eventlog.txt"),
      logItem
    );
    //testing
  } catch (err) {
    console.log(err);
  }
};

module.exports = logEvents;
// console.log(format(new Date(), "yyyyMMMM\t\tHH:mm:ss"));

// console.log(uuid());
