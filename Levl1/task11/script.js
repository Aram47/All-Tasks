function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function func()
{
    if (document.getElementById("inp").value)
    {
        if (isValidEmail(document.getElementById("inp").value)) 
        {
            document.getElementById("text").innerHTML = "Valid email";
            document.getElementById("text").style.color = "black";
        }
        else
        {
            document.getElementById("text").innerHTML = "Invalid email";
            document.getElementById("text").style.color = "red";
        }
    }
    else
    {
        document.getElementById("text").innerHTML = "Invalid email";
        document.getElementById("text").style.color = "red";
    }
}