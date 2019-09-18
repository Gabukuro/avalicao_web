var express = require('express');
var router = express.Router();
var servicesService = require('../services/servicesService');


/* GET posts page. */
router.get('/', function(req, res, next) {
  var services = servicesService.getServices();

  res.render('services', { title: 'Seviços', services: services});
});

router.get('/:serviceId', function(req, res, next) {
  var serviceId = req.params.serviceId;
  var services = servicesService.getServices();

  var service = services.filter((service) => service.id == serviceId)[0];

  res.render('service_info', { title: service.title, service: service});
});

module.exports = router;