function calCount()
{
    var activity = document.calCount.activity.value;
    var activty = activity.toLowerCase();
    var num1 = document.calCount.num1.value;


    if(activty == 'walking')
    {
        return 3 * num1;
    }
    else if (activity == 'running')
    {
        return 8 * num1;
    }
    else if (activity == 'lifting')
    {
        return 15 * num1;
    }
    else if (activity == 'boxing')
    {
        return 20 * num1
    }
    else if (activity == 'football')
    {
        return 25 * num1;
    }
    else if (activity == 'watching tv')
    {
        return "Get outside you lazy bum!"
    }
    else
    {
        return "Get Outdoors!"
    }

}