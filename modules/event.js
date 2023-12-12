const Evennts = require("events");

class Logger extends Evennts {
  log(a, b) {
    this.emit("calculate", a + b);
  }
}
const logger = new Logger();

logger.on("calculate", (data) => {
  console.log(data);
});

logger.log(8, 11);
