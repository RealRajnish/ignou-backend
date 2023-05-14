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
    // let n = data.length();
    // let temp;
    // for (let i = n - 1; i > -1; n--) {
    //   // Storing the elements of the input array in reverse order
    //   temp[n - i - 1] = array[i];
    // }
    res.send(data);
    console.log(typeof data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addAppointments, viewAppointments };
