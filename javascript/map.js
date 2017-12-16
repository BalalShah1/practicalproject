function initMap() {
var uluru = {lat: 40.802560, lng: -73.959050};
var map = new google.maps.Map(document.getElementById('map'), {
zoom: 10,
center: uluru
});
var marker = new google.maps.Marker({
position: uluru,
map: map
});
}
