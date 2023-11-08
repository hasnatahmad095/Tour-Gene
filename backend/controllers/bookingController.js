import Booking from "../models/Booking.js";

// create new booking
export const createBooking = async (req, res) => {
  // console.log(res, 'res');
  // console.log(req, 'req');
  console.log(req.body, 'new');


//   const newBooking = new Booking(req.body);
//   const savedBooking = await newBooking.save();



//   if(!savedBooking){
//     throw new Error("booking not found")
//     console.log("booking not found");
//   }
// else{

//   console.log(savedBooking, 'saved');
//   res.status(200).json({
//     success: true,
//     message: "Your tour is booked",
//     data: savedBooking,
//   });
// }

  try {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();



    if(!savedBooking){
      throw new Error("booking not found")
      console.log("booking not found");
    }

    console.log(savedBooking, 'saved');
    res.status(200).json({
      success: true,
      message: "Your tour is booked",
      data: savedBooking,
    });
  } catch (err) {
    res.status(500).json({ success: true, message: "internal server error" });
  }
};

// get single booking
export const getBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Booking.findById(id);

    res.status(200).json({
      success: true,
      message: "successful",
      data: book,
    });
  } catch (err) {
    res.status(404).json({ success: true, message: "not found" });
  }
};

// get all booking
export const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.find();

    res.status(200).json({
      success: true,
      message: "successful",
      data: books,
    });
  } catch (err) {
    res.status(500).json({ success: true, message: "internal server error" });
  }
};
