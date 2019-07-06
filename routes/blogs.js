const express = require("express");
const router = express.Router();

let blogs = require('../blogDatabase');

router.get("/list", async (req, res) => {
    try {
        res.status(200).json({
            data: blogs
        });
    } catch (err) {
        res.status(400).json({
            message: "some error occurred",
            err
        });
    }
});

module.exports = router;