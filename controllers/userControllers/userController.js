const {User} = require("../../models/user/user")
const {connection} = require("mongoose");

exports.createUser = (req, res) => {
    const {name, email, walletAddress, privateKey} = req.body
    const createUserData = new User({
        name, email, walletAddress, privateKey
    });
    createUserData.save(err => {
        if (err) {
            res.send(`Error saving data: ${err}`)
        }
    }).then(result => {
        console.log(`User Created Successfully: ${result}`)
        connection.close()
    })
}