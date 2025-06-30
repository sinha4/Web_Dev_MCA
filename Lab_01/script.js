function getLocation() {
  navigator.geolocation.getCurrentPosition(function(pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat, lng: lon },
      zoom: 14,
    });
    new google.maps.Marker({ position: { lat, lng: lon }, map: map });
  });
}
