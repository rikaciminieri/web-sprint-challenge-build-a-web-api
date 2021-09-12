const express = require("express");
const server = express();

server.use(express.json());

const actionsRouter = require("./actions/actions-router");
const projectsRouter = require("./projects/projects-router");

server.use("/api/actions", actionsRouter);
server.use("/api/projects", projectsRouter);

server.use("*", (req, res, next) => {
  next({ status: 400, message: "Page not found!" });
});

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: `Oh no!! ${err.message}` });
});

module.exports = server;
