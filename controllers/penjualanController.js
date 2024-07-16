const { Penjualan } = require('../models');

exports.createPenjualan = async (req, res) => {
  try {
    const penjualan = await Penjualan.create(req.body);
    res.status(201).json(penjualan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllPenjualan = async (req, res) => {
  try {
    const penjualan = await Penjualan.findAll();
    res.status(200).json(penjualan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPenjualanById = async (req, res) => {
  try {
    const penjualan = await Penjualan.findByPk(req.params.id);
    if (penjualan) {
      res.status(200).json(penjualan);
    } else {
      res.status(404).json({ error: 'Penjualan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePenjualan = async (req, res) => {
  try {
    const [updated] = await Penjualan.update(req.body, { where: { id_penjualan: req.params.id } });
    if (updated) {
      const updatedPenjualan = await Penjualan.findByPk(req.params.id);
      res.status(200).json(updatedPenjualan);
    } else {
      res.status(404).json({ error: 'Penjualan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePenjualan = async (req, res) => {
  try {
    const deleted = await Penjualan.destroy({ where: { id_penjualan: req.params.id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Penjualan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
