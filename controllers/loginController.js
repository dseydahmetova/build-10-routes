function index(req, res){
    res.sendFile('/index.html')
}

module.exports = {index}