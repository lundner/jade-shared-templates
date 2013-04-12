// text.js wird durch require.js automatisch geladen
requirejs(['jade'], function() {
	
	// Wir laden das Template fuer unsere Liste
	requirejs(['text!/templates/listitem.jade'], function(listitem) {

		// Wir kompilieren das Template - es entsteht eine Funktion
		var compiledLine = jade.compile(listitem);

		// Ein paar Zufallszeilen
		var myLines = [
			{color: '#a44', content: 'Zeile Client 3'},
			{color: '#4a4', content: 'Zeile Client 4'},
			{color: '#44a', content: 'Zeile Client 5'}
		];
		var mylist = document.getElementById('mylist');

		// Wir befuellen die Liste
		for(var i=0; i < myLines.length; i++) {
			// Wir wenden das kompilierte Template an mit dem Objekt der
			// entsprechenden Zeile und haengen es an #mylist
			var lineDOM = compiledLine(myLines[i]);
			mylist.innerHTML+= lineDOM;
		}
	});
});


