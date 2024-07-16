const { Konsultasi } = require('../models');

exports.createKonsultasi = async (req, res) => {
  try {
    const konsultasi = await Konsultasi.create(req.body);
    res.status(201).json(konsultasi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllKonsultasi = async (req, res) => {
  try {
    const konsultasi = await Konsultasi.findAll();
    res.status(200).json(konsultasi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getKonsultasiById = async (req, res) => {
  try {
    const konsultasi = await Konsultasi.findByPk(req.params.id);
    if (konsultasi) {
      res.status(200).json(konsultasi);
    } else {
      res.status(404).json({ error: 'Konsultasi not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateKonsultasi = async (req, res) => {
  try {
    const [updated] = await Konsultasi.update(req.body, { where: { no_konsultasi: req.params.id } });
    if (updated) {
      const updatedKonsultasi = await Konsultasi.findByPk(req.params.id);
      res.status(200).json(updatedKonsultasi);
    } else {
      res.status(404).json({ error: 'Konsultasi not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteKonsultasi = async (req, res) => {
  try {
    const deleted = await Konsultasi.destroy({ where: { no_konsultasi: req.params.id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Konsultasi not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
