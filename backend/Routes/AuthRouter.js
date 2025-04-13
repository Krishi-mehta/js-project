const router = require('express').Router();
const { signupValidation,loginValidation } = require('../Middlewares/AuthValidation');
const { signup,login } = require('../Controllers/AuthController');

router.post('/login', loginValidation, login)
router.post('/signup', signupValidation, signup)
// router.post('/signup', signupValidation, (req, res) => {
//     console.log("Signup Request Data:", req.body);
//     signup(req, res);
// });

module.exports = router;