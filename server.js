const express = require("express");
const errorHandler = require("./middleware/errorHandler.js");
const connectDb = require("./config/dcConnection2.js");
const dotenv = require("dotenv").config();

connectDb();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/mycontacts", require ("./routes/contactsRoutes.js"));
app.use("/api/users", require ("./routes/userRoutes.js"));   

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
