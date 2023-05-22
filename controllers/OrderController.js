const PurchaseDb = require("../model/ReqPurchase");

// requesting for purchase of the products
const reqPurchase = async (req, res) => {
  try {
    console.log(req.body);
    const data = new PurchaseDb(req.body);
    const resp = await data.save();

    res.json({ msg: "Ordered Successfully" }).status(200);
    console.log(resp);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

// For Getting all orders by Admin
const getAllOrders = async (req, res) => {
  try {
    const resp = await PurchaseDb.find({});
    res.send(resp);
  } catch (error) {
    console.log(error);
  }
};

const getUserOrder = async (req, res) => {
  const uid = req.params.id;
  try {
    const data = await PurchaseDb.find({ "customer_details.email": uid });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { reqPurchase, getAllOrders, getUserOrder };
