const app = require('./config/server');
const port = process.env.PORT || 9000;

const server = app.listen(port, () => {
                console.log('Rodando na ' + port + '. \nhttp://localhost:' + port);
            });

const socket = require('./config/socket')(app, server);
