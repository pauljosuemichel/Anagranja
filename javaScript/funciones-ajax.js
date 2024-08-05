function verObras(entorno, categoria, vista, titulo_orden, fecha_orden){
	
	if(entorno == 'real'){
		var url_servidor = "https://stephenking.es/";
	}else{
		var url_servidor = "http://localhost/stephenking/";
	}
	
	$.ajax({
			
		url : url_servidor+'ajax/ver_listado_obras.php',
		data : { 
			"categoria": categoria,
			"vista": vista,
			"titulo_orden": titulo_orden,
			"fecha_orden": fecha_orden
		},
				 
		type : 'GET',
		dataType : 'html',
		success : function(respuesta) {
				$("html, body").animate({ scrollTop: 0 }, 80);
				
				document.getElementById('resultado-obras').innerHTML="<div class='d-flex justify-content-center my-5'><div class='spinner-border' role='status'><span class='visually-hidden'>Loading...</span></div></div>";
				
				
		
				setTimeout(function() { 
					document.getElementById('contenedor-obras').innerHTML=respuesta;
				}, 1000);
						
		},
				 
		error : function(xhr, status) {
			alert('Disculpa, hubo un problema');
		},
				 
		complete : function(xhr, status) {
			//$("html, body").animate({ scrollTop: 0 }, 100);
		}
	});
}



function verAdaptaciones(entorno, categoria, vista, titulo_orden, fecha_orden){
	
	if(entorno == 'real'){
		var url_servidor = "https://stephenking.es/";
	}else{
		var url_servidor = "http://localhost/stephenking/";
	}
	
	$.ajax({
			
		url : url_servidor+'ajax/ver_listado_adaptaciones.php',
		data : { 
			"categoria": categoria,
			"vista": vista,
			"titulo_orden": titulo_orden,
			"fecha_orden": fecha_orden
		},
				 
		type : 'GET',
		dataType : 'html',
		success : function(respuesta) {
			$("html, body").animate({ scrollTop: 0 }, 80);
			document.getElementById('resultado-adaptaciones').innerHTML="<div class='d-flex justify-content-center my-5'><div class='spinner-border' role='status'><span class='visually-hidden'>Loading...</span></div></div>";
			setTimeout(function() { 
					document.getElementById('contenedor-adaptaciones').innerHTML=respuesta;
				}, 1000);
				
		},
				 
		error : function(xhr, status) {
			alert('Disculpa, hubo un problema');
		},
				 
		complete : function(xhr, status) {
			$("html, body").animate({ scrollTop: 0 }, 100);
		}
	});
}




function verObrasPorTema(entorno, tema){
	
	if(entorno == 'real'){
		var url_servidor = "https://stephenking.es/";
	}else{
		var url_servidor = "http://localhost/stephenking/";
	}
	
	$.ajax({
			
		url : url_servidor+'ajax/ver_listado_obras_por_tema.php',
		data : { 
			"id_tema": tema
		},
				 
		type : 'GET',
		dataType : 'html',
		success : function(respuesta) {
			
				document.getElementById('contenedor-obras-por-tema').innerHTML="<div class='d-flex justify-content-center my-5'><div class='spinner-border' role='status'><span class='visually-hidden'>Loading...</span></div></div>";
				
				setTimeout(function() { 
					document.getElementById('contenedor-obras-por-tema').innerHTML=respuesta;
					$("#contenedor-obras-por-tema").find("script").each(function(i) {
                    eval($(this).text());
                });
				}, 1000);
				
		},
				 
		error : function(xhr, status) {
			alert('Disculpa, hubo un problema');
		},
				 
		complete : function(xhr, status) {
			$("html, body").animate({ scrollTop: 0 }, 100);
		}
	});
}



function verEdicionesObras(entorno, id_edicion){
	
	if(entorno == 'real'){
		var url_servidor = "https://stephenking.es/";
	}else{
		var url_servidor = "http://localhost/stephenking/";
	}
	
	$.ajax({
			
		url : url_servidor+'ajax/ver_edicion_obra.php',
		data : { 
			"id_edicion": id_edicion
		},
				 
		type : 'GET',
		dataType : 'html',
		success : function(respuesta) {
			
				document.getElementById('contenedor-info-edicion').innerHTML="<div class='d-flex justify-content-center my-5'><div class='spinner-border' role='status'><span class='visually-hidden'>Loading...</span></div></div>";
				
				setTimeout(function() { 
					document.getElementById('contenedor-info-edicion').innerHTML=respuesta;
				}, 1000);
				
		},
				 
		error : function(xhr, status) {
			alert('Disculpa, hubo un problema');
		},
				 
		complete : function(xhr, status) {
			$("html, body").animate({ scrollTop: 0 }, 100);
		}
	});
}


function valorarObras(entorno, id_obra, valoracion){
	
	
	
	if(entorno == 'real'){
		var url_servidor = "https://stephenking.es/";
	}else{
		var url_servidor = "http://localhost/stephenking/";
	}
	
	$.ajax({
			
		url : url_servidor+'ajax/valorar_obras.php',
		data : { 
			"id_obra": id_obra,
			"valoracion": valoracion
		},
				 
		type : 'GET',
		dataType : 'html',
		success : function(respuesta) {
				document.getElementById('estrellas').innerHTML=respuesta;
				$("#estrellas").find("script").each(function(i) {
          eval($(this).text());
        });
								
		},
				 
		error : function(xhr, status) {
			alert('Disculpa, hubo un problema');
		},
				 
		complete : function(xhr, status) {
			//$("html, body").animate({ scrollTop: 0 }, 100);
		}
	});
}






function verGaleriaPorCategoria(entorno, categoria){
	
	if(entorno == 'real'){
		var url_servidor = "https://stephenking.es/";
	}else{
		var url_servidor = "http://localhost/stephenking/";
	}
	
	$.ajax({
			
		url : url_servidor+'ajax/ver_galeria_categoria.php',
		data : { 
			"categoria": categoria
		},
				 
		type : 'GET',
		dataType : 'html',
		success : function(respuesta) {
			
			
				$("html, body").animate({ scrollTop: 0 }, 80);
				document.getElementById('resultados-galeria').innerHTML="<div class='d-flex justify-content-center my-5'><div class='spinner-border' role='status'><span class='visually-hidden'>Loading...</span></div></div>";
				setTimeout(function() { 
					document.getElementById('contenedor-galeria').innerHTML=respuesta;
					$("#contenedor-galeria").find("script").each(function(i) {
						eval($(this).text());
					});
				}, 1000);
			
			
			
				
				
				
				
				
		},
				 
		error : function(xhr, status) {
			alert('Disculpa, hubo un problema');
		},
				 
		complete : function(xhr, status) {
			
		}
	});
}