var zipCode = prompt("What is your zipcode");

if (result.weather[0].description = "clear sky")
	$('body').attr('background-image', 'url(../images/)')
if (result.weather[0].description = "")
	$('body').attr('background-image', 'url(../images/)')
if (result.weather[0].description = "")
	$('body').attr('background-image', 'url(../images/)')


$.ajax({
	method: "GET",
	url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=052f26926ae9784c2d677ca7bc5dec98&units=imperial",
	success: function(response){
		var result = response;
		var div = $('<div>');
		div.append('<h2>The temperature is '+ result.main.temp +' in '+ result.name + '.</h2>')
		div.append('<h2>The high is ' + result.main.temp_max + ' and the low is ' + result.main.temp_min + '.</h2>')
		div.append('<h2>Today the weather brings us ' + result.weather[0].description + '.</h2>')
		$('body').append(div);
	}
})
