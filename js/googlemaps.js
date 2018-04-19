var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 38, lng: -97},
          zoom: 5
        });
      }