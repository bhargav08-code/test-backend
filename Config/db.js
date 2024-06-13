import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://bhargaavvv:foodhub123@cluster0.dhdx6dl.mongodb.net/foodhub"
    )
    .then(() => console.log("DB CONNECTED"));
};
