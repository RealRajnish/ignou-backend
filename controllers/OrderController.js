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

module.exports = { reqPurchase };
