let searchFun = () => {
	var value = document.getElementById("search").value;
	if (value) {
		jumpLink(`search.html?value=${value}`);
	}
}


function clicksearch(event) {
	var event = window.event || event;
	var keycode = event.keyCode;
	if (keycode == '13') {
		searchFun()
	}
}


function seFn() {
	var search = document.getElementById("search");
	let searchBtn = document.querySelector(".searchBtn");

	if (search) {
		search.onkeydown = function () {
			clicksearch(event)
		}
		search.onKeypress = function () {
			clicksearch(event)
		};

		searchBtn.onclick = function () {
			searchFun()
		}
		
	}
}
seFn()