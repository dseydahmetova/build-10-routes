const express = require('express')
const router = express.Router()

const thanksController = require('../controllers/thanksController')

router.get('/', thanksController.index)


module.exports = router