function iniciarMap(){
    var coord = {lat:-32.9964257 ,lng: -71.2757571};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 20,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
