
// Initialize Firebase
  	var config = {
   		apiKey: "AIzaSyBlhQDa-EuSwfRb4SjPwkAj6r8kxdmk1Ig",
   		authDomain: "tachibana-labs.firebaseapp.com",
   		databaseURL: "https://tachibana-labs.firebaseio.com",
   		projectId: "tachibana-labs",
   		storageBucket: "tachibana-labs.appspot.com",
   		messagingSenderId: "61753021492"
	  	};
	firebase.initializeApp(config); 
	  var txtnombre = document.getElementById('nombre');
	  var txtmensaje= document.getElementById('mensaje');
	  var btnEnviar= document.getElementById('btnEnviar');
	  var chatUl = document.getElementById('chat');
	btnEnviar.addEventListener("click", function enviar(){
	  var nombre = txtnombre.value;
	  var mensaje = txtmensaje.value;	   
	firebase.database().ref('chat').push({
		name: 	nombre,
		message: mensaje
	  	});
	  });
	firebase.database().ref('chat')
	.on('value',function(snapshot){//se subscribe al evento value 
			var html =""; // lo hace cadena
		snapshot.forEach(function(e){
			var element = e.val();//e hace referencia al snapshot 
			var nombre = element.name;
			var mensaje = element.message;

			html += "<b>"+nombre+"- "+mensaje+"</b>"+"random id"+"<br>";
		});
		chatUl.innerHTML = html;
	});
function hulabula(){
	document.getElementById("hulabula").innerHTML = Math.random().toString(36).substr(2, 5);

}
