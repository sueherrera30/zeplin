var url ="http://demo6292426.mockable.io/blickTest";


var btnContacto = document.getElementById("contacto-btn");
btnContacto.addEventListener("click", getInfo);


function getInfo(){
	
var peticion = new XMLHttpRequest();
peticion.open('GET', url);
peticion.onload = function(){
	var data = JSON.parse(peticion.responseText);
	var nombre = data.name;
	console.log(nombre);
	
	var email = data.email;
	console.log(email);
    
	alert(nombre+=email)
	alert(infoAmigos(data));

}
peticion.send();
}


function infoAmigos(data){
		
	var amigos = data.friends;
	console.log(amigos);
	amigos.forEach(function(amigo){
		var  nombreAmigo = amigo.name;
		var edadAmigo = amigo.age;
		var idAmigo = amigo.id;
		alert(nombreAmigo+=edadAmigo+=idAmigo);
	})      
	};
