// add middlewares here related to projects
const Projects = require("./projects-model");

function validateProjectId(req, res, next) {
  Projects.get(req.params.id)
    .then((project) => {
      if (project) {
        req.project = project;
        next();
      } else {
        next({
          status: 404,
          message: `Error 404: Project not found!!`,
        });
      }
    })
    .catch(next);
}

function validateProjectBody(req, res, next) {
  if (!req.body.name || !req.body.description) {
    next({
      status: 400,
      message: "Error 400: Missing required name or description field",
    });
  } else {
    next();
  }
}

module.exports = { validateProjectId, validateProjectBody};
