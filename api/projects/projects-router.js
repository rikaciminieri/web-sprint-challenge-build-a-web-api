// Write your "projects" router here!
const express = require("express");
const Projects = require("./projects-model");

const router = express.Router();

const { validateProjectId } = require("./projects-middleware");

router.get("/", (req, res, next) => {
  Projects.get()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.get("/:id", validateProjectId, (req, res, next) => {
  res.status(200).json(req.project);
});
module.exports = router;
