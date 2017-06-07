var zipCode = prompt("What is your zipcode");

$.ajax({

	method: "GET",

	url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=052f26926ae9784c2d677ca7bc5dec98&units=imperial",



	success: function(response){

		var result = response;
		var div = $('<div>');

		div.append('<h2>' + result.name + '</h2>')
		$('h2').eq(0).attr('font-size', '32px')
		div.append('<h2>The temperature is '+ result.main.temp +' in '+ result.name + '.</h2>')
		div.append('<h2>The high is ' + result.main.temp_max + ' and the low is ' + result.main.temp_min + '.</h2>')
		div.append('<h2>Today the weather brings us ' + result.weather[0].description + '.</h2>')

		$('body').append(div);

		if (result.weather[0].description === "clear sky") {
			alert("clear sky")
			$('body').css('background-image', 'url(images/aleksandr-kozlovskii-2925.jpg)')

		} else if (result.weather[0].description === "few clouds" || result.weather[0].description === "scattered clouds" ||result.weather[0].description === "broken clouds") {

			$('body').css('background-image', 'url(images/klepacki_clouds.jpg)')

		} else if (result.weather[0].description === "shower rain" || result.weather[0].description === "rain" || result.weather[0].description === "thunderstorm" || result.weather[0].description === "mist") {

			$('body').css('background-image', 'url(images/newbry_rain.jpg)')

		} else {

			$('body').css('background-image', 'url(images/lemons_snow.jpg)')
		}
		}
	});
