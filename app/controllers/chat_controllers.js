module.exports = {

    iniciaChat: (app, req, res) => {
        
        const dataForm = req.body;
        const io = app.get('io');

        req.assert('name', 'Nome ou apelido é obrigatório!').notEmpty();
        //req.assert('apelido ', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15);

        const erros = req.validationErrors();

        if(erros) {
            res.render('index', { validation: erros });
        }
   
        io.emit(
            'userConnected',
            { 
                name: dataForm.name,
                message: 'Acabou de entrar no chat!'
            }
        );
        
        res.render('chat', {user: dataForm.name});
   
    }

}