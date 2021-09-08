import dotenv from "dotenv";

dotenv.config();

export const mongourl = process.env.MONGO_URL;

export const dbstreamHandler = {
  error: () => {
    console.log("error while connect to db");
  },
  open: () => {
    console.log("connection successfuly done");
  },
};


// use ths same as above