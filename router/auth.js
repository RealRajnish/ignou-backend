const express = require("express");
const router = express.Router();
const { Authenticate, AuthAdmin } = require("../middleware/authenticate");
const {
  addSingleProduct,
  reqProducts,
  reqSingleProductsId,
  editProduct,
  deleteProductById,
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
  getAllUsers,
} = require("../controllers/UserController");
const {
  addAppointments,
  viewAppointments,
} = require("../controllers/AppointmentsController");
const {
  reqAdopt,
  getAllAdoptionReq,
} = require("../controllers/AdoptionController");
const {
  reqPurchase,
  getAllOrders,
  getUserOrder,
} = require("../controllers/OrderController");
const {
  registerAdmin,
  adminSignIn,
  hiii,
} = require("../controllers/AdminController");

// for adding the stray products in the database
router.post("/addStray", AuthAdmin, addStray);

// for adding the single products in the database
router.post("/addSingleProduct", addSingleProduct);

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
router.get("/viewAppointments", AuthAdmin, viewAppointments);

// get all user requests for registering stray animals
router.get("/getReqRegisterStray", getReqRegisterStray);

// delting the request of user to register stray products
router.delete("/delReqRegisterStray/:id", AuthAdmin, delReqRegisterStray);

// For updating the Product with given id
router.put("/editProduct/:id", AuthAdmin, editProduct);

// For registering the Admin
router.post("/registerAdmin", registerAdmin);

// For Signin of Admin
router.post("/adminSignIn", adminSignIn);

// for getting the data using cookies from the browser for authentication purpose Admin side
router.get("/hiii", AuthAdmin, hiii);

// For Getting all orders by Admin
router.get("/getAllOrders", AuthAdmin, getAllOrders);

// Show all Users for admin side
router.get("/getAllUsers", AuthAdmin, getAllUsers);

// Get all Adoption Requests
router.get("/getAllAdoptionReq", AuthAdmin, getAllAdoptionReq);

// For deleting Product by id from Admin
router.delete("/deleteProductById/:id", AuthAdmin, deleteProductById);

// for getting orders of user
router.get("/getUserOrder/:id", getUserOrder);

module.exports = router;
