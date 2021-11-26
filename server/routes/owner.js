const router = require("express").Router();
const Owner = require("../models/owner");
//POST - Create a new owner
router.post("/owners", async (req, res) => {
  try {
    let owner = new Owner();
    owner.name = req.body.name;
    owner.about = req.body.about;

    await owner.save();

    res.json({ status: true, message: "Succesfully saved" });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});
//GET - get all owners

router.get("/owners", async (req, res) => {
  try {
    let owners = await Owner.find();
    res.json({
      success: true,
      owners: owners,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
