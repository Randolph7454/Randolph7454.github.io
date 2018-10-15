function tempBug()
{
    var temp = Number(document.Temperature.input1.value);
    if (temp > 80)
    {
        document.getElementById('weather').src = "img/summer.jpg";
        return "Summer";
    }
    else if (temp > 65)
    {
        document.getElementById('weather').src = "img/Spring-picture.jpg";
        return "Spring";
    }
    else if (temp > 40)
{
    document.getElementById('weather').src = "img/fall.jpeg";
 return "Fall";
}
else
    {
        document.getElementById('weather').src = "img/wnter.jpg";
        return "Winter";
    }
}