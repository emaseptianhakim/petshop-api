const { Dokter } = require('../models');

exports.createDokter = async (req, res) => {
  try {
    const dokter = await Dokter.create(req.body);
    res.status(201).json(dokter);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllDokter = async (req, res) => {
  try {
    const dokters = await Dokter.findAll();
    res.status(200).json(dokters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDokterById = async (req, res) => {
  try {
    const dokter = await Dokter.findByPk(req.params.id);
    if (dokter) {
      res.status(200).json(dokter);
    } else {
      res.status(404).json({ error: 'Dokter not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDokter = async (req, res) => {
  try {
    const [updated] = await Dokter.update(req.body, { where: { id_dokter: req.params.id } });
    if (updated) {
      const updatedDokter = await Dokter.findByPk(req.params.id);
      res.status(200).json(updatedDokter);
    } else {
      res.status(404).json({ error: 'Dokter not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteDokter = async (req, res) => {
  try {
    const deleted = await Dokter.destroy({ where: { id_dokter: req.params.id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Dokter not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
