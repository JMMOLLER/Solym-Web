const Router = require('express').Router();
const { upload } = require('../Resources/multer');
const GetController = require('./controllers/API.GET.controller.js');
const PostController = require('./controllers/API.POST.controller.js');
const DeleteController = require('./controllers/API.DELETE.controller.js');
const cookie = require('./middlewares/cookies');

/* GET REQUESTS */

Router.get('/', cookie.cleanCookies, GetController.home);

Router.get('/select', cookie.validateSolymCookie, GetController.select)

Router.get('/start', cookie.validateCookies, GetController.start);

Router.get('/lyrics/:id', cookie.validateCookies, GetController.lyrics);

Router.get('/info/:id', cookie.validateCookies, GetController.info);

Router.get('/uploadFile', cookie.validateSolymCookie, GetController.uploadFile);

/* POST REQUESTS */

Router.post('/search/:music', PostController.shearchName);

Router.post('/uploadFile', upload.single('song'), PostController.uploadFile);

/* DELETE REQUESTS */

Router.delete('/delete', cookie.validateSolymCookie, DeleteController.deleteRoute);

Router.delete('/delete/:id', DeleteController.deleteByID);

module.exports = Router;