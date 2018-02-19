function createMarkerForm(coordenadas, map) {

	let formBox = '<div id="content" style="width:330px;"><h5 class="flow-text">Cadastro de Marker</h5><input type="text" id="localNome" name="nomeLocal" placeholder="Nome do Local" required><div id="bodyFormContent"><p><input type="text" id="localDescricao" name="descricaoLocal" placeholder="Digite uma Descricao" required></p><p><button class="waves-effect waves-light red btn" style="margin-right:2%" onclick="location.href=\'cadastrarLocalidade.html\'"><i class="material-icons right">menu</i>Nova Pagina</button><button onclick="localStorage.setItem(\'marcador\', JSON.stringify({latitude : ' + coordenadas.latitude + ',longitude: ' + coordenadas.longitude + ',nome: document.getElementById(\'localNome\').value, descricao: document.getElementById(\'localDescricao\').value,nota: 0,id : 1}));" class="waves-effect waves-light btn"><i class="material-icons right">send</i>enviar</button></p></div></div>';

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

function callCreateMarker() {
    angular.element('#LocalController').scope().$createMarker();
}

	// FORMATO DA DIV
	// <div id="contentFormBox" ng-init="">
 //      <form>
 //        <h1 id="headFormContent" class="headFormContent">
 //          <input ng-model="Local.nomeLocal" type="text" name="nomeLocal" placeholder="Nome do Local" required>
 //        </h1>
 //        <div id="bodyFormContent">
 //          <p>
 //            <input type="text" ng-model="Local.descricaoLocal" name="descricaoLocal" placeholder="Digite uma Descricao" required>
 //          </p>
 //          <p>
 //            <input type="submit" ng-click="Local.cadastrar(Local.nomeLocal, ">
 //          </p>
 //        </div>
 //      </form>
 //    </div>
