const teachers = require('../models/teachers')

function index(req, res){
    res.render('teacher/index', {teachers})
}

function show(req, res){
    res.render('teacher/show', {teacher: teachers[req.params.index]})
}

module.exports = {index, show}