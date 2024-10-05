const express = require("express");
const router = express.Router();

//Import funtionalities from permission Controller
const {
  addContact,
  listContact,
  updateContact,
  deleteContact,
  getTest,
} = require("../controllers/contactController");

router.route("/contact/add").post(addContact);
router.route("/contact/list").get(listContact);
router.route("/contact/update/:id").put(updateContact);
router.route("/contact/delete/:id").delete(deleteContact);
router.route("/contact/test").get(getTest);

console.log(`i am in app.js`);
module.exports = router;
