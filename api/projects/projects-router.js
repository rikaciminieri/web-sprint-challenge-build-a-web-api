// Write your "projects" router here!
const express = require("express");
const Projects = require("./projects-model");

const router = express.Router();

const {
  validateProjectId,
  validateProjectBody
} = require("./projects-middleware");

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

router.post("/", validateProjectBody, (req, res, next) => {
  Projects.insert(req.body)
    .then((newProject) => {
      res.status(201).json(newProject);
    })
    .catch(next);
});

router.put("/:id", validateProjectId, validateProjectBody, (req, res, next) => {

  Projects.update(req.params.id, req.body)
    .then((updatedProject) => {
      res.status(200).json(updatedProject);
    })
    .catch(next);
});

router.delete("/:id", validateProjectId, (req, res, next) => {
  Projects.remove(req.params.id)
    .then((deletedProject) => {
      res.status(204).json(deletedProject);
    })
    .catch(next);
});

router.get("/:id/actions", validateProjectId, (req, res, next) => {
  Projects.getProjectActions(req.params.id)
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch(next);
});
module.exports = router;
