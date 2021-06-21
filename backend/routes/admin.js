const router = require("express").Router();
const adminController = require("../controllers/adminController");

router.get("/dashboard", adminController.viewDashboard);
router.get("/product", adminController.viewProduct);
router.get("/bank", adminController.viewBank);
router.get("/booking", adminController.viewBooking);

module.exports = router;
