document.addEventListener("DOMContentLoaded", function(e) {
	var sbEntries = document.getElementsByClassName("suche-biete-eintrag");

	for (entry of sbEntries) {
		var title = entry.getElementsByTagName('strong')[0];

		if (title.textContent == 'Suche') {
			entry.style.backgroundColor = '#fff9e6';
			// entry.parentElement.style.backgroundColor = 'lightblue';
		} else {
			entry.style.backgroundColor = '#cfe4e6';
			// entry.parentElement.style.backgroundColor = 'beige';
		}
	}
})