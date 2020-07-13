//Code taken from ASP Snippets.com, https://www.aspsnippets.com/Articles/Google-Maps-API-V3-Add-multiple-markers-with-InfoWindow-to-Google-Map.aspx//

  var markers = [
    { title: "Beamish Museum", lat: 54.8849314, lng: -1.6673812, description: "Beamish is a living, working museum, set in 300 acres of beautiful Durham countryside. Costumed folk bring to life the Town, Pit Village, Home Farm and Pockerley Old Hall.", image: '<img src="assets/images/beamish_museum.jpg"' },
    { title: "Bowes Museum", lat: 54.5420335, lng: -1.9175423, description: "The Bowes Museum is the jewel in the heart of the historic market town of Barnard Castle in the beautiful Durham countryside.Housing internationally significant collections of fine and decorative arts, the Museum was purpose built in the 19thC by wealthy businessman John Bowes and his French actress wife Josephine." },
    { title: "Durham Cathedral", lat: 54.7732329, lng: -1.5785808, description: "Durham Cathedral has been a place of worship, welcome and hospitality for almost a millennium, inspiring all who come. Built in 1093 to house the Shrine of St Cuthbert, Durham Cathedral is renowned for its magnificent Romanesque architecture and spectacular location at the heart of the Durham World Heritage Site. It is also the resting place of the Venerable Bede" },
    { title: "High Force Waterfall", lat: 54.6506813, lng: -2.1889541, description: "High Force is one of the most impressive waterfalls in England. The River Tees has been plunging into this gorge for thousands of years but the rocks it reveals are far more ancient – with origins dating back over 300 million years!" },
    { title: "Diggerland Durham", lat: 54.8014524, lng: -1.6782121, description: "Diggerland is the UK’s most unique construction-themed adventure park where children and adults can drive, ride and operate earth-moving machinery in a safe and family friendly environment." },
    { title: "Raby Castle", lat: 54.5915822, lng: -1.8041618, description: "Raby Castle offers a brilliant and memorable family day out. It is a jewell in the crown of County Durham and one of England's finest medieval castles." }
  ];
  
    window.onload = function () {
        LoadMap();
    }
    function LoadMap() {
        var mapOptions = {
            center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        //Create and open InfoWindow.
        var infoWindow = new google.maps.InfoWindow();
 
        for (var i = 0; i < markers.length; i++) {
            var data = markers[i];
            var myLatlng = new google.maps.LatLng(data.lat, data.lng);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: data.title
            });
 
            //Attach click event to the marker.
            (function (marker, data) {
                google.maps.event.addListener(marker, "click", function (e) {
                    //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
                    infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + data.description + data.image + "</div>");
                    infoWindow.open(map, marker);
                });
            })(marker, data);
        }
    }

