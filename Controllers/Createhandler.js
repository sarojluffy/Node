// const mongoose = require("mongoose");

// const Createhandler = async (req, res) => {
//   const MoviesModel = mongoose.model("YourModelname"); //importing the model/collection , CALLED INSIDE THE FUNCTION
//   // cause importing the model only after it has been initialized in app.js and only if we enter this route , else if we had initalized this outside of create handler than it would try top import model which has never been initialized in App.js

//   console.log(req.body); //remember you need a middlewae to display  , else it finna be undefined

//   const { name, info, image, rating } = req.body;
//   //validating before adding to database

//   if (!name) {
//     res.status(400).json({
//       status: "failed",
//       message: "name of teh movie is required",
//     });
//     return; // as it returns the code below (create in db ) wont run and prevents from faulty data to register in db
//   }

//   const createddata = await MoviesModel.create({
//     // data created in database
//     name, //when key and value  are same it can be written only one
//     info: info,
//     image: image,
//     rating: rating,
//   });
//   // await MoviesModel.create({
//   //   name: "anymovie",
//   //   info: "random inf0",
//   //   image: "random image",
//   //   rating: 4,
//   // });
//   res.status(200).json({
//     // this code executes only after the await function above is completed
//     // response
//     message: "successcreate",
//     createddata: createddata,
//   });
// };
// module.exports = Createhandler;
// ------------------------------------------------------------------------------------------------------------------------
// @2 alternative for validation ,better version
// const mongoose = require("mongoose");

// const Createhandler = async (req, res) => {
//   const MoviesModel = mongoose.model("YourModelname");

//   console.log(req.body);

//   const { name, info, image, rating } = req.body;

//   try {
//     // alternative for validation ,better version
//     if (!name) throw "name of the movie is required";
//   } catch (e) {
//     // e comes from the

//     res.status(400).json({
//       status: "failed",
//       message: e,
//     });
//     return; //the code below wont be executed as return is done , so that the faulty data wont be registeredd in the create method below
//   }

//   const createddata = await MoviesModel.create({
//     name,
//     info: info,
//     image: image,
//     rating: rating,
//   });

//   res.status(200).json({
//     message: "successcreate",
//     createddata: createddata,
//   });
// };
// module.exports = Createhandler;
// -------------------------------------------------------------------------------------------------------------------------
// @validation approach but this time the modal is upadted , look model

const mongoose = require("mongoose");

const Createhandler = async (req, res) => {
  const MoviesModel = mongoose.model("YourModelname");

  console.log(req.body);

  const { name, info, image, rating } = req.body;
  let createddata; // created a variqable  as it is local scoped inside the try block
  try {
    createddata = await MoviesModel.create({
      //
      name,
      info: info,
      image: image,
      rating: rating,
    });
  } catch (e) {
    //  e is recieved from the model
    res.status(400).json({
      status: "failed",

      errormessage: e.message,
    });
    return; // the code below  wont run if the cactch block runs, cant show success message if the error has encountered
  }

  res.status(200).json({
    message: "successcreate",
    createddata: createddata,
  });
};
module.exports = Createhandler;
