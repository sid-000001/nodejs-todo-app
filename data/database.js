import mongoose from "mongoose";

export const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "backendApi",
    })
    .then(() => console.log("Database Connected"))
    .catch((e) => console.log(e));
};
