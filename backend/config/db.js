const mongoose = require('mongoose');

const dbUrl = process.env.ATLASDB_URL;
console.log(process.env.ATLASDB_URL);

connectDB()
    .then(() => {
        console.log("connected to DB")
    })
    .catch((err) => {
        console.log(err);
    });

async function connectDB() {
    await mongoose.connect(dbUrl);



}

module.exports = connectDB;
