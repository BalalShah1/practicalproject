function initMap() {
let uluru = {lat: 40.802560, lng: -73.959050};
let map = new google.maps.Map(document.getElementById('map'), {
zoom: 10,
center: uluru
});
let marker = new google.maps.Marker({
position: uluru,
map: map
});
}
