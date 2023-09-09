const express = require("express");
const SalesController = require("../controllers/SalesController");

const router = express.Router();

// Sales
router.get("/sales/total-revenue", SalesController.TotalRevenue);
router.get("/sales/quantity-by-product", SalesController.QuantityByProduct);
router.get("/sales/top-products", SalesController.TopProducts);
router.get("/sales/average-price", SalesController.AveragePrice);
router.get("/sales/revenue-by-month", SalesController.RevenueByMonth);
router.get("/sales/highest-quantity-sold", SalesController.HighestQuantitySold);
router.get("/sales/department-salary-expense", SalesController.DepartmentSalaryExpense);

module.exports = router;
