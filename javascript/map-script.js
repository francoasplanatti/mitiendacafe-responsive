function initMap() {
  const center = { lat: -32.7861296, lng: -59.2223517 };

  var locales = [
    { lat: -34.5985351, lng: -58.391916 },
    { lat: -34.4973938, lng: -58.5135613 },
    { lat: -31.3972162, lng: -58.0259162 },
    { lat: -32.9400555, lng: -60.6669027 },
  ];

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: center,
  });

  let i = 0;

  let names = ["Buenos Aires", "Martínez", "Concordia", "Rosario"];
  let info = [
    "<ul style= 'font-size: 1.5rem'><p><b>Horario:</b> lunes a sábado de 8:00 a 19:00</p> <p><b>Dirección:</b> Paraguay 1702, C.A.B.A.</p></ul>", 
    "<ul style= 'font-size: 1.5rem'><p><b>Horario:</b> lunes a sábado de 8:00 a 19:00</p> <p><b>Dirección:</b> Tucumán 1184, Martínez, Buenos Aires</p></ul>", 
    "<ul style= 'font-size: 1.5rem'><p><b>Horario:</b> lunes a sábado de 9:00 a 21:00</p> <p><b>Dirección:</b> Quintana 334, Concordia, Entre Ríos</p></ul>", 
    "<ul style= 'font-size: 1.5rem'><p><b>Horario:</b> martes a domingo de 9:00 a 20:30</p> <p><b>Dirección:</b> Santa Fe 3232, Rosario, Sante Fe</p></ul>"
  ];

  for (i = 0; i < locales.length; i++) {
    let marker = new google.maps.Marker({
      position: locales[i],
      map: map,
      title: "Mi Tienda Café",
    });

    var text = names[i] + "<h1>Mi Tienda Café</h1>" + info[i];

    let information = new google.maps.InfoWindow({
      content: text,
    });

    marker.addListener("click", function () {
      information.open(map, marker);
    });
    
  }
}

window.initMap = initMap;