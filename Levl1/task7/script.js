function func()
{
    if (document.getElementById("butt").innerHTML === "Hide")
    {
        document.getElementById("butt").innerHTML = "show"
        document.getElementById("text").style.display = "none";
    }
    else
    {
        document.getElementById("butt").innerHTML = "Hide"
        document.getElementById("text").style.display = "block";
    } 

}