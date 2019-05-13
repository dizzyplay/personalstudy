const server = require('live-server');
const path = require('path');

const params = {
  host: '0.0.0.0',
  root: path.resolve(__dirname, 'src'),
  file: './index.html',
  mount: [['/', '/src']],
};

console.log(params.root);

server.start(params);
