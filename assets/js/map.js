//Code taken from Google Maps lesson in Code Institute Interactive Front End Module//
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: {
            lat: 54.7753,
            lng: 1.5849
        }
    });
}