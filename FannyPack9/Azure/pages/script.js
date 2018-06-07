function initXHR(x, value) {
	console.log(x);
	if (x=='home') {
		retrieveActivePostcardsFromServer('/app/postcards/', 'postcards');
		document.getElementById("home").style.display = "block";
		document.getElementById("instructionsButton").style.display = "block";
		document.getElementById("popularDestinationsButton").style.display = "none";
		document.getElementById("instructionsContainer").style.display = "none";
		document.getElementById("popDestinationContainer").style.display = "none";
		document.getElementById("postCardContainer").style.display = "none";
		document.getElementById("postcards").style.display = "block";
		document.getElementById("footerContainer").style.display = "block";
	}
	else if (x=='instructions') {
		document.getElementById("home").style.display = "block";
		document.getElementById("instructionsButton").style.display = "none";
		document.getElementById("popularDestinationsButton").style.display = "block";
		document.getElementById("instructionsContainer").style.display = "block";
		document.getElementById("popDestinationContainer").style.display = "none";
		document.getElementById("postCardContainer").style.display = "none";
		document.getElementById("postcards").style.display = "none";
		document.getElementById("footerContainer").style.display = "block";
	}
	else if (x=='popularDestinations') {
		document.getElementById("home").style.display = "block";
		document.getElementById("instructionsButton").style.display = "block";
		document.getElementById("popularDestinationsButton").style.display = "none";
		document.getElementById("instructionsContainer").style.display = "none";
		document.getElementById("popDestinationContainer").style.display = "none";
		document.getElementById("postCardContainer").style.display = "none";
		document.getElementById("postcards").style.display = "block";
		document.getElementById("footerContainer").style.display = "block";
	}
}

function retrieveActivePostcardsFromServer(url, operation) {
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var returnValues = JSON.parse(xmlhttp.responseText);
			if (operation == "postcards") {
				populatePostcardView('postcards', returnValues);
			}
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

//DOM based function
function populatePostcardView(elementId, lists) {
	var element = document.getElementById(elementId);
	var newElement = "<h1>Post Cards</h1>";
	
	for (var i = 0; i < lists.length; i++) {
		newElement += "<div class=\"postCardRow\">";
		for (var j = 0; j < 3; j++) {
			newElement += "<div class=\"postCardFormat\" style='text-align: center'>";
			newElement += "<h4>" + (i + 1) + ". " + lists[i].title + "</h4>";
			newElement += "<p>Desc: <span>" + lists[i].description + "</span></p>";
			newElement += "<p>Rating: <span>" + lists[i].rating + "</span></p>";
			newElement += "<p>Rating: <span>" + lists[i].cost + "</span></p>";
			newElement += "<p>Location: <span>" + lists[i].activityLocation + "</span></p>";
			newElement += "<p>City: <span>" + lists[i].activityCity + "</span></p>";
			newElement += "</div>";
			i++;
		}
		i--;
		newElement += "</div>";
	}
	element.innerHTML = newElement;
}
