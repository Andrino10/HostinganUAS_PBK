const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // File data kamu
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Untuk mengizinkan semua method (GET, POST, PUT, DELETE, dsb)
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// Router utama
server.use(router);

// Jalankan server di port 3000 (akan otomatis ditangani oleh Vercel)
server.listen(3000, () => {
  console.log('JSON Server is running');
});
