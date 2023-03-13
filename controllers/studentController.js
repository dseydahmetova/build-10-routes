const students = require('../models/students')

function index(req, res) {
    res.render('students/index', {students})
}

function show(req, res) {
    res.render('students/show', {student: students[req.params.index]})
}

function newStudent(req, res){
    res.render('students/new')
}

function edit(req, res) {
    res.render('students/edit', {student: students[req.params.index]})
}

function post(req, res){
    response = {
        name: req.body.name,
        last_name: req.body.last_name,
        cell: req.body.cell,
        status: true,
        id: students.length
    }
    students.push(response)
    res.redirect('/students')
}

module.exports = {index, show, newStudent, post, edit}