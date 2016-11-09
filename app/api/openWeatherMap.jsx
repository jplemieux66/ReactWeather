var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=053488dd735a1bba2613692477abd9e4';

module.exports = {
  getTemp : function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(err){
      if(err.response.data.cod && err.response.data.message){
        throw new Error(err.response.data.message);
      } else {
        return err.response.data.main.temp;
      }
    }, function(err){
      throw new Error(err.response.data.message);
    });
  }
}
