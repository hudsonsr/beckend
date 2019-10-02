const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashBoardController');
const BookingController = require('./controllers/BookingController');


const routes = express.Router();
const upload = multer(uploadConfig);

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

routes.post('/Sessions', SessionController.store);
routes.post('/Spots', upload.single('thumbnail'), SpotController.store);
routes.get('/Spots', SpotController.index);
routes.get('/dashboard', DashboardController.show);
routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;