const express = require('express');
const router = express.Router();
const zod = require('zod');
const { User, Account } = require('../db');
const JWT_SECRET = require('../config');
const jwt = require("jsonwebtoken");

const signupBody = zod.object({
    username: zod.string().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string()
});


router.post("/signup", async(req,res) => {
    const { success } = signupBody.safeParse(req.body);

    if (!success) {
        res.status(411).json({
            msg: "Input is Invalid"
        });
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if (existingUser) {
        res.status(411).json({
            msg: "Email is already taken"
        });
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    const userId = user._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({userId}, JWT_SECRET);
    res.json({
        msg: "User created successfully",
        token
    })
});

const signinBody = zod.object({
    username: zod.string().email(),
	firstName: zod.string(),
})

router.post("/signin", async(req,res) => {
    const { success } = signinBody.safeParse(req.body);

    if (!success) {
        res.status(411).json({
            msg: "Input is Invalid"
        });
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if(user) {
        const token = jwt.sign({userId: user._id}, JWT_SECRET);
        res.json({
            token
        })
        return
    }
    res.status(411).json({
        message: "Error while logging in"
    })
})

const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/", authMiddleware, async(req,res) => {
    const { success } = updateBody.safeParse(req.body);

    if (!success) {
        res.status(411).json({
            msg: "Input is Invalid"
        });
    }

    await User.updateOne(req.body, {id: req.userId});
    res.json({
        message: "Updated successfully"
    })
})

module.exports = router;