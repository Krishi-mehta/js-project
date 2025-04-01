const bcrypt = require('bcrypt')
const UserModel = require("../Models/User");


const signup = async (req, res) => {
    try {
        console.log("Signup Request Body:", req.body);
        const {name, email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(400)
                .json({ message: "User is already exists, you can login ", success: false })
        }
        const userModel = new UserModel ({ name, email, password});
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201)
            .json({
                mesage: "Signup successfully",
                success: true
            })
    } catch (error) {
        console.error("Signup Error:", error); 
        res.status(500)
            .json({
                mesage: "Internal server error",
                success: false
            })
    }
}

module.exports = {
    signup
}