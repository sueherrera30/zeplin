var cifra;	
cifra = 20;
var arregloNumPrimos = [];

function numerosPrimos(cifra){

	for(var i= 1,i < cifra, i++){
		if(cifra % i === 0){
		 return arregloNumPrimos.push(i);
		}
		console.log(arregloNumPrimos);
	}
}

numerosPrimos(cifra);