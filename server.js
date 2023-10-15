import http from 'http';
import fs from 'fs';
import path from 'path';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // 如果请求根路径，返回前端页面
    const filePath = path.join(__dirname, '111', 'ssvep.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading index.html');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    // 处理其他资源文件，如CSS、JavaScript、图片等
    // 这里可以根据需求自定义处理逻辑
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});