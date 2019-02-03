module.exports = (app) => {
    
    app.get('/', (req, res) => {
        app.controllers.index_controller.index(app, req, res);
    });

}