const http = require('http');
const fs = require('fs');
const path = require('path');

const requestListener = function (req, res) {
    let filePath = req.url === '/' ? '/index.html' : req.url;
    filePath = './server/static' + filePath;
    const extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.jpg':
        case '.jpeg':
            contentType = 'image/jpeg';
            break;
        default:
            res.writeHead(200);
            res.end('Hello, World!');
            return;

    }
    fs.readFile(filePath, function(err, content) {
        if (err) {
            console.error(err);
            res.writeHead(404);
        } else {
            const header = {
                'Content-Type': contentType,
                'cache-control': 'max-age=600',
            };
            if (filePath.endsWith('qd2.jpeg')) {
                header.Age = '1000';
            }
            if (filePath.endsWith('qd3.jpeg')) {
                header.Date = 'Sun, 23 Aug 2021 07:32:26 GMT';
                header.Age = '100';
            }
            res.writeHead(200, header);
            res.end(content, 'utf-8');
        }
    });
  }
  
  const server = http.createServer(requestListener);
  server.listen(8080);
  