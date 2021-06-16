const User = require("../model/user.model")
const router = require("express").Router();
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/add", (req, res) => {
    var data = req.body
    var user = new User(data);
    user.save()
        .then((result) => {
            res.status(200).json({
                message: "User added successfully",
                status: true,
            })
        })
        .catch((error) => {
            res.status(400).json({
                message: "Something went wrong",
                status: false,
                error
            })
        });
})

router.get("/get", (req, res) => {
    User.find()
        .then((result) => {
            res.status(200).json({
                message: "Data fetched",
                status: true,
                data: result
            })
        })
        .catch((error) => {
            res.status(400).json({
                message: "Something went wrong",
                status: false,
                error
            })
        });
})

router.delete("/delete/:id", (req, res) => {
    User.findOneAndDelete({
            _id: req.params.id
        })
        .then((result) => {
            res.status(200).json({
                message: "Deleted",
                status: true,
            })
        })
        .catch((error) => {
            res.status(400).json({
                message: "Something went wrong",
                status: false,
                error
            })
        });
})
module.exports = router