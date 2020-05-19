'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');
const authService = require('../service/auth-service');




router.post('/',authService.authorize,controller.post);
router.get('/',controller.get);
router.get('/:slug',controller.getBySlug);
router.get('/findPorId/:id',controller.getById);
router.get('/tags/:tag',controller.getByTag);
router.put('/:id',controller.put);
router.delete('/:id',controller.delete);


module.exports = router;