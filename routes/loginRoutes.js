const express = require('express')
const router = express.Router()

const loginController = require('../controllers/loginController')

router.get('/', loginController.index)


router.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if (username === 'admin' && password === 'admin') {
        res.redirect('/welcome');
    }
    else {
        res.send(`<h1>Login failed, try it again</h1>`);
    }
})


module.exports = router