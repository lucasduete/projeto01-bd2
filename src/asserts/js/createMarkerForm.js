function createMarkerForm(coordenadas, map) {

	let formBox = '<div id="contentFormBox"><form><h1 id="headFormContent" class="headFormContent"><input type="text" name="nomeLocal" placeholder="Nome do Local" required></h1><div id="bodyFormContent"><p><input type="text" name="descricaoLocal" placeholder="Digite uma Descricao" required></p><p><input type="submit"></p></div></form></div>';

    let marker = new google.maps.Marker({
        position: coordenadas,
        map: map
    });

    let formwindow = new google.maps.InfoWindow({
	    content: formBox,
        maxWidth: 250
    });

    marker.addListener('click', function() {
    	formwindow.open(map, marker);
    });

    map.panTo(coordenadas);    
};

	// FORMATO DA DIV
	// <div id="contentFormBox">
 //      <form>
 //        <h1 id="headFormContent" class="headFormContent">
 //          <input type="text" name="nomeLocal" placeholder="Nome do Local" required>
 //        </h1>
 //        <div id="bodyFormContent">
 //          <p>
 //            <input type="text" name="descricaoLocal" placeholder="Digite uma Descricao" required>
 //          </p>
 //          <p>
 //            <input type="submit">
 //          </p>
 //        </div>
 //      </form>
 //    </div>
