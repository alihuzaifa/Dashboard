import User from "../models/User.js";
import Transaction from "../models/Transaction.js";
export const getAdmin = async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");
    res.status(200).json(admins);
  } catch (error) {
    res.status(401).json({
      message: error?.message,
    });
  }
};
export const getUserPerformance = async (req, res) => {
  try {
    /*The code first uses the aggregate method of the User model to fetch a user document with a particular _id. It then uses the $lookup operator to join the "affiliatestats" collection to the user document based on the _id field in the user document and the userId field in the "affiliatestats" collection. The resulting joined documents are then flattened using the $unwind operator to create multiple documents for each affiliate sale.

The resulting userWithStats array will contain one document, which is the matched user document with an array of affiliate stats documents.

The code then uses Promise.all to retrieve all of the transaction documents corresponding to the user's affiliate sales. This is done by mapping over the affiliateSales array in the userWithStats[0].affiliateStats object and calling Transaction.findById(id) for each id.

The resulting saleTransactions array will contain all of the retrieved transaction documents, including any null values for transactions that could not be found.

Finally, the code filters out any null values from the saleTransactions array and sends a JSON response to the client with the user document and the filtered transaction documents. The response will have a status code of 200. */
    const { id } = req?.params;
    // const userWithStat = await
  } catch (error) {
    res.status(401).json({
      message: error?.message,
    });
  }
};
