module.exports = (app) => {

    app.post('/chat', (req, res) => {
        app.controllers.chat_controllers.startChat(app, req, res);
    });

}