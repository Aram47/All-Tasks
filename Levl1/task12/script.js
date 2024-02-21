let arr = ["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
           "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
           "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg"
          ]




let index = 0;

document.getElementById("image").src = arr[index];

function refresh()
{
    if (index > arr.length - 1)
    {
        index = 0;
    }
    else if (index < 0)
    {
        index = arr.length - 1;
    }
}


function funcPrev()
{
    --index;
    refresh();
    document.getElementById("image").src = arr[index];
}

function funcNext()
{
    ++index;
    refresh();
    document.getElementById("image").src = arr[index];
}