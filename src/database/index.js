import mongoose from "mongoose";
import { dbstreamHandler, mongourl } from "./dbconfig.js";


export const connectToDb = () => {
  mongoose.connect(mongourl);
  const db = mongoose.connection;
  db.on("error", dbstreamHandler.error);
  db.on("open", dbstreamHandler.open);
};


//same use as above