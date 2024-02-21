function clickFunction()
{
    if (document.getElementById("text").innerHTML === "Hello")
        document.getElementById("text").innerHTML = "Hello World";
    else
        document.getElementById("text").innerHTML = "Hello";
}