const request = require('request');

// var getWeather = (location, callback) => {
//     request({
//         url: `https://api.darksky.net/forecast/9516691b0b1fa0c74a3dcb2a4cca2129/${location.latitude},${location.longitude}`,
//         method: 'GET',
//         json: true
//     }, (error, response, body) => {
//         if (error) {
//             callback(`${error}`);
//         }
//         else if (response.statusCode !== 200) {
//             callback(`Unable to find weather data at the moment`);
//         }

//         if (response && response.statusCode === 200) {
//             var currentWeather = body.currently;

//             callback(undefined, {
//                 time: currentWeather.time,
//                 summary: currentWeather.summary,
//                 temprature: currentWeather.temprature,
//                 apparentTemperature: currentWeather.apparentTemperature,
//                 humidity: currentWeather.humidity,
//                 windSpeed: currentWeather.windSpeed,
//                 visibility: currentWeather.visibility,
//             });
//         }
//         else {
//             console.log(`Please check your connection.`);
//         }
//     });
// };

var getWeather = (location) => {
    return new Promise((resolve, reject) => {
        request({
            url: `https://api.darksky.net/forecast/9516691b0b1fa0c74a3dcb2a4cca2129/${location.latitude},${location.longitude}`,
            method: 'GET',
            json: true
        }, (error, response, body) => {
            if (error) {
                reject(`${error}`);
            }
            else if (response.statusCode !== 200) {
                reject(`Unable to find weather data at the moment`);
            }

            if (response && response.statusCode === 200) {
                var currentWeather = body.currently;

                resolve({
                    time: currentWeather.time,
                    summary: currentWeather.summary,
                    temprature: currentWeather.temprature,
                    apparentTemperature: currentWeather.apparentTemperature,
                    humidity: currentWeather.humidity,
                    windSpeed: currentWeather.windSpeed,
                    visibility: currentWeather.visibility,
                });
            }
            else {
                reject(`Please check your connection.`);
            }
        });
    });
};


module.exports = {
    getWeather
};