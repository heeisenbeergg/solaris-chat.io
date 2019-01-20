const app = require('./config/server');

const server = app.listen(9000, () => {
                console.log("Rodando na 9000. \nhttp://localhost:9000");
            });

const socket = require('./config/socket')(app, server);
