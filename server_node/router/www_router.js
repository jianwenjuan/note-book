const express = require('express');
let router = express.Router();

router.get('/user/login',(req,res)=>{
    res.send('登陆成功');
    res.end();

});



module.exports = router;