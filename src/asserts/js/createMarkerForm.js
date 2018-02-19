function createMarkerForm(coordenadas, map) {

	let formBox = '<div id="content" style="width:330px;"><form><h5 class="flow-text">Cadastro de Marker</h5><input type="text" name="nomeLocal" placeholder="Nome do Local" required><div id="bodyFormContent"><p><input type="text" name="descricaoLocal" placeholder="Digite uma Descricao" required></p><p><button class="waves-effect waves-light red btn" style="margin-right:2%" onclick="location.href=\'cadastarLocal.html\'"><i class="material-icons right">menu</i>Nova Pagina</button><button class="waves-effect waves-light btn" type="submit"><i class="material-icons right">send</i>enviar</button></p></div></form></div>';

    let marker = new google.maps.Marker({
        position: coordenadas,
        map: map
    });

    let formwindow = new google.maps.InfoWindow({
	    content: formBox,
        maxWidth: 330
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
