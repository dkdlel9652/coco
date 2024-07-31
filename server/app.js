const http = require('http');
const express = require('express');
const app = express()

const port = 8000;

// 뷰 템플릿 상용을 위한 설정
app.set('views', 'views');
app.set('view engine', 'ejs');

// /public/index.html을 보여주기 위한 static 폴더 지정.
app.use(express.static('public'));

// 사람 데이터 목록 선언
const humanList = [
    {no:102, name:'고길동', email:'go@human.com', job:'개발자'},
    {no:103, name:'김길동', email:'kim@human.com', job:'간호사'},
    {no:104, name:'박길동', email:'park@human.com', job:'변호사'},
    {no:105, name:'이길동', email:'lee@human.com', job:'군인'}
];

// localhost:8000/human
app.get('/human', function(req, res) {
    // ejs 페이지로 렌더링 
    // - views/human.ejs 페이지의 코드를 읽어와서 res.end()에 적용한다.

    var message = "사람 정보 관리 페이지";
    req.app.render('human', {message, humanList}, function(err, html) {
        res.end(html);
    });
});

// localhost:8000/human/detail?no=103
app.get('/human/detail', function(req, res) {
    console.log("GET - /human/detail >>>> no: " + req.query.no);
    var idx = humanList.findIndex(function(human) {
        return human.no == req.query.no;
    });
    var human = null;
    if(idx != -1) {
        human = humanList[idx];
    }
    req.app.render('humanDetail', {human}, function(err, html) {
        res.end(html);
    });
});

const server = http.createServer(app);
server.listen(port, function() {
    console.log("서버 실행 중 >>> http://localhost:"+port);
});

// 실제 웹 서버 구축에서는 Nodejs만 사용하지 않고 express를 더 많이 사용합니다.