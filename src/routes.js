const express = require('express');


const routes = express.Router();

//GET= BUSCAR, POST=CADASTRAR, PUT= ATUALIZAR, DELETE= DELETAR 

// re.query = Acessar query params (para filtro)
// req.params = acessar route params (update, delete)
// req.body = acessar o corpo da requisição

routes.get('/users', (req, res)=>{
    return res.json({ message: req.query.idade });
});

routes.put('/users/:id', (req, res)=>{
    return res.json({ message: req.params.id });
});

routes.post('/user', (req, res)=>{
    return res.json(req.body);
});

module.exports = routes;