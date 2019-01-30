let express = require('express');    //引入express模块
let Mock = require('mockjs');        //引入mock模块

let app = express(); 
//返回json数据
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// 设置路由配置
app.get('/', function(req, res) {       
    res.send('ikk');
});

app.listen(8080);