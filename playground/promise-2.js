const request = require('request');

var geocodeAddress = (address) => {
    var encodedAddress = encodeURIComponent(address);

    return new Promise((resolve, reject) => {
        request({
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true,
            method: 'GET',
        }, (error, response, body) => {
            if (error) {
                reject(`${error}`);
            }
            else if (body.status === 'ZERO_RESULTS') {
                reject(`Unable to find that address`);
            }

            if (response && response.statusCode === 200) {
                var locationList = body.results;

                locationList.forEach(function (location) {
                    var locationGeometry = location.geometry.location;
                    var formattedAddress = location.formatted_address;

                    resolve({
                        address: formattedAddress,
                        longitude: locationGeometry.lng,
                        latitude: locationGeometry.lat
                    });
                }, this);
            }
            else {
                reject(`Please check your connection.`);
            }
        });
    })
};

geocodeAddress("Ismailia").then((location) => {
    console.log(`${JSON.stringify(location, undefined, 4)}`)
}).catch((errMessage) => {
    console.log(errMessage);
});