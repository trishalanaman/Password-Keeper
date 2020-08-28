const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/user");
const Site = require("../models/sites");

router.post("/:userId", (req, res, next) => {
  User.findById(req.params.userId)
    
    .then(user => {
      if (!user) {
        return res.status(404).json({
          message: "User not found"
        })
      }
      const site = new Site({
        _id: mongoose.Types.ObjectId(),
        user: req.params.userId,
        website: req.body.website,
        username: req.body.username,
        password: req.body.password
      })
      return site.save();
    })
    .then(result => {
      console.log(result);
      res.status(201).json({
      message: "Success",
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    })
})

router.get("/list/:userId", (req, res, next) => {
  Site.find({ user: req.params.userId })
  //.select("website username password")
    .exec()
    .then(site => {
      if (site<1) {
         return res.status(404).json({
          message: "No sites found"
        });
      }
      res.status(200).json({
        websites:site.map(site => {
          return {
            website: site.website,
            username: site.username,
            password: site.password
        }
        
      })
    })
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
  
});

module.exports = router;