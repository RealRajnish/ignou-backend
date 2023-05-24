const AddAppointment = require("../model/AddAppointments");

// for adding the doctors appointments
const addAppointments = async (req, res) => {
  try {
    console.log(req.body);
    const data = new AddAppointment(req.body);
    const resp = await data.save();

    res
      .json({ msg: "Appointment request sent Successfully", code: "success" })
      .status(200);
    console.log(resp);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const viewAppointments = async (req, res) => {
  const filter = {};
  try {
    const data = await AddAppointment.find(filter, {
      customer_details: 1,
      animal_details: 1,
      Date: 1,
      _id: 0,
    });
    let temp = [...data];
    temp.reverse();

    res.send(temp);
    // console.log(temp);
  } catch (error) {
    console.log(error);
  }
};

// Get specific user Appointments list
const getUserAppointments = async (req, res) => {
  const uid = req.params.id;
  try {
    const data = await AddAppointment.find({ "customer_details.email": uid });
    const temp = [...data];
    temp.reverse();
    res.send(temp);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addAppointments, viewAppointments, getUserAppointments };
