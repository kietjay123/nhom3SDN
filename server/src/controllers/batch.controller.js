const Batch = require('../models/Batch');

exports.getAllBatches = async (req, res) => {
  try {
    const batches = await Batch.find();
    res.status(200).json(batches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBatchById = async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.id);
    if (!batch) return res.status(404).json({ message: 'Không tìm thấy batch' });
    res.json(batch);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createBatch = async (req, res) => {
  try {
    const batch = new Batch(req.body);
    await batch.save();
    res.status(201).json(batch);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateBatch = async (req, res) => {
  try {
    const batch = await Batch.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!batch) return res.status(404).json({ message: 'Không tìm thấy batch' });
    res.json(batch);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteBatch = async (req, res) => {
  try {
    const batch = await Batch.findByIdAndDelete(req.params.id);
    if (!batch) return res.status(404).json({ message: 'Không tìm thấy batch' });
    res.json({ message: 'Xóa batch thành công' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
