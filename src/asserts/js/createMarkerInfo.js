function createMarkerInfo(marcador, map) {

  let coordenadas = {lat: parseFloat(marcador.latitude), lng: parseFloat(marcador.longitude)};
  let infoBox = '<div id="content" style="width:250px;"><h5 id="headHeading" class="headHeading flow-text"> ' + marcador.nome + ' </h5><div id="bodyContent"><p><b> ' + marcador.nome + ' </b>, ' + marcador.descricao + '.</p></div><div><p><button class="btn blue-grey darken-1"><a href="dadosLocalidade.html"><i class="material-icons left">comment</i>Ver Comentários</a></button></p></div></div>';

  let marker = new google.maps.Marker({
      position: coordenadas,
      map: map,
      title: marcador.nome
  });

  //localStorage.idLocal = {{local.id}}

  let infowindow = new google.maps.InfoWindow({
    content: infoBox,
    maxWidth: 250
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
    localStorage.idLocal = marcador.id;
  });

};

      // MODELO
      // <div id="contentInfoBox">
      //     <h1 id="headHeading" class="headHeading"> {{local.nome}} </h1>
      //     <div id="bodyContent">
      //       <p>
      //         <b> {{local.nome}} </b>, {{local.descricao}}.
      //       </p>
      //     </div>
      //     <div>
      //       <p>
      //         <i> {{value.nomeUsuario}} </i>
      //         <button class="btn blue-grey darken-1">
      //           <a href="dadosLocalidade.html">
      //             <i class="material-icons left">comment</i>
      //             Ver Comentários
      //           </a>
      //         </button>
      //       </p>
      //     </div>
      //   </div>