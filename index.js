const server = require('./server.js');

const PORT = process.env.PORT || 6002;

server.listen(PORT, console.log(`*** Server is running on port ${PORT}`));
