let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors')
const {sequelize} = require('./models')

const config = require('./config/config')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

require('./route')(app)

// app.get('/status', function (req, res) {
//     res.send('Hello nodejs server belonging to nitiphumi');
// });

// app.get('/hello/:name', function (req, res) {
//     console.log('hello - ' + req.params.name);
//     res.send('Say hello with ' + req.params.name);
// });

// app.get('/user/:userId', function (req, res) {
//     res.send('ดูข้อมูลผู้ใช้งาน' + req.params.userId);
// });

// app.get('/users', function (req, res) {
//     res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด');
// });

// app.post('/user/:userId', function (req, res) {
//     res.send('ทำการสร้างผู้ใช้งาน ' + JSON.stringify(req.body));
// });

// app.put('/user/:userId', function (req, res) {
//     res.send('แก้ไขข้อมูลผู้ใช้ ' + req.params.userId + ' : ' + JSON.stringify(req.body.name));
// });

// app.delete('/user/:userId', function (req, res) {
//     res.send('ทำการลบผู้ใช้งาน: ' + req.params.userId + ' : ' + JSON.stringify(req.body));
// });

let port = process.env.PORT || config.port;

sequelize.sync({force: false}).then(() => {
 app.listen(port, function () {
 console.log('Server running on ' + port)
 })
})

