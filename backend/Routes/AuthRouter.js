const router = require('express').Router();
const { signupValidation } = require('../Middlewares/AuthValidation');
const { signup } = require('../Controllers/AuthController');

router.post('/login',(req, res)=>{
    res.send("login successfull ")
})
router.post('/signup', signupValidation, signup)
router.post('/signup', signupValidation, (req, res) => {
    console.log("Signup Request Data:", req.body);
    signup(req, res);
});

module.exports = router;