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
        document.getElementById("school").innerHTML = "School : " + jsondata["School"];
        document.getElementById("program").innerHTML = "Program/Major : " + jsondata["Program"];
        document.getElementById("type").innerHTML = "Type : " + jsondata["Type"];
        document.getElementById("year").innerHTML = "Year : " + jsondata["Year"];
    });
}

function clearAction(){
    document.getElementById("school").innerHTML = "";
    document.getElementById("program").innerHTML = "";
    document.getElementById("type").innerHTML = "";
    document.getElementById("year").innerHTML = "";
}