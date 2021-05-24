

SaveLocalStorage = function(key, value) {
	localStorage.setItem(key, value);	//key can't start with dot in Chrome!
	return 1;
}

LoadLocalStorage = function(key) {
	var state = localStorage.getItem(key);
	if (state) return state;
	return "";
}
