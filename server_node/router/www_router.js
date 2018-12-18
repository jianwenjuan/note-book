const express = require('express');
const common = require('../lib/commom.js');
const config = require('../config');
let router = express.Router();


router.post('/user/register', (req, res) => {

    const params = req.body;
    res.send({
        code: 0,
        msg: '注册成功'

    });

    res.end();

});


router.post('/user/login', (req, res) => {

    const params = req.body;

    if (params.username === config.username && common.md5(params.password) === config.password) {
        res.send({
            code: 0,
            msg: '登录成功'
        });
    } else {
        res.send({
            code: 1,
            msg: '用户名密码错误'
        });
    }

    res.end();

});

router.post('/book/addBook', (req, res) => {

    res.send({
        code: 0,
        msg: '添加成功'

    });

    res.end();



})



module.exports = router;