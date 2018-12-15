const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const mysql = require('mysql');
const http = require('http');
const fs = require('fs');
const path = require('path');
const config = require('./config');

const app = express();
const server = http.createServer(app);
server.listen(config.ports);


app.use((req, res, next) => {
    next();
});


// 处理post请求
app.use(bodyParser.urlencoded({ extended: false }));

// 处理文件上传
let multerObj = multer({ dest: './upload' });
app.use(multerObj.any());

// 处理cookie
app.use(cookieParser(require('./secret/cookie_key')));
app.use(cookieSession({
    keys: require('./secret/session_key')
}));

// 请求
// server.use('/admin/',require('./routers/admin_router'));
app.use('/', require('./router/www_router'));

app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
    res.send(html)
})
