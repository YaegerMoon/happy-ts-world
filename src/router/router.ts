import Fastify from "fastify";

const server = Fastify({
  logger: true,
});

server.get("/", (req, reply) => {
  reply.send({ message: "Alive" });
});

export { server };
