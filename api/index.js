const server = require('./src/app');
require('./src/db');

server.listen(3001, () => {
    console.log('Server listening at port: 3001')
})