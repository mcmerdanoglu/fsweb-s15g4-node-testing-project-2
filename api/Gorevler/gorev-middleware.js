const gorevModel = require("./gorev-model");

async function checkGorevId(req, res, next) {
  try {
    let id = req.params.id || req.body.GorevId; //hem gorev Routerında hem de task Routerında aynı mw methodunu kullanmak için.
    const isExistingGorev = await gorevModel.getById(id);
    if (!isExistingGorev) {
      res.status(404).json({ message: "Böyle bir görev yok" });
    } else {
      req.currentGorev = isExistingGorev;
      next();
    }
  } catch (error) {
    next(error);
  }
}
async function checkPayload(req, res, next) {
  try {
    let { Adi } = req.body;
    if (!Adi) {
      res.status(400).json({ message: "Görev Adı boş olamaz" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}
module.exports = { checkGorevId, checkPayload };
