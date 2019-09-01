const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/5ea5038e77116483ada52765118bc766/' + latitude +',' + longitude + '?units=si';
  request({url, json: true}, (error, {body}) => {
    if(error) {
      callback('Unable to connect to weather service', undefined);
    }else if(body.error) {
      callback('Unable to find location', undefined);
    }else {
      callback(undefined, `${body.daily.data[0].summary} Maximum Temperature-${body.daily.data[0].temperatureHigh} degree, Current temperature-${body.currently.temperature} degree. There is a ${body.currently.precipProbability}% chance of rain.`)
    }
  });
}; 

module.exports = forecast;