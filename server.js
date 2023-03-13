const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 8080

const {createEngine} = require('jsx-view-engine')
app.set('view engine', 'jsx')
app.engine('jsx', createEngine())


app.use(express.static("public"));
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({extended: false}))


const studentRoutes = require('./routes/studentRoutes')
const homeRoutes = require('./routes/homeRoutes')
const coursesRoutes = require('./routes/courseRoutes')
const loginRoutes = require('./routes/loginRoutes')
const scheduleRoutes = require('./routes/scheduleRoutes')
const teacherRoutes = require('./routes/teacherRoutes')
const aboutRoutes = require('./routes/aboutRoutes')
const contactRoutes = require('./routes/contactRoutes')
const thanksRoutes = require('./routes/thanksRoutes')
const welcomeRoutes = require('./routes/welcomeRoutes')

app.use('/', loginRoutes)
app.use('/home', homeRoutes)
app.use('/students', studentRoutes)
app.use('/teachers', teacherRoutes)
app.use('/courses', coursesRoutes)
app.use('/schedules', scheduleRoutes)
app.use('/about', aboutRoutes)
app.use('/contact', contactRoutes)
app.use('/thanks', thanksRoutes)
app.use('/welcome', welcomeRoutes)




app.listen(PORT, ()=>{
    console.log('Listening port 8080')
})