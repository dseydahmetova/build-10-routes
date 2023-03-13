const courses = require('../models/courses')

function index(req, res){
    res.render('courses/index', {courses})
}

function show(req, res){
    res.render('courses/show', {course: courses[req.params.index]})
}

function newCourse(req, res){
    res.render('courses/new')
}

function edit(req, res){
    res.render('courses/edit',{course: courses[req.params.index]} )
}

function post(req, res){
    response = {
        name: req.body.name,
        duration: req.body.duration,
        id: courses.length
    }
    courses.push(response)
    res.redirect('/courses')
}

module.exports = {index, show, newCourse, post, edit}