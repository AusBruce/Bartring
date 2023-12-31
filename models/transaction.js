const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    user1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    user2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    products1: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
    ],
    products2: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
    ],
    status: {
        type: String,
        default: "active",
        enum: [
            "active",
            "interrupted",
            "pending_user1",
            "pending_user2",
            "finished",
        ],
    },
});

const Transaction = mongoose.model("transaction", transactionSchema);

module.exports = Transaction;
