const express = require('express')
const router = express.Router()

const studentController = require('../controllers/studentController')

router.get('/', studentController.index)
router.get('/new', studentController.newStudent)
router.get('/:index', studentController.show)
router.get('/:index/edit', studentController.edit)

router.post('/', studentController.post)
   

module.exports = router