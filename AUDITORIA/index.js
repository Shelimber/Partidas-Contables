$(function(){
	var nombreUsu, nombre, apellido, passwordUsu, codRol;
	$(".btnAction").on('click',function(){
		nombreusu =$(".nombreUsu").var();
		nombre =$(".nombre").var();
		apellido =$(".apellido").var();
		passwordusu =$(".passwordUsu").var();
		rol =$(".codRol").var();

		if (nombreUsu.length==0 || nombre.length==0 || apellido.length==0 || passwordUsu.length==0 || coRol.length==0){
				alert("Campos Vacios");
		}else{
				alert("Registro Almacenado")
			}
	});
});

