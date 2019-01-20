module.exports = {

    startChat: (app, req, res) => {
        
        const dataForm = req.body;
        const io = app.get('io');

        req.assert('name', 'Nome é obrigatório!').notEmpty();
        //req.assert('name ', 'Nome deve conter entre 3 e 15 caracteres').len(3, 15);

        const erros = req.validationErrors();

        if(erros) {
            res.render('index', { validation: erros });
        }
   
        io.to(dataForm.channel).emit(
            'userConnected',
            { 
                name: dataForm.name,
                channel: dataForm.channel,
                message: 'Acabou de entrar no chat!'
            }
        );
        
        res.render('chat', 
            {
                user: dataForm.name,
                channel: dataForm.channel
            }
        );
   
    }

}