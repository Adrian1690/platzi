var adrian = "Lima";
console.log("arrancando server de Node");


var credenciales = {
	usuario : "Adrian",
	password : "elmejor"
};

// body parser para interpretar los envios post
var bodyParser = require("body-parser");
var express = require("express");
var web = express();

//haciendo que express use el body parser
web.use( bodyParser.urlencoded() );

var servidor;

servidor = web.listen(8080, function(){
	console.log("servidor arrancado");
});

//El home
web.get("/", function (req,res){//requerimiento y respuesta
	// en el req vienen las variables que mandamos desde el servidot
	res.sendfile("formulario.html");
});

//Envio del formulario
web.post("/entrar",function (req,res) {
	if( credenciales.usuario == req.body.usuario && credenciales.password == req.body.password){
		res.send("Bien Adrian te salio a la Primera");
	}else{
		res.send("Sigue Adrian");
	}
})

//Prueba de url amigables
web.get("/test", function (req,res){//requerimiento y respuesta
	// en el req vienen las variables que mandamos desde el servidot
	res.send("el nombre de la persona es " + req.query.nombre);
});

web.get("/hola/mama-es-genial", function (req,res){//requerimiento y respuesta
	res.send("<b>Mi madre es la mejor</b>");
});

