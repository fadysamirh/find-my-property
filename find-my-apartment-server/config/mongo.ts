import mongoose from "mongoose";
import ApartmentModel from "../src/models/mongo/apartment.model";
import {populate} from "../src/data/populate"; // Import mongoose
const {mongoURI} = require("./keys");
export const connectDB = async () => {
    await mongoose
        .connect(process.env.MONGODB_URI || mongoURI)
        .then(() => {
            console.log("MongoDB Connected…");
            populate();
        })
        .catch((err) => console.log(err));
};

