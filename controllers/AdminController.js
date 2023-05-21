const Admin = require("../model/Admin");
const bcrypt = require("bcryptjs");

const registerAdmin = async (req, res) => {
  try {
    const { user, password } = req.body;
    if (!user || !password) {
      return res.status(422).json({ error: "Please fill all fields properly" });
    }
    const userExist = await Admin.findOne({ user: "ADMIN" });
    if (userExist) {
      return res.status(422).json({ error: "Admin already exists" });
    }

    const admin = new Admin(req.body);
    // Hashing the password
    const registeredUser = await admin.save();
    res.send(registeredUser);
  } catch (error) {
    console.log(error);
  }
};

// user login page
const adminSignIn = async (req, res) => {
  try {
    const { user, password } = req.body;
    if (!user || !password) {
      return res.json({ error: "Plz Fill the data", code: 1 });
    }
    const userLogin = await Admin.findOne({ user });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      if (!isMatch) {
        res.status(400).json({ error: "Password mismatched.......", code: 2 });
      } else {
        const token = await userLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 8.64e7),
        });
        res.json({ message: "Admin signin successfully.......", code: 3 });
      }
    } else {
      res.status(400).json({ error: "User Not Found.......", code: 4 });
    }
  } catch (error) {
    console.log(error);
  }
};

// for getting the data using cookies from the browser for authentication purpose client side
const hiii = (req, res) => {
  const { user } = req.rootUser;
  res.json({ message: "Admin Sign in successfully..", code: "3" });
  console.log(user);
};

module.exports = { registerAdmin, adminSignIn, hiii };
