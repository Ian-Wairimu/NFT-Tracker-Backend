const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is required"
    },
    email: {
        type: String,
        require: true,
        unique: true,
        required: "Name is required"
    },
    walletAddress: {
        type: String,
        require: true,
        unique: true
    },
    privateKey: {
        type: String,
        require: true,
        unique: true
    }
},{
    timestamps: true
});

module.exports = new mongoose.model("User", userSchema);