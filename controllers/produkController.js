const { Produk } = require('../models');

exports.createProduk = async (req, res) => {
  try {
    const produk = await Produk.create(req.body);
    res.status(201).json(produk);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllProduk = async (req, res) => {
  try {
    const produk = await Produk.findAll();
    res.status(200).json(produk);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProdukById = async (req, res) => {
  try {
    const produk = await Produk.findByPk(req.params.id);
    if (produk) {
      res.status(200).json(produk);
    } else {
      res.status(404).json({ error: 'Produk not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProduk = async (req, res) => {
  try {
    const [updated] = await Produk.update(req.body, { where: { id_produk: req.params.id } });
    if (updated) {
      const updatedProduk = await Produk.findByPk(req.params.id);
      res.status(200).json(updatedProduk);
    } else {
      res.status(404).json({ error: 'Produk not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProduk = async (req, res) => {
  try {
    const deleted = await Produk.destroy({ where: { id_produk: req.params.id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Produk not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
