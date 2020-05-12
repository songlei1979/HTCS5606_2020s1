$(document).ready(function () {

    $.ajax({
        type: 'GET', //action get, post, put, delete
        url: 'https://api.openweathermap.org/data/2.5/weather?q=Auckland&appid=cdf05d929ed5cfa526764c43d2b832d2',
        dataType: "JSON", // data type expected from server
        success: function (data) {
            console.log(data);
            $("#locationPlace").text(data.name);
            $("#forecastPlace").text(data.weather[0].description);
            $("#tempPlace").text(data.main.temp);
            $("#windPlace").text(data.wind.speed);
            $("#icon").html("<img src='http://openweathermap.org/img/wn/"+data.weather[0].icon+".png'>");

        },
        error: function() {
            console.log('Error: ' + data);

        }
    });

});



