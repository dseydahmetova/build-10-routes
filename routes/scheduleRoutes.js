const express = require('express')
const router = express.Router()

const scheduleController = require('../controllers/scheduleController')

router.get('/', scheduleController.index)
router.get('/:index', scheduleController.show)

module.exports = router