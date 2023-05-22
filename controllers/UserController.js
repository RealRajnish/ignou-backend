const User = require("../model/UserSchema");
const bcrypt = require("bcryptjs");

// registering the user
const registeruser = async (req, res) => {
  try {
    const { name, email, phone, address, password, cpassword } = req.body;
    if (!name || !email || !phone || !address || !password || !cpassword) {
      return res.status(422).json({ error: "Please fill all fields properly" });
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(422).json({ error: "email already exists" });
    }

    const user = new User(req.body);
    // Hashing the password
    if (user.password === user.cpassword) {
      const registeredUser = await user.save();
      res.send(registeredUser);
    } else {
      res.send("Password mismatched");
    }
  } catch (e) {
    console.log(e);
    res.json({ error: "Email is invalid", code: 1 });
  }
};

// user login page
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ error: "Plz Fill the data", code: 1 });
    }
    const userLogin = await User.findOne({ email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      if (!isMatch) {
        res.status(400).json({ error: "Password mismatched.......", code: 2 });
      } else {
        const token = await userLogin.generateAuthToken();
        console.log(token);
        // res.cookie("jwtoken", token);
        // res.setHeader("Set-Cookie", `jwtoken=${token}`);
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 2.628e9),
          httpOnly: true,
        });
        res.json({ message: "user signin successfully.......", code: 3 });
      }
    } else {
      res.status(400).json({ error: "User Not Found.......", code: 4 });
    }
  } catch (error) {
    console.log(error);
  }
};

// for getting the data using cookies from the browser for authentication purpose client side
const hii = (req, res) => {
  const { name, email, phone, address } = req.rootUser;
  res.json({ name, email, phone, address });
  console.log(req.rootUser.name);
};

// Logout page
const logout = (req, res) => {
  console.log("Hello my logout page");
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).json({
    message: "Logout successfully",
  });
};

// Show all users
const getAllUsers = async (req, res) => {
  try {
    const data = await User.find({});
    const temp = data.map((elem) => {
      const { name, email, phone, address } = elem;
      return { name, email, phone, address };
    });

    res.send(temp);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registeruser, signin, hii, logout, getAllUsers };
