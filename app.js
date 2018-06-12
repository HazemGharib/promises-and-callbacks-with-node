const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

var argv = yargs.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true,
    }
})
    .help()
    .alias('help', 'h')
    .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(`\r\n${JSON.stringify(
//             results,
//             undefined,
//             4
//         )}`);

//         var location = results;
//         weather.getWeather(location, (errorMessage, results) => {
//             if (errorMessage) {
//                 console.log(errorMessage);
//             } else {
//                 console.log(`\r\nCurrent Weather: `)
//                 console.log(`${JSON.stringify(
//                     results,
//                     undefined,
//                     4
//                 )}`);
//             }
//         });
//     }
// });

geocode.geocodeAddress(argv.address).then((location) => {

    console.log(`\r\n${JSON.stringify(
        location,
        undefined,
        4
    )}`);

    weather.getWeather(location).then((weather) => {
        console.log(`\r\nCurrent Weather: `)
        console.log(`${JSON.stringify(
            weather,
            undefined,
            4
        )}`);
    }).catch((errMessage) => {
        console.log(errMessage);
    });

}).catch((errMessage) => {
    console.log(errMessage);
});