$(document).foundation();

$(document).ready(function(){

	new Maplace({
		show_markers: true,
		locations: [{
			lat: 47.7133029, 
			lon: -117.4071151,
			zoom: 16
		}]
	}).Load();

	

	console.log('Page Loaded. Lets Do this!');

});