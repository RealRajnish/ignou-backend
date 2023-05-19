const StrayProducts = require("../model/StrayAnimalsSchema");
const ReqRegisterStray = require("../model/RegisterStrayAnimal");

// for adding the stray products in the database

const addStray = async (req, res) => {
  try {
    const data = new StrayProducts(req.body);
    const resp = await data.save();
    res.json({ msg: "Stray Animal Added Successfully" });
    console.log(resp);
  } catch (error) {
    res.send(error);
    console.log(error);
  }
};

// getting all the stray animals for stray animal page
const reqStrayProducts = async (req, res) => {
  const filter = {};
  try {
    const data = await StrayProducts.find(filter);
    const temp = data.map((elem) => {
      const { id, breed, age, title, image, location } = elem;
      const resData = { id, breed, age, title, image, location };
      return resData;
    });
    res.send(temp);
    console.log("Hurray got the Stray Animal data !!");
  } catch (error) {
    console.log(error);
  }
};

// users requests for adding stray animals
const reqRegisterStray = async (req, res) => {
  try {
    const productExist = await ReqRegisterStray.findOne({ id: req.body.id });
    if (productExist) {
      return res.status(422).json({ error: "Product id already Exist" });
    }

    console.log(req.body);
    const data = new ReqRegisterStray(req.body);
    const resp = await data.save();

    res.json({ msg: "Adoption request sent Successfully" }).status(200);
    console.log(resp);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

// get all user requests for registering stray animals
const getReqRegisterStray = async (req, res) => {
  const filter = {};
  try {
    const data = await ReqRegisterStray.find(filter);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

// delting the request of user to register stray products
const delReqRegisterStray = async (req, res) => {
  const uid = req.params.id;
  try {
    const data = await ReqRegisterStray.deleteOne({ _id: uid });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addStray,
  reqStrayProducts,
  reqRegisterStray,
  getReqRegisterStray,
  delReqRegisterStray,
};
