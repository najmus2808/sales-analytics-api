const Sale = require("../models/Sales");

const TotalRevenue = async (req) => {
  try {
    const data = await Sale.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } },
        },
      },
    ]);
    return { status: "success", data };
  } catch (error) {
    return { status: "fail", message: "Something Went Wrong" };
  }
};

const QuantityByProduct = async (req) => {
  try {
    const data = await Sale.aggregate([
      {
        $group: {
          _id: "$product",
          totalQuantity: { $sum: "$quantity" },
        },
      },
    ]);

    return { status: "success", data };
  } catch (error) {
    return { status: "fail", message: "Something Went Wrong" };
  }
};

const TopProducts = async (req) => {
  try {
    const data = await Sale.aggregate([
      {
        $group: {
          _id: "$product",
          totalRevenue: { $sum: { $multiply: ["$quantity", "$price"] } },
        },
      },
      {
        $sort: { totalRevenue: -1 },
      },
      {
        $limit: 5,
      },
    ]);

    return { status: "success", data };
  } catch (error) {
    return { status: "fail", message: "Something Went Wrong" };
  }
};

const AveragePrice = async (req) => {
  try {
    const data = await Sale.aggregate([
      {
        $group: {
          _id: null,
          averagePrice: { $avg: "$price" },
        },
      },
    ]);

    return { status: "success", data };
  } catch (error) {
    return { status: "fail", message: "Something Went Wrong" };
  }
};

const RevenueByMonth = async (req) => {
  try {
    const data = await Sale.aggregate([
      {
        $project: {
          year: { $year: "$date" },
          month: { $month: "$date" },
          totalRevenue: { $multiply: ["$quantity", "$price"] },
        },
      },
      {
        $group: {
          _id: { year: "$year", month: "$month" },
          totalRevenue: { $sum: "$totalRevenue" },
        },
      },
      {
        $sort: { "_id.year": 1, "_id.month": 1 },
      },
    ]);

    return { status: "success", data };
  } catch (error) {
    return { status: "fail", message: "Something Went Wrong" };
  }
};

const HighestQuantitySold = async (req) => {
  try {
    const data = await Sale.aggregate([
      {
        $group: {
          _id: { product: "$product", date: "$date" },
          totalQuantity: { $sum: "$quantity" },
        },
      },
      {
        $sort: { totalQuantity: -1 },
      },
      {
        $limit: 1,
      },
      {
        $project: {
          _id: 0,
          product: "$_id.product",
          totalQuantity: 1,
        },
      },
    ]);

    return { status: "success", data };
  } catch (error) {
    return { status: "fail", message: "Something Went Wrong" };
  }
};

const DepartmentSalaryExpense = async (req) => {
  try {
    const data = await Sale.aggregate([
      {
        $group: {
          _id: "$department",
          totalSalaryExpense: { $sum: { $multiply: ["$quantity", "$price"] } },
        },
      },
    ]);

    return { status: "success", data };
  } catch (error) {
    return { status: "fail", message: "Something Went Wrong" };
  }
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
