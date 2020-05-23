const User = require('../models/User');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require('config')

const login = async(req, res, next) => {
    const user = await User.findOne({
        login: req.body.login
    }).exec()

    console.log(user);

    if (!user) {
        return res.status(404).send({ message: "User Not found." });
    }

    const isValidPassword = bcrypt.compareSync(
        req.body.password,
        user.password
    )

    if (!isValidPassword) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
    }

    const token = jwt.sign({ id: user.id }, config.get('secret'), {
        expiresIn: 86400 // 24 hours
    });

    res.json({
        id: user._id,
        accessToken: token,
        username: user.firstName+" "+user.lastName
    })
}

const check = (req,res)=> {
    return res.json({user:req.user});
}

module.exports = {
    login,
    check
}