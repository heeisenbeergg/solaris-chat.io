module.exports = (app) => {

    const chat_controllers = app.app.controllers.chat_controllers;

    app.post('/chat', (req, res) => {
        chat_controllers.startChat(app, req, res);
    });

}