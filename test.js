	<script>
		function getWeather () {
			var xmlhttp = new XMLHttpRequest();
			var urlAPI = "&appid=0ca1a238b432c3635dd452364d716ef3";
 			var urlUnit = "&units=metric"; // metric or imperial
//			var urlUnit = "&units=imperial"; // metric or imperial
			var urlCity = "q=montreal";
			var urlBase = "http://api.openweathermap.org/data/2.5/weather?";
			var url = urlBase + urlCity + urlUnit + urlAPI;
			
			xmlhttp.onreadystatechange = function() {
			    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        	displayWeather(xmlhttp.responseText);
		    	}
			}
			xmlhttp.open("GET", url, true);
			xmlhttp.send();
			}
		
		function displayWeather (response) {			
			var arr = JSON.parse(response);
//			document.getElementById('tempid').innerHTML = arr.main.temp + "C " + arr.wind.speed;
		}
		
		getWeather();

	</script> 
