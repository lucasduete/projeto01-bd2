function createMarkerInfo(coordenadas, map) {
  
  let marker = new google.maps.Marker({
      position: coordenadas,
      map: map,
      title: '{{local.nome}}'
  });


  let infoBox = '<div id="contentInfoBox"><h1 id="headHeading" class="headHeading"> {{local.nome}} </h1><div id="bodyContent"><p><b> {{local.nome}} </b>, {{local.descricao}} .</p></div><div ng-repeat="(key, value) in local.comentarios"><p><i> {value.nomeUsuario} </i><p id="comentario"> {value.comentario} </p></p></div></div>';

  let infowindow = new google.maps.InfoWindow({
    content: infoBox,
    maxWidth: 200
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

};

      // MODELO
      // <div id="contentInfoBox">
      //     <h1 id="headHeading" class="headHeading">{{local.nome}}</h1>
      //     <div id="bodyContent">
      //       <p>
      //         <b>{{local.nome}}</b>, {{local.descricao}}.
      //       </p>
      //     </div>
      //     <div ng-repeat="(key, value) in local.comentarios">
      //       <p>
      //         <i>{value.nomeUsuario}</i>
      //         <p id="comentario">{value.comentario}</p>
      //       </p>
      //     </div>
      //   </div>
