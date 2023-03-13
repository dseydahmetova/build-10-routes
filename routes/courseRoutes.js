const express = require('express')
const router = express.Router()

const courseController = require('../controllers/courseController')

router.get('/', courseController.index)
router.get('/new', courseController.newCourse)
router.get('/:index', courseController.show)
router.get('/:index/edit', courseController.edit)

router.post('/', courseController.post)

module.exports = router