//Services
weatherApp.service('cityService', function(){
  this.city = "New York, NY";
});

weatherApp.service('weatherService', ['$resource', function($resource){
  this.getWeather = function(city, days){
    var weatherAPI = $resource(
      'http://api.openweathermap.org/data/2.5/forecast?mode=json&appid=d0a8e8c62162fd504b3aa26ba1f168cd',{
        callback: "JSON_CALLBACK"},{get:{method:"JSONP"}});

    return weatherAPI.get({q: city, cnt: days});
  };
}]);
