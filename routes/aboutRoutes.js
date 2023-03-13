const express = require('express')
const router = express.Router()

const aboutController = require('../controllers/aboutController')

router.get('/', aboutController.index)
router.get('/more', aboutController.more)

module.exports = router