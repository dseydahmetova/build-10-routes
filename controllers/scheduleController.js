const schedule = require('../models/schedule')

function index(req, res){
    res.render('schedule/index',{schedule} )
}

function show(req, res){
    res.render('schedule/show', {day: schedule[req.params.index]})
}

module.exports = {index, show}