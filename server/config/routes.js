const express = require('express');
const router = express.Router();

const TreinoController = require('../controllers/TreinoController.js');
const MensalidadeController = require('../controllers/MensalidadeController.js');
const UserController = require('../controllers/UserController');
const LoginController = require('../controllers/LoginController');


//Autenticacao
router.post("/users/authenticate/", LoginController.authenticate);

// Usuarios
router.get("/lista/usuario", UserController.get);
router.get("/lista/usuario/:type", UserController.getByType);
router.get("/lista/usuario//:id", UserController.getById);
router.get("/lista/usuario///:document", UserController.getByDocument);
router.post("/cadastro/usuario", UserController.store);
router.post("/cadastro/usuario/update/:id", UserController.update);
router.get("/cadastro/usuario/apagar/:document", UserController.delete);
router.delete("/cadastro/usuario/apagar//:id", UserController.deleteById);

//Treinos
router.get("/lista/treino", TreinoController.get);
router.get("/lista/treino/:id/:type", TreinoController.getByIdAndType);
router.get("/lista/treino/price//:id", TreinoController.listPriceByTrainingId);
router.post("/cadastro/treino", TreinoController.store);
router.post("/cadastro/treino/update", TreinoController.update);
router.delete("/cadastro/treino/apagar/:id", TreinoController.delete);

//Mensalidades
router.get("/lista/mensalidade", MensalidadeController.get);
router.get("/lista/mensalidade/:userId", MensalidadeController.getByUserId);
router.post("/cadastro/mensalidade", MensalidadeController.store);
router.get("/cadastro/mensalidade/generate", MensalidadeController.generate);
router.post("/cadastro/mensalidade/update", MensalidadeController.update);
router.delete("/cadastro/mensalidade/apagar/:id", MensalidadeController.delete);
router.delete("/cadastro/mensalidade/apagar//all", MensalidadeController.deleteAll);

module.exports = router;