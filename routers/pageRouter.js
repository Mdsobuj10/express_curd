const {Router} = require('express');
const path = require('path');
const { pageLoad, datastore, index } = require('../controllers/PagesController');





const router = Router();




router.get('/', pageLoad )
router.post('/store', datastore)
router.get('/index', index)




module.exports = router;