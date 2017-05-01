window.addEventListener("load", function(){
	
	recargarCodigo();

});

var recargar = document.getElementById("recargar");
recargar.addEventListener("click", recargarCodigo);

var verificar = document.getElementById("verificar");
verificar.addEventListener("click", verificarCodigo);

function recargarCodigo(){
	document.getElementById("codigo").innerHTML = "";
	document.getElementById("respuesta").value = "";
	var abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","`"];
	var numeros = ["0","1","2","3","4","5","6","7","8","9"];

	for(var i=1; i<=7;i++){
		var numAleatorioAbc = Math.round(Math.random()*(abc.length-1));
		var numAleatorioNumero = Math.round(Math.random()*(numeros.length-1));

		if(i%2 !== 0){
			document.getElementById("codigo").innerHTML += abc[numAleatorioAbc];
		}else{
			document.getElementById("codigo").innerHTML += numeros[numAleatorioNumero];
		}
	}
	var red = Math.round(Math.random()*255);
	var green = Math.round(Math.random()*255);
	var blue = Math.round(Math.random()*255);
	document.getElementById("codigo").style.color = "rgb("+red+","+green+","+blue+")";
}

function verificarCodigo(e){
	e.preventDefault();
	var codigo = document.getElementById("codigo").innerHTML;
	var respuesta = document.getElementById("respuesta").value;

	if(codigo === respuesta){
		alert("bien");
	}else{
		alert("MAL");
	}

}