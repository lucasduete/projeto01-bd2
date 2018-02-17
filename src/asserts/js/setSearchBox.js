function setSearchBox(input, map) {

	// Cria uma Caixa de Busca e Setta ela no DOM
	var searchBox = new google.maps.places.SearchBox(input);
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

	// Setta os resultados do SearchBox para a viewport do mapa atual.
	map.addListener('bounds_changed', function() {
		searchBox.setBounds(map.getBounds());
	});

	var markers = [];
	// Escuta o Event disparado quando o usuário seleciona uma resultado 
		// e recupera mais detalhes para esse local.
	searchBox.addListener('places_changed', function() {
		var places = searchBox.getPlaces();

		if (places.length == 0) {
	    	return;
	  	}

	  	// Limpa os Outros Marcadores.
	  	markers.forEach(function(marker) {
	        marker.setMap(null);
	  	});
	  	markers = [];

	  	// Para cada lugar, pegue o ícone, o nome e a localização.
	  	var bounds = new google.maps.LatLngBounds();
	  	places.forEach(function(place) {
	        if (!place.geometry) {
	    	  	console.log("Returned place contains no geometry");
	      		return;
	   		}
	    	var icon = {
	      		url: place.icon,
	      		size: new google.maps.Size(71, 71),
	      		origin: new google.maps.Point(0, 0),
	        	anchor: new google.maps.Point(17, 34),
	      		scaledSize: new google.maps.Size(25, 25)
	    	};

	    	// Cria um Marcador para cada Lugar.
	    	markers.push(new google.maps.Marker({
	            map: map,
	      		icon: icon,
	      		title: place.name,
	      		position: place.geometry.location
	    	}));

	    	if (place.geometry.viewport) {
	      		// Somente Geocode (geometria) tem viewport
	      		bounds.union(place.geometry.viewport);
	    	} else {
	      		bounds.extend(place.geometry.location);
	    	}
	  	});
		map.fitBounds(bounds);
	});


};

