module.exports = {

    iniciaChat: (app, req, res) => {
        
        const dadosForm = req.body;
        const io = app.get('io');

        req.assert('apelido', 'Nome ou apelido é obrigatório!').notEmpty();
        //req.assert('apelido ', 'Nome ou apelido deve conter entre 3 e 15 caracteres').len(3, 15);

        const erros = req.validationErrors();

        if(erros) {
            res.render('index', { validacao: erros });
        }
        
        io.emit(
            'usuarioConectou',
            { 
                apelido: dadosForm.apelido,
                mensagem: 'Acabou de entrar no chat!'
            }
        );
        
        res.render('chat', {usuario: dadosForm.apelido});
   
    }

}