// @desc    Get all bootcamps
// @route   GET /api/v1/bootcaps
// @access  Public
exports.getBootcamps = (req, res, next) => {
	res.status(200).json({ success: true, msg: 'show all bootcamps' });
};

// @desc    Get single bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public
exports.getBootcamp = (req, res, next) => {
	res.status(200).json({ success: true, msg: `get single bootcamp ${req.params.id}` });
};

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamp
// @access  Public
exports.createBootcamp = (req, res, next) => {
	res.status(200).json({ success: true, msg: 'post single bootcamp' });
};

// @desc    Update bootcamps
// @route   PUT /api/v1/bootcamps
// @access  Public
exports.updateBootcamp = (req, res, next) => {
	res.status(200).json({ success: true, msg: `Update single bootcamp ${req.params.id}` });
};

// @desc    Delete a bootcamp
// @route   DELETE /api/v1/bootcamps
// @access  Public
exports.deleteBootcamp = (req, res, next) => {
	res.status(200).json({ success: true, msg: `Delete single bootcamp ${req.params.id}` });
};
