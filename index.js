import dotenv from "dotenv";
dotenv.config();
import { app } from "./src/server.js";
import { connectToDb } from "./src/database/index.js";

const PORT = process.env.PORT;
connectToDb();
app.listen(PORT, () => {
  console.log(`Server Runing on ${PORT}`);
});

//  use same as above