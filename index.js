function loadJson(){
    let response = fetch("./test.json")
    .then(response => {
        console.log(response);
        if(response.status == 200)
        {
            return response.json();
        }
    })
    .then(jsondata => {
        console.log(jsondata);
		var table = document.getElementById("myTable");
		var row = table.insertRow(0);
		var cel1 = row.insertCell(0);
		var cel2 = row.insertCell(1);
		var cel3 = row.insertCell(2);
		var cel4 = row.insertCell(3);
		cel1.innerHTML = jsondata["School"];
		cel2.innerHTML = jsondata["Program"];
		cel3.innerHTML = jsondata["Type"];
		cel4.innerHTML = jsondata["Year"];
    });
}

function clearAction(){
    document.getElementById("school").innerHTML = "";
    document.getElementById("program").innerHTML = "";
    document.getElementById("type").innerHTML = "";
    document.getElementById("year").innerHTML = "";
}