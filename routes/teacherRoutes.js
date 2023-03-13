const express = require('express')
const router = express.Router()

const teacherController = require('../controllers/teacherController')

router.get('/', teacherController.index)
router.get('/:index', teacherController.show)

module.exports = router