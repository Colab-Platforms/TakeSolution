const Disclosure = require('../models/Disclosure');
const { deleteFile } = require('../utils/fileHelper');

exports.getAll = async (req, res, next) => {
  try {
    const { fiscalYear } = req.query;
    let query = {};
    if (fiscalYear) query.fiscalYear = fiscalYear;

    const data = await Disclosure.find(query).sort({ date: -1 });
    res.status(200).json({ success: true, count: data.length, data });
  } catch (error) {
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const data = await Disclosure.findById(req.params.id);
    if (!data) return res.status(404).json({ success: false, error: 'Not found' });
    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const data = await Disclosure.create(req.body);
    res.status(201).json({ success: true, data, message: 'Created successfully' });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    let data = await Disclosure.findById(req.params.id);
    if (!data) return res.status(404).json({ success: false, error: 'Not found' });
    
    if (req.body.pdfUrl && req.body.pdfUrl !== data.pdfUrl) deleteFile(data.pdfUrl);
    
    data = await Disclosure.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.status(200).json({ success: true, data, message: 'Updated successfully' });
  } catch (error) {
    next(error);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const data = await Disclosure.findById(req.params.id);
    if (!data) return res.status(404).json({ success: false, error: 'Not found' });
    
    deleteFile(data.pdfUrl);
    await data.deleteOne();
    res.status(200).json({ success: true, data: {}, message: 'Deleted successfully' });
  } catch (error) {
    next(error);
  }
};
