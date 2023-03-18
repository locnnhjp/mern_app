const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    email: {
        type: String,
        lowercase: true
    }
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
