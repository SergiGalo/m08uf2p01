var express = require('express');
var router = express.Router();

var tareas = [
	{
		"nom":"Diseño wireframe",
		"etiquetes": [ "wireframe","app","hibrida"],
		"realitzacio":"36"
	},
	{
		"nom":"Reunión",
		"etiquetes": ["app","hibrida"],
		"realitzacio":"60"
	},
	{
		"nom":"Desarrollo Layout",
		"etiquetes": [ "layout","app","hibrida"],
		"realitzacio":"99"
	},
	{
		"nom":"Reunión cliente",
		"etiquetes": [ "reunión","app","hibrida"],
		"realitzacio":"20"
	}
]

/* GET tareas listing */
router.get('/', function(req,res,next) {
  res.render('tareas_lista', { title: 'Tareas', tareas: tareas});
});

router.get('/new', function(req,res,next) {
  res.render('tareas_new', { title: 'Nueva tarea' });
});

router.post('/crear', function(req,res,next) {
  res.render('tareas_crear', { title: 'Crear tarea' });
});

module.exports = router;
