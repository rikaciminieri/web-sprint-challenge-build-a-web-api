// Write your "actions" router here!
const express = require("express");

const Actions = require("./actions-model");

const router = express.Router();

const {
  validateActionsId,
  validateActionsBody,
} = require("./actions-middlware");

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

router.post("/", validateActionsBody, (req, res, next) => {
  Actions.insert(req.body)
    .then((newAction) => {
      res.status(201).json(newAction);
    })
    .catch(next);
});

router.put("/:id", validateActionsId, validateActionsBody, (req, res, next) => {
  Actions.update(req.params.id, req.body)
    .then((updatedAction) => {
      res.status(200).json(updatedAction);
    })
    .catch(next);
});

router.delete("/:id", validateActionsId, (req, res, next) => {
  Actions.remove(req.params.id)
    .then((deletedAction) => {
      res.status(204).json(deletedAction);
    })
    .catch(next);
});

module.exports = router;
