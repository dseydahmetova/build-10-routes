function index(req, res){
    res.render('about/index')
}

function more(req, res){
    res.render('about/more')
}

module.exports = {index, more}