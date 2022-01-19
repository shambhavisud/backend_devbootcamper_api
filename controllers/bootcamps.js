const ErrorResponse = require("../utils/errorResponse");

const Bootcamp = require("../models/Bootcamp");

//@desc gte all bootcamps
//@route GET /api/v1/bootcamps
//@access Public, i.e you dont need a token
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();

    res.status(200).json({
      success: true,
      count: bootcamps.length,
      data: bootcamps,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//@desc get a single bootcamp
//@route GET /api/v1/bootcamps/:id
//@access Public, i.e you dont need a token
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      //return res.status(400).json({ success: false });

      //correctly formatted ID not present in the db
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    //res.status(400).json({ success: false });
    //non correctly formatted ID
    next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
};

//@desc Create new bootcamp
//@route POST  /api/v1/bootcamps
//@access Private i.e need to be logged in send a token
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

//@desc Update Bootcamp
//@route PUT  /api/v1/bootcamps/:id
//@access Private i.e need to be logged in send a token
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    return res.status(400).json({
      success: false,
    });
  }
};

//@desc Delete Bootcamp
//@route DELETE       /api/v1/bootcamps/:id
//@access Private i.e need to be logged in send a token
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) {
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    return res.status(400).json({
      success: false,
    });
  }
};
