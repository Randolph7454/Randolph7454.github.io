function tempBug()
{
    var temp = Number(document.Temperature.input1.value);
    if (temp > 80)
    {
        document.getElementById('weather').src="img/Summer.jpg";
        return "Summer";
    }
    else if (temp > 65)
    {
        document.getElementById('weather').src="img/Spring.jpg";
        return "Spring";
    }
    else if (temp > 40)
{
    document.getElementById('weather').src="img/Fal.jpg";
 return "Fall";
}
else
    {  document.getElementById('weather').src="img/Winter.jpg";
        return "Winter";
    }
}
