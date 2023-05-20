const SingleProducts = require("../model/SingleProducts");

// for adding the single products in the database
const addSingleProduct = async (req, res) => {
  try {
    const productExist = await SingleProducts.findOne({ id: req.body.id });
    if (productExist) {
      return res.status(422).json({ error: "Product id already Exist" });
    }

    console.log(req.body);
    const data = new SingleProducts(req.body);
    const resp = await data.save();

    res.json({ msg: "Single Product Added successfully" }).status(200);
    console.log(resp);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

// getting all the products for the main products page

const reqProducts = async (req, res) => {
  const filter = {};
  try {
    const data = await SingleProducts.find(filter);
    const temp = data.map((elem) => {
      const { id, breed, age, price, colors, description, category, featured } =
        elem;
      const image = elem.image[0].url;
      const resData = {
        id,
        breed,
        age,
        price,
        colors,
        description,
        category,
        featured,
        image,
      };
      return resData;
    });
    res.send(temp);
    console.log("Hurray got the data !!");
  } catch (error) {
    console.log(error);
  }
};

// for getting the single product page using the id of the pdoduct
const reqSingleProductsId = async (req, res) => {
  const uid = req.params.id;
  try {
    const data = await SingleProducts.find({ id: uid });
    const tempStars = data[0].stars;
    const stars = parseFloat(tempStars);
    const temp = data.map((elem) => {
      const {
        _id,
        id,
        breed,
        age,
        price,
        colors,
        description,
        category,
        featured,
        shipping,
        stock,
        reviews,
        image,
      } = elem;
      const resData = {
        _id,
        id,
        breed,
        age,
        price,
        colors,
        description,
        category,
        featured,
        shipping,
        stock,
        reviews,
        image,
        stars,
      };
      return resData;
    });
    res.send(temp);
    console.log(temp);
    console.log(stars);
  } catch (error) {
    console.log(error);
  }
};

// For updating the Product with given id
const editProduct = async (req, res) => {
  const uid = req.params.id;
  try {
    const data = await SingleProducts.findByIdAndUpdate(uid, req.body, {
      new: true,
    });
    res.send(`${data.id} updated successfully`);
  } catch (error) {
    console.log(error);
    res.json({ msg: "some Error Occured" });
  }
};

module.exports = {
  addSingleProduct,
  reqProducts,
  reqSingleProductsId,
  editProduct,
};
