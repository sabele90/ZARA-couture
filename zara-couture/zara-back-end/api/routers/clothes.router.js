const {
  getAllClothes,
  getOneClothes,
  createClothes,
  updateClothes,
  deleteClothes,
} = require("../controllers/clothes.contrroller");

const router = require("express").Router();

router.get("/", getAllClothes);
router.get("/:clothesId", getOneClothes);
router.post("/", createClothes);
router.put("/:clothesId", updateClothes);
router.delete("/:clothesId", deleteClothes);

module.exports = router;
