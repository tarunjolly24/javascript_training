var months={
"1":"Jan",
"2":"Feb",
"3":"Mar",
"4":"Apr",
"5":"May",
"6":"Jun",
"7":"Jul",
"8":"Aug",
"9":"Sept",
"10":"Oct",
"11":"Nov",
"12":"Dec"
}

function showtime(){
    var time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    var date=time.getDate();
    var month=months[time.getMonth()+1];
    
    var year=time.getFullYear();
    var currentTime = "";
    var currentDate="";
    var am_pm = "";

    currentDate+=date<10? "0"+date+" ":date+" ";
    currentDate+=month+" ";
    currentDate+=year;
    console.log(currentDate);


    function greeting(hour){
        if(hour>=4 && hour<12)   return "Good Morning";
        else if(hour>=12 && hour<16) return "Good Afternoon";
        else if(hour>=16 && hour<22) return "Good Evening";
        else return "Good Night";
    
    }

    var greeting=greeting(hour);

    

    //set hour
    if (hour > 12) {
        hour -= 12;
        if (hour < 10) currentTime += "0"

        currentTime += hour + ":";
        am_pm = "PM"
    } else {
        hour -= 12;
        am_pm="AM";
        currentTime += hour + ":";
    }

    currentTime+=min<10?"0" + min + ":" :min + ":";
    currentTime+=sec<10? "0"+sec:sec;
    currentTime +=" "+ am_pm;
    console.log(currentTime);
    document.getElementById("set-greeting").innerHTML=greeting;
    document.getElementById("set-time").innerHTML=currentTime;
    document.getElementById("set-date").innerHTML=currentDate;

}

setInterval(showtime, 1000);
