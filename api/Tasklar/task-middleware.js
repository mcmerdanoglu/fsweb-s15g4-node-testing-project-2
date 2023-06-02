const taskModel = require("./task-model");

async function checkTaskId(req, res, next) {
  try {
    const isExistingTask = await taskModel.getById(req.params.id);
    if (!isExistingTask) {
      res.status(404).json({ message: "Task bulunamadı" });
    } else {
      req.currentTask = isExistingTask;
      next();
    }
  } catch (error) {
    next(error);
  }
}
function checkPayload(req, res, next) {
  try {
    let { Adi, GorevId } = req.body;
    if (!Adi || GorevId === undefined) {
      res.status(400).json({ message: "Eksik Alan mevcut" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  checkTaskId,
  checkPayload,
};
