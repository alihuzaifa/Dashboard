import OverallStat from "../models/OverallStat.js";
export const getSales = async (req, res) => {
  try {
    const sales = await OverallStat.find();
    res.statue(200).json({
      realForm: sales,
      data: sales[0],
    });
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};
