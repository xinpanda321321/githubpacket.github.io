var count = 0;

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
        count = jsondata.length
        for(let i = 0; i < jsondata.length; i++) {
			var table = document.getElementById("myTable");
			var row = table.insertRow(i + 1);
			var cel1 = row.insertCell(0);
			var cel2 = row.insertCell(1);
			var cel3 = row.insertCell(2);
			var cel4 = row.insertCell(3);
			cel1.innerHTML = jsondata[i]["School"];
			cel2.innerHTML = jsondata[i]["Program"];
			cel3.innerHTML = jsondata[i]["Type"];
			cel4.innerHTML = jsondata[i]["Year"];
		}
    });
}

function clearAction(){
    for(let i = 0; i < count; i++) {
    	document.getElementById("myTable").deleteRow(i + 1);
    }
}