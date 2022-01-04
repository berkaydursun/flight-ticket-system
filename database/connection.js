var mongoose = require("mongoose");
require("dotenv").config();
// Connect to MongoDb
module.exports = () => {
    mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://berkaydursun:berkaydursun08@usersdb.z7jnu.mongodb.net/userdb?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true });

    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });

    mongoose.Promise = global.Promise;
}