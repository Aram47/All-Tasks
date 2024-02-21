function changeValidation()
{
    if (!document.getElementById("inp").value)
    {
        document.getElementById("Warning").innerHTML = "Please enter your email";
        document.getElementById("Warning").style.color = "red";
    }
    else 
    {
        document.getElementById("Warning").innerHTML = "Thanks";
        document.getElementById("Warning").style.color = "black";
    }
}