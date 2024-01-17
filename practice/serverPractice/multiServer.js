// 한번에 여러번 서버를 실행 할 수 있다.

const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>Hello Node</h1>');
    res.end('<p> Hello Node</p>');
})
.listen(8080,()=>{
    console.log('8080 작전 대기중.')
})
// 여러 주소로 서버 생성
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    res.end('<p> H! SECOND SERVER</p>');
})
.listen(8081,()=>{
    console.log('8081 대기 대기 대기')
})