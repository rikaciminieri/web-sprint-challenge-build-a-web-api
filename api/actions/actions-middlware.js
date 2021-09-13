// add middlewares here related to actions
const Actions = require("./actions-model");

function validateActionsId(req, res, next) {
  Actions.get(req.params.id)
    .then((action) => {
      if (action) {
        req.action = action;
        next();
      } else {
        next({ status: 404, message: "Error 404: No action found" });
      }
    })
    .catch(next);
}

function validateActionsBody(req, res, next) {
  const { project_id, description, notes } = req.body;
  if (!project_id || !description || !notes) {
    next({ status: 400, message: "Error 400: Missing required field(s)" });
  } else {
    next();
  }
}

module.exports = { validateActionsId, validateActionsBody };
