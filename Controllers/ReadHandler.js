const ReadHandler = (req, res) => {
  res.status(200).json({
    message: "readsuccess",
  });
};
module.exports = ReadHandler;
