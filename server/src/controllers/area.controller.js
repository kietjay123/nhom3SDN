const Area = require('../models/Area');

exports.getAllAreas = async (req, res) => {
  try {
    const areas = await Area.find();
    res.json(areas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createArea = async (req, res) => {
  try {
    const area = new Area(req.body);
    await area.save();
    res.status(201).json(area);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateArea = async (req, res) => {
  try {
    const area = await Area.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(area);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteArea = async (req, res) => {
  try {
    await Area.findByIdAndDelete(req.params.id);
    res.json({ message: 'Xóa khu vực thành công' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
