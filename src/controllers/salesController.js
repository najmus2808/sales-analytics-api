const SalesService = require("../services/SalesService");

const TotalRevenue = async (req, res) => {
  const result = await SalesService.TotalRevenue(req);
  return res.status(200).json(result);
};

const QuantityByProduct = async (req, res) => {
  const result = await SalesService.QuantityByProduct(req);
  return res.status(200).json(result);
};

const TopProducts = async (req, res) => {
  const result = await SalesService.TopProducts(req);
  return res.status(200).json(result);
};

const AveragePrice = async (req, res) => {
  const result = await SalesService.AveragePrice(req);
  return res.status(200).json(result);
};

const RevenueByMonth = async (req, res) => {
  const result = await SalesService.RevenueByMonth(req);
  return res.status(200).json(result);
};

const HighestQuantitySold = async (req, res) => {
  const result = await SalesService.HighestQuantitySold(req);
  return res.status(200).json(result);
};

const DepartmentSalaryExpense = async (req, res) => {
  const result = await SalesService.DepartmentSalaryExpense(req);
  return res.status(200).json(result);
};

module.exports = {
  TotalRevenue,
  QuantityByProduct,
  TopProducts,
  AveragePrice,
  RevenueByMonth,
  HighestQuantitySold,
  DepartmentSalaryExpense,
};
