//@desc gte all bootcamps
//@route GET /api/v1/bootcamps
//@access Public, i.e you dont need a token
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Show all bootcamps",
  });
};

//@desc get a single bootcamp
//@route GET /api/v1/bootcamps/:id
//@access Public, i.e you dont need a token
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Show bootcamp ${req.params.id}`,
  });
};

//@desc Create new bootcamp
//@route POST  /api/v1/bootcamps
//@access Private i.e need to be logged in send a token
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Create new bootcamp",
  });
};

//@desc Update Bootcamp
//@route PUT  /api/v1/bootcamps/:id
//@access Private i.e need to be logged in send a token
exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Update bootcamp ${req.params.id}`,
  });
};

//@desc Delete Bootcamp
//@route DELETE       /api/v1/bootcamps/:id
//@access Private i.e need to be logged in send a token
exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Delete bootcamp ${req.params.id}`,
  });
};
