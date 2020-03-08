export const format = (n, c, d, t) => {
    c = isNaN(c = Math.abs(c)) ? 2 : c;
    d = d === undefined ? "." : d;
    t = t === undefined ? "," : t;
    var s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = i.length;
    j = j > 3 ? j % 3 : 0;

    let result = s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    // if (result === "0") return "NA";
    return result;
};

export const formatArea = (area) => {
    const result = format(area, 0);
    return result === "0" ? '--' : result.replace('$', '');
}

export const formatMoney = (amount) => {
    const result = format(amount, 0);
    return result === "0" ? "NA" : result.replace(/^/, '$');
}

export const formatMoneyInRomans = (amount) => {
    if (!amount) return '--';
    var nondecimalAmount = amount.indexOf('.') > -1 ? amount.substring(0, amount.indexOf('.')) : amount;

    var stringLength = nondecimalAmount.length;
    var formattedAmount = '';

    if (stringLength < 4) {
        formattedAmount = nondecimalAmount;
    }
    if (stringLength >= 4 && stringLength <= 6) {
        formattedAmount = nondecimalAmount.substring(0, nondecimalAmount.length - 3) + 'K';
    }
    else if (stringLength >= 7 && stringLength <= 9) {
        formattedAmount = nondecimalAmount.substring(0, nondecimalAmount.length - 6) + 'M';
    }
    else if (stringLength >= 9 && stringLength <= 12) {
        formattedAmount = nondecimalAmount.substring(0, nondecimalAmount.length - 9) + 'B';
    }

    return '$' + formattedAmount;
}

export const setGoogleMaps = (propertyDetails, index) => {
    var latLng, address = propertyDetails.street1 + propertyDetails.state_name;
        let geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({
            address: address 
        }, function (geocoderResults) {
            latLng = geocoderResults[0].geometry.location;
            if (index === 3) {
                // For simple marker pin to the location
                getGoogleMarker(latLng);
            }
            else if (index === 4) {
                // For street view
                getGoogleStreetView(address, latLng);                
            }
            else {
                // For directions from current location to property
                getGoogleDirections(latLng);
            }
        });
    }
    
    const getGoogleMarker = (latLng) => {
        var map = new window.google.maps.Map(document.getElementById('mapMarker'), {
            zoom: 15,
            center: latLng
    });
    new window.google.maps.Marker({
        position: latLng,
        map: map,
    });
}

const getGoogleStreetView = (address, myLatLng) => {
    var sv = new window.google.maps.StreetViewService();
    var directionsService = new window.google.maps.DirectionsService();
    var panorama = new window.google.maps.StreetViewPanorama(document.getElementById("streetView"));
    
    var request = {
        origin: address,
        destination: address,
        travelMode: window.google.maps.DirectionsTravelMode.DRIVING
      };
      directionsService.route(request, directionsCallback);
      
      
      function directionsCallback(response, status) {
          if (status === window.google.maps.DirectionsStatus.OK) {
              var latlng = response.routes[0].legs[0].start_location;
          sv.getPanoramaByLocation(latlng, 50, processSVData);
        } else {
            alert("Directions service not successfull for the following reason:" + status);
        }
    }
    
    function processSVData(data, status) {
        if (status === window.google.maps.StreetViewStatus.OK) {
            
            panorama.setPano(data.location.pano);
            
            var heading = new window.google.maps.geometry.spherical.computeHeading(data.location.latLng, myLatLng);
            panorama.setPov({
                heading: heading,
                pitch: 0,
                zoom: 1
            });
            panorama.setVisible(true);
            
        } else {
            alert("Street View data not found for this location.");
        }
    }
    
    
}

const getGoogleDirections = (latLng) => {    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => { showPosition(position, latLng) } );
    }      
}

function showPosition(position, latLng) {
    alert(position.coords.latitude, position.coords.longitude);
    var directionsService = new window.google.maps.DirectionsService();
    var directionsDisplay = new window.google.maps.DirectionsRenderer();  

    var origin = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude); 
    var destination = new window.google.maps.LatLng(latLng.lat(), latLng.lng());
    
    var mapOptions = {
        zoom: 14,
        center: origin
    }
    var map = new window.google.maps.Map(document.getElementById('directions'), mapOptions);
    directionsDisplay.setMap(map);

    var request = {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      }
    });
}