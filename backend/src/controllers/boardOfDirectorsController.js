const BoardOfDirectors = require('../models/BoardOfDirectors');
const { deleteFile } = require('../utils/fileHelper');

exports.getAll = async (req, res, next) => {
  try {
    const data = await BoardOfDirectors.find().sort({ order: 1 });
    res.status(200).json({ success: true, count: data.length, data });
  } catch (error) {
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const data = await BoardOfDirectors.findById(req.params.id);
    if (!data) return res.status(404).json({ success: false, error: 'Not found' });
    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const data = await BoardOfDirectors.create(req.body);
    res.status(201).json({ success: true, data, message: 'Created successfully' });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    let data = await BoardOfDirectors.findById(req.params.id);
    if (!data) return res.status(404).json({ success: false, error: 'Not found' });
    
    if (req.body.imageUrl && req.body.imageUrl !== data.imageUrl) deleteFile(data.imageUrl);
    
    data = await BoardOfDirectors.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.status(200).json({ success: true, data, message: 'Updated successfully' });
  } catch (error) {
    next(error);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const data = await BoardOfDirectors.findById(req.params.id);
    if (!data) return res.status(404).json({ success: false, error: 'Not found' });
    
    deleteFile(data.imageUrl);
    await data.deleteOne();
    res.status(200).json({ success: true, data: {}, message: 'Deleted successfully' });
  } catch (error) {
    next(error);
  }
};
