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

const mongoose = require("mongoose");

const Createhandler = async (req, res) => {
  const MoviesModel = mongoose.model("YourModelname");

  console.log(req.body);

  const { name, info, image, rating } = req.body;

  if (!name) {
    res.status(400).json({
      status: "failed",
      message: "name of teh movie is required",
    });
    return;
  }

  const createddata = await MoviesModel.create({
    name,
    info: info,
    image: image,
    rating: rating,
  });

  res.status(200).json({
    message: "successcreate",
    createddata: createddata,
  });
};
module.exports = Createhandler;
