const DeleteHandler = (req, res) => {
  res.status(200).json({
    message: "deletesuccess",
  });
};
module.exports = DeleteHandler;
