const http = require('http');
const port = process.env.PORT || 3001
const fs = require('fs'); //fs: file system

const host = "localhost";
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    switch (req.url) {
case "/":
    fs.readFile("home.html", (err, data) => {
        if (err) {
        console.error(err)
        }
        else{
            res.writeHead(200)
            res.write(data);
            res.end();
        }
    });
    break;
    case "/hanoi":
    fs.readFile("hanoi.html", (err, data) => {
        if (err) {
        console.error(err)
        }
        else{
            res.writeHead(200)
            res.write(data);
            res.end();
        }
    });
    break;
    case "/hcm":
    fs.readFile("hcm.html", (err, data) => {
        if (err) {
        console.error(err)
        }
        else{
            res.write(data);
            res.end();
        }
    });
    break;
    case "/cantho":
    fs.readFile("cantho.html", (err, data) => {
        if (err) {
        console.error(err)
        }
        else{
            res.write(data);
            res.end();
        }
    });
    break;
    case "/danang":
    fs.readFile("danang.html", (err, data) => {
        if (err) {
        console.error(err)
        }
        else{
            res.write(data);
            res.end();
        }
    });
    break;
    default:
        res.write("<h1>404 - Not found </h1>");
        res.end();
    }
});
server.listen(port, ()=> {
    console.log("Server is running at http://"+ host + ":"+ port);
    })