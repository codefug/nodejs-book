const http = require('http');
const fs = require('fs').promises;
const axios = require('axios');

http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('./restFront.html');
        const about = await axios.get('./about.html').catch(function (error) {
            console.log(error.toJSON())
        })
        console.log(about);
        const users = res.data;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end();
    } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end();
    }
}).listen(8080, () => {
        console.log('8080 준비 끝');
    })