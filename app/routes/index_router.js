module.exports = (app) => {

    const index_controller = app.app.controllers.index_controller;
    
    app.get('/', (req, res) => {
        index_controller.index(app, req, res);
    });

}