function func()
{   
    var buff = document.getElementById("inp").value;
    localStorage.setItem("data", buff);
}

function retrieveData() {
    var data = localStorage.getItem('data');
    document.getElementById("inp").value = data;
}

retrieveData();