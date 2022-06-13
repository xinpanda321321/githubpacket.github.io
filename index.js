function loadJson() {
	let response = fetch("./test.json")
	.then(response => {
	   return response.json();
	})
	.then(jsondata => console.log(jsondata));

	if(response.status == 200) {
		var data = response.data
		var table = document.getElementById("myTable");
		var row = table.insertRow(0);
		var cel1 = row.insertCell(0);
		var cel2 = row.insertCell(1);
		var cel3 = row.insertCell(2);
		var cel4 = row.insertCell(3);
		cel1.innerHTML = data["School"];
		cel2.innerHTML = data["Program"];
		cel3.innerHTML = data["Type"];
		cel4.innerHTML = data["Year"];
	}
}