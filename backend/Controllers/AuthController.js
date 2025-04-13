const bcrypt = require('bcrypt');
const UserModel = require("../Models/User");
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
        console.log("Signup Request Body:", req.body);
        const {name, email, password} = req.body;
        const user = await UserModel.findOne({email});
        if (user) {
            return res.status(400).json({ 
                message: "User already exists, you can login", 
                success: false 
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({
            message: "Signup successful",
            success: true
        });
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

const login = async (req, res) => {
    try {
        console.log("Login Request Body:", req.body);
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        const errorMsg = "Auth failed: email or password is incorrect";
        console.log("User Data:", user);
        if (!user) {
            return res.status(403).json({ message: errorMsg, success: false });
        }
        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(403).json({ message: errorMsg, success: false });
        }

        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
        
        console.log("JWT_SECRET:", process.env.JWT_SECRET);  // 🔍 Check if it's defined
        console.log("Generated Token:", jwtToken)

        res.status(200).json({
            message: "Login Success",
            success: true,
            jwtToken,
            email,
            name: user.name
        });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

module.exports = { signup, login };
