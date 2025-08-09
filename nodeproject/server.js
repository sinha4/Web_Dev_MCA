const http = require('http');
const url = require('url');
const fs = require('fs');

const menu = JSON.parse(fs.readFileSync('./menu.json', 'utf-8'));

function filterMenu(query) {
  let result = menu;
  if (query.category) {
    result = result.filter(item => item.category.toLowerCase() === query.category.toLowerCase());
  }
  if (query.name) {
    result = result.filter(item => item.name.toLowerCase().includes(query.name.toLowerCase()));
  }
  return result;
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (parsedUrl.pathname === '/api/menu') {
    const data = filterMenu(parsedUrl.query);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(3000, () => {
  console.log('Cafe Menu API running at http://localhost:3000');
});
