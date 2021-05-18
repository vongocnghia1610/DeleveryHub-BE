const express = require("express");
const router = express.Router();

const khachhangController = require("../app/Controllers/KhachHangController.js");

router.get("/show_goikhachhang", khachhangController.showGoiKH);
router.post("/create-donhang", khachhangController.TaoDonHang);
router.put("/confirm-donhang", khachhangController.XacNhanDonHang);
router.put("/delete-donhang", khachhangController.HuyDonHang);
router.post("/create-bill-package", khachhangController.CreateBillPackage);
router.post("/create_payment_vnpayurl", khachhangController.CreatePaymentVnpayurl);
router.post("/create_payment_vnpayurl_package", khachhangController.CreatePaymentVnpayurlPackage);
router.get("/show_diachi", khachhangController.showDiaChi);

module.exports = router;
