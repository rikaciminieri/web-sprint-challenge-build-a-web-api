// add middlewares here related to actions
const Actions = require("./actions-model");

function validateActionsId(req, res, next) {
  Actions.get(req.params.id)
    .then((action) => {
      if (action) {
        req.action = action;
        next();
      } else {
        next({ status: 404, message: "No action found" });
      }
    })
    .catch(next);
}

module.exports = { validateActionsId };
