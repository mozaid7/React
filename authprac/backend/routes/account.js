const express = require('express');
const router = express.Router();
const { default: mongoose } = require('mongoose');
const { authMiddleware } = require('../middleware');
const { Account } = require('../db');

router.get("/balance", authMiddleware, async(req,res) => {
    const account = await Account.findOne({
        userId: req.userId
    });

    res.json({
        balance: account.balance
    });
});

router.post("/transfer", authMiddleware, async(req,res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    const { amount, to } = req.body;

    const account = await Account.findOne({userId: req.userId}).session(session);
    if (!account || account.balance < amount) {
        await session.abortTransaction();
        res.status(403).json({
            msg: "Insufficient Balance"
        });
    }

    const toAccount = await Account.findOne({userId: to}).session(session);
    if (!toAccount) {
        await session.abortTransaction();
        res.status(403).json({
            msg: "Account not found"
        });
    }

    await Account.updateOne({userId: req.userId}, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({userId: to}, { $inc: { balance: amount } }).session(session);

    await session.commitTransaction();
    res.json({
        msg: "Transfer Successful"
    });
});

module.exports = router;