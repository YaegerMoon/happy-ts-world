import { server } from "./router/router";

function main() {
  server.listen(3000, (err, address) => {
    if (err) console.error(err);
    console.log(address);
  });
}

main();
