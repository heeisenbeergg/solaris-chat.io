module.exports = (app) => {
    
    app.get('/', (req, res) => {
        app.app.controllers.index_controller.index(app, req, res);
    });

}