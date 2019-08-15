var express=require('express');
var app=express();
var router=require('./router');
var bodyParser = require("body-parser");
var debug = require('debug')('my-application');
var cookieParser = require("cookie-parser");


app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/',router)

app.listen(3001,function(){
    debug('Express server listening on port ' + 3001);
})