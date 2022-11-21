const request = require('request');

// const url =
//   'http://api.weatherstack.com/current?access_key=d055983b281876ee13a07acab3f4f647&query=37.8267,-122.4233&units=f';

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service!');
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         '. It is currently ' +
//         response.body.current.temperature +
//         ' degrees out. It feels like ' +
//         response.body.current.feelslike +
//         ' degrees out'
//     );
//   }
// });

const geocodeURL =
  'http://api.positionstack.com/v1/forward?access_key=60b4d2eb5d059f2dac39bb67e5597593&query=37.8267,-122.4233';
//60b4d2eb5d059f2dac39bb67e5597593
request({ url: geocodeURL, json: true }, (error, response) => {
  //   const latitude = response.body.features[0].center[0];
  //   const longitude = response.body.features[0].center[1];
  //   console.log(latitude, longitude);
  console.log(response.body);
});
