import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const root = 'D:/wizzogame/dist';
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.json': 'application/json', '.txt': 'text/plain' };
http.createServer((req, res) => {
    const u = new URL(req.url, 'http://x');
    const p = decodeURIComponent(u.pathname);
    const m = p.match(/^\/(.+)\.html$/);
    if (m && fs.existsSync(path.join(root, m[1] + '.html'))) {
        res.writeHead(308, { location: '/' + m[1] + u.search });
        return res.end();
    }
    let file = path.join(root, p);
    if (!fs.existsSync(file) && !path.extname(p)) {
        const cand = path.join(root, p + '.html');
        file = fs.existsSync(cand) ? cand : path.join(root, 'game.html');
    }
    if (fs.existsSync(file) && fs.statSync(file).isFile()) {
        res.writeHead(200, { 'content-type': types[path.extname(file).toLowerCase()] || 'application/octet-stream' });
        fs.createReadStream(file).pipe(res);
    } else { res.writeHead(404); res.end('not found'); }
}).listen(4188, () => console.log('emulation server: http://localhost:4188'));
