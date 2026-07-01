require("dotenv").config();
const connectDB = require("../config/db");
const app = require("./app");
const PORT = 8080

connectDB();



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});