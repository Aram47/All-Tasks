let mp = new Map();

mp.set("Menu", "Burger");
mp.set("Home", "Villa");
mp.set("Page", "List");

function foo(arg)
{
    document.getElementById("text").innerHTML = mp.get(arg);
}