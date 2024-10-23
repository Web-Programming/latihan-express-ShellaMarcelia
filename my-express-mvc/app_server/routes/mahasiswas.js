const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/controllermahasiswa");

//fungsi dan rute index kita gunakan untuk memanggil semua data dalam database mongodb
router.get("/mahasiswa", mahasiswaController.index);
router.post("/mahasiswa/insert", mahasiswaController.insert);
module.exports = router;