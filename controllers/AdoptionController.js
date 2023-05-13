const AdoptDb = require("../model/ReqAdopt");

// user send request for adoption of stray animals
const reqAdopt = async (req, res) => {
  try {
    console.log(req.body);
    const data = new AdoptDb(req.body);
    const resp = await data.save();

    res.json({ msg: "Adoption request sent Successfully" }).status(200);
    console.log(resp);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = { reqAdopt };
