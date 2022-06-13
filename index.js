function loadJson() {
	let response = fetch("./test.json")
	.then(response => {
	   return response.json();
	})
	.then(jsondata => console.log(jsondata));

	if(response.status == 200) {
		var data = response.data
		console.log(data);
		document.getElementById("school").innerHTML = "School : " + data["School"];
		document.getElementById("program").innerHTML = "Program/Major : " + data["Program"];
		document.getElementById("type").innerHTML = "Type : " + data["Type"];
		document.getElementById("year").innerHTML = "Year : " + data["Year"];
	}
}