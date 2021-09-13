// Write your "actions" router here!
const express = require("express");

const Actions = require("./actions-model");

const router = express.Router();

const { validateActionsId } = require("./actions-middlware");

router.get("/", (req, res, next) => {
  Actions.get()
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch(next);
});

router.get("/:id", validateActionsId, (req, res, next) => {
  res.status(200).json(req.action);
});

module.exports = router;
