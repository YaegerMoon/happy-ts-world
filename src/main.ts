import { Counter } from "./counter";
import logger from "./logger/logger";

function main() {
  const counter = new Counter(0);

  logger.log(counter.up());
  logger.log(counter.up());
  logger.log(counter.up());
  logger.log(counter.down());
}

main();
