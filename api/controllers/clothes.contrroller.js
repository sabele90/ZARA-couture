const Clothes = require("../models/clothes.model");

async function getAllClothes(req, res) {
  try {
    const clothes = await Clothes.findAll();
    return res.status(200).json(clothes);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

async function getOneClothes(req, res) {
  try {
    const clothes = await Clothes.findByPk(req.params.clothesId);
    if (clothes) {
      return res.status(200).json(clothes);
    } else {
      return res.status(404).send({ message: "clothes not found" });
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

async function createClothes(req, res) {
  try {
    const clothes = await Clothes.create(req.body);
    return res.status(201).json({
      message: "Clothes created successfully",
      clothes,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

async function updateClothes(req, res) {
  try {
    const clothes = await Clothes.update(req.body, {
      returning: true,
      where: {
        id: req.params.clothesId,
      },
    });
    if (clothes !== 0) {
      return res.status(200).json({
        message: "clothes updated",
        clothes: clothes,
      });
    } else {
      return res.status(404).send("clothes not found");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

async function deleteClothes(req, res) {
  try {
    const clothes = await Clothes.destroy({
      where: {
        id: req.params.clothesId,
      },
    });
    if (clothes) {
      return res.status(200).json("clothes deleted");
    } else {
      return res.status(404).send("clothes not found");
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = {
  getAllClothes,
  getOneClothes,
  createClothes,
  updateClothes,
  deleteClothes,
};
