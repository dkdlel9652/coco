const http = require('http');
const express = require('express');
const app = express()

const port = 8000;

// 뷰 템플릿 상용을 위한 설정
app.set('views', 'views');
app.set('view engine', 'ejs');


// /public/index.html을 보여주기 위한 static 폴더 지정.
app.use(express.static('public'));

const humanList = [
    {no:102, name:'고길동', email:'goo@human.com'},
    {no:103, name:'장길동', email:'jang@human.com'},
    {no:104, name:'이길동', email:'lee@human.com'},
    {no:105, name:'허길동', email:'hue@human.com'},
];

// localhost:8000/human
app.get('/human', function(req, res) {
    // ejs 페이지로 렌더링 
    // - views/human.ejs 페이지의 코드를 읽어와서 res.end()에 적용한다.

    var message = "Person Information Management System";
    req.app.render('human', {message, humanList}, function(err, html) {
        res.end(html);
    });
});

const server = http.createServer(app);
server.listen(port, function() {
    console.log("서버 실행 중 >>> http://localhost:"+port);
});

// 실제 웹 서버 구축에서는 Nodejs만 사용하지 않고 express를 더 많이 사용합니다.