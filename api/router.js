const express = require('express')
const router = express();
const cors = require("cors");
const bodyParser = require('body-parser');
router.use(bodyParser.json())
router.use(express.Router())
router.use(cors())

const { checkToken } = require("../token_validation");
const {
  login,
  createUser,
  getUserBySdt,
  getUserById,
  updateUsers,
  checkSdt,
  updatePassword
} = require("./controller.js");

router.post("/", createUser); //http://localhost:3000/api truyền vào 1 json để create
router.get("/sdt=:sdt", checkToken, getUserBySdt);  //http://localhost:3000/api/sdt=+847xxxxxxxx
router.get("/id=:id", checkToken, getUserById);  //http://localhost:3000/api/sdt=+847xxxxxxxx
router.post("/login", login);   //http://localhost:3000/api/login
router.patch("/", checkToken, updateUsers); //http://localhost:3000/api truyền vào 1 json update
router.post("/checksdt", checkSdt);
router.patch("/updatepass", updatePassword);

module.exports = router;