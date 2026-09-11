const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
// app.use(express.static(path.join(__dirname, "/public")));

const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    await mongoose.connect(mongo_url);
    console.log("Connected to db");
}

const initDB = async () => {
    await Listing.deleteMany({});

    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "6a9d2395e43e09fc2482ae96"
    }));

    await Listing.insertMany(initData.data);

    console.log("Data was initialized!");

    await mongoose.connection.close();
};

main()
    .then(() => {
        return initDB();
    })
    .catch((err) => {
        console.log(err);
    });