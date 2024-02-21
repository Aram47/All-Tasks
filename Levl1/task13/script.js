const info = new Map();

info.set("London", "London is the capital of great Britain");
info.set("Paris", "Paris is the capital of France");
info.set("Moscow", "Moscow is the capital of Russia");

function func(City)
{
    document.getElementById("Name").innerHTML = City;
    document.getElementById("text").innerHTML = info.get(City);
}

// let textArr = [
//                 "London is the capital of great Britain",
//                 "Paris is the capital of France",
//                 "Moscow is the capital of Russia"
//               ];

// let cityName = [
//                 "London", "Paris", "Moscow"
//                ];

// function func(City)
// {
//     for (let i = 0; i < cityName.length; ++i)
//         if (City === cityName[i])
//         {
//             document.getElementById("Name").innerHTML = cityName[i];
//             document.getElementById("text").innerHTML = textArr[i];
//             break;
//         }
// }