const express = require("express");
const router = express.Router();
const Authenticate = require("../middleware/authenticate");
const {
  addSingleProduct,
  reqProducts,
  reqSingleProductsId,
  editProduct,
} = require("../controllers/ProductController");
const {
  addStray,
  reqStrayProducts,
  reqRegisterStray,
  getReqRegisterStray,
  delReqRegisterStray,
} = require("../controllers/StrayAnimalController");
const {
  registeruser,
  signin,
  hii,
  logout,
} = require("../controllers/UserController");
const {
  addAppointments,
  viewAppointments,
} = require("../controllers/AppointmentsController");
const { reqAdopt } = require("../controllers/AdoptionController");
const { reqPurchase } = require("../controllers/OrderController");

// for adding the stray products in the database
router.post("/addStray", addStray);

// for adding the single products in the database
router.post("/addSignleProduct", addSingleProduct);

// getting all the products for the main products page
router.get("/reqProducts", reqProducts);

// getting all the stray animals for stray animal page
router.get("/reqStrayProducts", reqStrayProducts);

// for getting the single product page using the id of the pdoduct
router.get("/reqSingleProducts/:id", reqSingleProductsId);

// for getting the data using cookies from the browser for authentication purpose client side
router.get("/hii", Authenticate, hii);

// registering the user
router.post("/registeruser", registeruser);

// user login page
router.post("/signin", signin);

// Logout page
router.get("/logout", logout);

// requesting for purchase of the products
router.post("/reqPurchase", reqPurchase);

// user send request for adoption of stray animals
router.post("/reqAdopt", reqAdopt);

// users requests for adding stray animals
router.post("/reqRegisterStray", reqRegisterStray);

// for adding the doctors appointments
router.post("/addAppointments", addAppointments);

// for getting all the appointments Admin Side
router.get("/viewAppointments", viewAppointments);

// get all user requests for registering stray animals
router.get("/getReqRegisterStray", getReqRegisterStray);

// delting the request of user to register stray products
router.delete("/delReqRegisterStray/:id", delReqRegisterStray);

// For updating the Product with given id
router.put("/editProduct/:id", editProduct);

module.exports = router;
