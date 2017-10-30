$(function () {

    function initMap() {

        var location = new google.maps.LatLng(51.523160, -0.132429);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 15,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = 'img/marker.png';

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });

        var contentString = '<div class="info-window">' +
            '<h3>Vision and Imaging Group</h3>' +
            '<div class="info-content">' +
            '<p>Department of Computer Science<br>Malet Place Engineering Building<br>University College London<br>London<br>WC1E 6BT<br>United Kingdom</p>' +
            '</div>' +
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });


    }

    google.maps.event.addDomListener(window, 'load', initMap);
});