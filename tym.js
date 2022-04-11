function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext){
        var ctx = canvas.getContext("2d");

        // for rows
        for (var i = 0; i < 540; i += 20){
            ctx.moveTo(0, i);
            ctx.lineTo(1260, i);
            ctx.strokeStyle = "#191a19";
            ctx.stroke();                  
        }

        // for columns 
        for (var i = 0; i < 1260; i += 20) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i, 540);
            ctx.strokeStyle = "#191a19";
            ctx.stroke();
        }
    }
}

var month = 3;
var year = 2022;
var date = 8;
var day = 0;
let tyme = new Date();
// create objects to store days and months

var dayWeek = {
    0 : "SUN",
    1 : "MON",
    2 : "TUE",
    3 : "WED",
    4 : "THU",
    5 : "FRI", 
    6 : "SAT"
}
var monthYear = {
    0 : "JAN", 
    1 : "FEB",
    2 : "MAR",
    3 : "APR", 
    4 : "MAY",
    5 : "JUN",
    6 : "JUL",
    7 : "AUG",
    8 : "SEP",
    9 : "OCT",
    10 : "NOV", 
    11 : "DEC"
}
var monthString, dayString;
function changeDates(time) {
    // this means we need to change date, month, year and day 
    month = time.getMonth(); // 3
    year = time.getFullYear(); // 2022
    date = time.getDate(); //10
    day = time.getDay(); // 0

    monthString = monthYear[month];
    dayString = dayWeek[day];

    document.getElementById("month").innerHTML = monthYear[month];
    document.getElementById("date").innerHTML = date;
    document.getElementById("year").innerHTML = year;
    document.getElementById("day").innerHTML = dayWeek[day];
    // document.getElementById("ampm").innerHTML = "pm";

};
setInterval(function() {
    let time = new Date();
    let hour = time.getHours();
    let dateNow = time.getDate();

    if (dateNow != date) {
        // 8 != 10
        //i.e saved date is not equal to current date, then call a function to print these all on clock
        changeDates(time);
    }

    let ampm;
    let h1;
    if (hour <= 12) {
        ampm = "am";
        h1 = hour.toString();
    }
    else {
        hour = hour-12;
        ampm = "pm";
        h1 = hour.toString();
    }
    document.getElementById("ampm").innerHTML = ampm;

    let minute = time.getMinutes();
    let seconds = time.getSeconds();

    if (h1.length == 1){
        h1 = `0${hour}`;
    }

    // h1[0] exists so it can be 1 only   
    if (h1[0] == "1") {
        document.getElementById("H1-L1").style.stroke = "transparent";
        document.getElementById("H1-L1").style.fill = "none";

        document.getElementById("H1-L2").style.stroke = "transparent";
        document.getElementById("H1-L2").style.fill = "none";

        document.getElementById("H1-TOP").style.stroke = "transparent";
        document.getElementById("H1-TOP").style.fill = "none";

        document.getElementById("H1-BOT").style.stroke = "transparent";
        document.getElementById("H1-BOT").style.fill = "none";

        document.getElementById("H1-MID").style.stroke = "transparent";
        document.getElementById("H1-MID").style.fill = "none";

        document.getElementById("H1-R1").style.stroke = "cornflowerblue";
        document.getElementById("H1-R1").style.fill = "blue";

        document.getElementById("H1-R2").style.stroke = "cornflowerblue";
        document.getElementById("H1-R2").style.fill = "blue";
    } 

    // check for h2
    if (h1[1] == "0") {
        var hour1 = document.getElementsByClassName('H2');
        for (var i=0; i < hour1.length; i++) {
            hour1[i].style.stroke = "cornflowerblue";
            hour1[i].style.fill = "blue";
        }
        document.getElementById('H2-MID').style.stroke = "transparent";
        document.getElementById('H2-MID').style.fill = "none";
    }

    // else if down
    else if (h1[1] == "1") {
        document.getElementById("H2-L1").style.stroke = "transparent";
        document.getElementById("H2-L1").style.fill = "none";

        document.getElementById("H2-L2").style.stroke = "transparent";
        document.getElementById("H2-L2").style.fill = "none";

        document.getElementById("H2-TOP").style.stroke = "transparent";
        document.getElementById("H2-TOP").style.fill = "none";

        document.getElementById("H2-BOT").style.stroke = "transparent";
        document.getElementById("H2-BOT").style.fill = "none";

        document.getElementById("H2-MID").style.stroke = "transparent";
        document.getElementById("H2-MID").style.fill = "none";

        document.getElementById("H2-R2").style.stroke = "cornflowerblue";
        document.getElementById("H2-R2").style.fill = "blue";

        document.getElementById("H2-R1").style.stroke = "cornflowerblue";
        document.getElementById("H2-R1").style.fill = "blue";
    } 
    else if (h1[1] == "2") {
        document.getElementById("H2-L1").style.stroke = "transparent";
        document.getElementById("H2-L1").style.fill = "none";

        document.getElementById("H2-R2").style.stroke = "transparent";
        document.getElementById("H2-R2").style.fill = "none";

        document.getElementById("H2-R1").style.stroke = "cornflowerblue";
        document.getElementById("H2-R1").style.fill = "blue";

        document.getElementById("H2-L2").style.stroke = "cornflowerblue";
        document.getElementById("H2-L2").style.fill = "blue";

        document.getElementById("H2-TOP").style.stroke = "cornflowerblue";
        document.getElementById("H2-TOP").style.fill = "blue";

        document.getElementById("H2-BOT").style.stroke = "cornflowerblue";
        document.getElementById("H2-BOT").style.fill = "blue";

        document.getElementById("H2-MID").style.stroke = "cornflowerblue";
        document.getElementById("H2-MID").style.fill = "blue";

    }
    else if (h1[1] == "3") {
        document.getElementById("H2-L1").style.stroke = "transparent";
        document.getElementById("H2-L1").style.fill = "none";

        document.getElementById("H2-L2").style.stroke = "transparent";
        document.getElementById("H2-L2").style.fill = "none";

        document.getElementById("H2-R2").style.stroke = "cornflowerblue";
        document.getElementById("H2-R2").style.fill = "blue";

        document.getElementById("H2-R1").style.stroke = "cornflowerblue";
        document.getElementById("H2-R1").style.fill = "blue";

        document.getElementById("H2-TOP").style.stroke = "cornflowerblue";
        document.getElementById("H2-TOP").style.fill = "blue";

        document.getElementById("H2-BOT").style.stroke = "cornflowerblue";
        document.getElementById("H2-BOT").style.fill = "blue";

        document.getElementById("H2-MID").style.stroke = "cornflowerblue";
        document.getElementById("H2-MID").style.fill = "blue";
    }
    else if (h1[1] == "4") {
        
        document.getElementById("H2-L2").style.stroke = "transparent";
        document.getElementById("H2-L2").style.fill = "none";

        document.getElementById("H2-TOP").style.stroke = "transparent";
        document.getElementById("H2-TOP").style.fill = "none";

        document.getElementById("H2-BOT").style.stroke = "transparent";
        document.getElementById("H2-BOT").style.fill = "none";

        document.getElementById("H2-R2").style.stroke = "cornflowerblue";
        document.getElementById("H2-R2").style.fill = "blue";

        document.getElementById("H2-R1").style.stroke = "cornflowerblue";
        document.getElementById("H2-R1").style.fill = "blue";

        document.getElementById("H2-L1").style.stroke = "cornflowerblue";
        document.getElementById("H2-L1").style.fill = "blue";

        document.getElementById("H2-MID").style.stroke = "cornflowerblue";
        document.getElementById("H2-MID").style.fill = "blue";

    }
    else if (h1[1] == "5") {
        
        document.getElementById("H2-L2").style.stroke = "transparent";
        document.getElementById("H2-L2").style.fill = "none";

        document.getElementById("H2-R1").style.stroke = "transparent";
        document.getElementById("H2-R1").style.fill = "none";

        document.getElementById("H2-R2").style.stroke = "cornflowerblue";
        document.getElementById("H2-R2").style.fill = "blue";

        document.getElementById("H2-L1").style.stroke = "cornflowerblue";
        document.getElementById("H2-L1").style.fill = "blue";

        document.getElementById("H2-TOP").style.stroke = "cornflowerblue";
        document.getElementById("H2-TOP").style.fill = "blue";

        document.getElementById("H2-BOT").style.stroke = "cornflowerblue";
        document.getElementById("H2-BOT").style.fill = "blue";

        document.getElementById("H2-MID").style.stroke = "cornflowerblue";
        document.getElementById("H2-MID").style.fill = "blue";

    }

    else if (h1[1] == "6") {
        document.getElementById("H2-TOP").style.stroke = "transparent";
        document.getElementById("H2-TOP").style.fill = "none";

        document.getElementById("H2-R1").style.stroke = "transparent";
        document.getElementById("H2-R1").style.fill = "none";

        document.getElementById("H2-R2").style.stroke = "cornflowerblue";
        document.getElementById("H2-R2").style.fill = "blue";

        document.getElementById("H2-L1").style.stroke = "cornflowerblue";
        document.getElementById("H2-L1").style.fill = "blue";

        document.getElementById("H2-L2").style.stroke = "cornflowerblue";
        document.getElementById("H2-L2").style.fill = "blue";

        document.getElementById("H2-BOT").style.stroke = "cornflowerblue";
        document.getElementById("H2-BOT").style.fill = "blue";

        document.getElementById("H2-MID").style.stroke = "cornflowerblue";
        document.getElementById("H2-MID").style.fill = "blue";

    }

    else if (h1[1] == "7") {
        document.getElementById("H2-L1").style.stroke = "transparent";
        document.getElementById("H2-L1").style.fill = "none";

        document.getElementById("H2-L2").style.stroke = "transparent";
        document.getElementById("H2-L2").style.fill = "none";

        document.getElementById("H2-BOT").style.stroke = "transparent";
        document.getElementById("H2-BOT").style.fill = "none";

        document.getElementById("H2-MID").style.stroke = "transparent";
        document.getElementById("H2-MID").style.fill = "none";

        document.getElementById("H2-R2").style.stroke = "cornflowerblue";
        document.getElementById("H2-R2").style.fill = "blue";

        document.getElementById("H2-R1").style.stroke = "cornflowerblue";
        document.getElementById("H2-R1").style.fill = "blue";

        document.getElementById("H2-TOP").style.stroke = "cornflowerblue";
        document.getElementById("H2-TOP").style.fill = "blue";
    } 

    else if (seconds[1] == "8") {
        document.getElementById("H2-L1").style.stroke = "cornflowerblue";
        document.getElementById("H2-L1").style.fill = "blue";
    
        document.getElementById("H2-L2").style.stroke = "cornflowerblue";
        document.getElementById("H2-L2").style.fill = "blue";
    
        document.getElementById("H2-R1").style.stroke = "cornflowerblue";
        document.getElementById("H2-R1").style.fill = "blue";
    
        document.getElementById("H2-R2").style.stroke = "cornflowerblue";
        document.getElementById("H2-R2").style.fill = "blue";
    
        document.getElementById("H2-TOP").style.stroke = "cornflowerblue";
        document.getElementById("H2-TOP").style.fill = "blue";
    
        document.getElementById("H2-BOT").style.stroke = "cornflowerblue";
        document.getElementById("H2-BOT").style.fill = "blue";
    
        document.getElementById("H2-MID").style.stroke = "cornflowerblue";
        document.getElementById("H2-MID").style.fill = "blue";
    }
    else if (h1[1] == "9") {

        document.getElementById("H2-L2").style.stroke = "transparent";
        document.getElementById("H2-L2").style.fill = "none";

        document.getElementById("H2-BOT").style.stroke = "transparent";
        document.getElementById("H2-BOT").style.fill = "none";

        document.getElementById("H2-L1").style.stroke = "cornflowerblue";
        document.getElementById("H2-L1").style.fill = "blue";

        document.getElementById("H2-R1").style.stroke = "cornflowerblue";
        document.getElementById("H2-R1").style.fill = "blue";

        document.getElementById("H2-R2").style.stroke = "cornflowerblue";
        document.getElementById("H2-R2").style.fill = "blue";

        document.getElementById("H2-TOP").style.stroke = "cornflowerblue";
        document.getElementById("H2-TOP").style.fill = "blue";

        document.getElementById("H2-MID").style.stroke = "cornflowerblue";
        document.getElementById("H2-MID").style.fill = "blue";

    } 


    // minute hands
    if (minute < 10) {
        if (minute == 0) {
            minute = `00`;
        }
        minute = minute.toString();
        minute = `0${minute}`;
    }
    else {
        minute = minute.toString();
    }
    
    // change M1 and M2 hands with minute[0] and minute[1] Resp..

    if (minute[0] == "0") {
        document.getElementById("M1-MID").style.stroke = "transparent";
        document.getElementById("M1-MID").style.fill = "none";

        document.getElementById("M1-R2").style.stroke = "cornflowerblue";
        document.getElementById("M1-R2").style.fill = "blue";

        document.getElementById("M1-R1").style.stroke = "cornflowerblue";
        document.getElementById("M1-R1").style.fill = "blue";

        document.getElementById("M1-L1").style.stroke = "cornflowerblue";
        document.getElementById("M1-L1").style.fill = "blue";

        document.getElementById("M1-L2").style.stroke = "cornflowerblue";
        document.getElementById("M1-L2").style.fill = "blue";

        document.getElementById("M1-TOP").style.stroke = "cornflowerblue";
        document.getElementById("M1-TOP").style.fill = "blue";

        document.getElementById("M1-BOT").style.stroke = "cornflowerblue";
        document.getElementById("M1-BOT").style.fill = "blue";

    }
    else if (minute[0] == "1") {
        document.getElementById("M1-L1").style.stroke = "transparent";
        document.getElementById("M1-L1").style.fill = "none";

        document.getElementById("M1-L2").style.stroke = "transparent";
        document.getElementById("M1-L2").style.fill = "none";

        document.getElementById("M1-TOP").style.stroke = "transparent";
        document.getElementById("M1-TOP").style.fill = "none";

        document.getElementById("M1-BOT").style.stroke = "transparent";
        document.getElementById("M1-BOT").style.fill = "none";

        document.getElementById("M1-MID").style.stroke = "transparent";
        document.getElementById("M1-MID").style.fill = "none";

        document.getElementById("M1-R1").style.stroke = "cornflowerblue";
        document.getElementById("M1-R1").style.fill = "blue";

        document.getElementById("M1-R2").style.stroke = "cornflowerblue";
        document.getElementById("M1-R2").style.fill = "blue";
    } 
    else if (minute[0] == "2") {
        document.getElementById("M1-L1").style.stroke = "transparent";
        document.getElementById("M1-L1").style.fill = "none";

        document.getElementById("M1-R2").style.stroke = "transparent";
        document.getElementById("M1-R2").style.fill = "none";

        document.getElementById("M1-R1").style.stroke = "cornflowerblue";
        document.getElementById("M1-R1").style.fill = "blue";

        document.getElementById("M1-L2").style.stroke = "cornflowerblue";
        document.getElementById("M1-L2").style.fill = "blue";

        document.getElementById("M1-TOP").style.stroke = "cornflowerblue";
        document.getElementById("M1-TOP").style.fill = "blue";

        document.getElementById("M1-BOT").style.stroke = "cornflowerblue";
        document.getElementById("M1-BOT").style.fill = "blue";

        document.getElementById("M1-MID").style.stroke = "cornflowerblue";
        document.getElementById("M1-MID").style.fill = "blue";

    }
    else if (minute[0] == "3") {
        document.getElementById("M1-L1").style.stroke = "transparent";
        document.getElementById("M1-L1").style.fill = "none";

        document.getElementById("M1-L2").style.stroke = "transparent";
        document.getElementById("M1-L2").style.fill = "none";

        document.getElementById("M1-R1").style.stroke = "cornflowerblue";
        document.getElementById("M1-R1").style.fill = "blue";

        document.getElementById("M1-R2").style.stroke = "cornflowerblue";
        document.getElementById("M1-R2").style.fill = "blue";

        document.getElementById("M1-TOP").style.stroke = "cornflowerblue";
        document.getElementById("M1-TOP").style.fill = "blue";

        document.getElementById("M1-BOT").style.stroke = "cornflowerblue";
        document.getElementById("M1-BOT").style.fill = "blue";

        document.getElementById("M1-MID").style.stroke = "cornflowerblue";
        document.getElementById("M1-MID").style.fill = "blue";
    }
    else if (minute[0] == "4") {
        
        document.getElementById("M1-L2").style.stroke = "transparent";
        document.getElementById("M1-L2").style.fill = "none";

        document.getElementById("M1-TOP").style.stroke = "transparent";
        document.getElementById("M1-TOP").style.fill = "none";

        document.getElementById("M1-BOT").style.stroke = "transparent";
        document.getElementById("M1-BOT").style.fill = "none";

        document.getElementById("M1-L1").style.stroke = "cornflowerblue";
        document.getElementById("M1-L1").style.fill = "blue";

        document.getElementById("M1-R1").style.stroke = "cornflowerblue";
        document.getElementById("M1-R1").style.fill = "blue";

        document.getElementById("M1-R2").style.stroke = "cornflowerblue";
        document.getElementById("M1-R2").style.fill = "blue";

        document.getElementById("M1-MID").style.stroke = "cornflowerblue";
        document.getElementById("M1-MID").style.fill = "blue";

    }
    else if (minute[0] == "5") {
        
        document.getElementById("M1-L2").style.stroke = "transparent";
        document.getElementById("M1-L2").style.fill = "none";

        document.getElementById("M1-R1").style.stroke = "transparent";
        document.getElementById("M1-R1").style.fill = "none";

        document.getElementById("M1-R2").style.stroke = "cornflowerblue";
        document.getElementById("M1-R2").style.fill = "blue";

        document.getElementById("M1-L1").style.stroke = "cornflowerblue";
        document.getElementById("M1-L1").style.fill = "blue";

        document.getElementById("M1-TOP").style.stroke = "cornflowerblue";
        document.getElementById("M1-TOP").style.fill = "blue";

        document.getElementById("M1-BOT").style.stroke = "cornflowerblue";
        document.getElementById("M1-BOT").style.fill = "blue";

        document.getElementById("M1-MID").style.stroke = "cornflowerblue";
        document.getElementById("M1-MID").style.fill = "blue";

    }

    else if (minute[0] == "6") {
        document.getElementById("M1-TOP").style.stroke = "transparent";
        document.getElementById("M1-TOP").style.fill = "none";

        document.getElementById("M1-R1").style.stroke = "transparent";
        document.getElementById("M1-R1").style.fill = "none";

        document.getElementById("M1-R2").style.stroke = "cornflowerblue";
        document.getElementById("M1-R2").style.fill = "blue";

        document.getElementById("M1-L1").style.stroke = "cornflowerblue";
        document.getElementById("M1-L1").style.fill = "blue";

        document.getElementById("M1-L2").style.stroke = "cornflowerblue";
        document.getElementById("M1-L2").style.fill = "blue";

        document.getElementById("M1-BOT").style.stroke = "cornflowerblue";
        document.getElementById("M1-BOT").style.fill = "blue";

        document.getElementById("M1-MID").style.stroke = "cornflowerblue";
        document.getElementById("M1-MID").style.fill = "blue";

    }

    // MINUTES WILL NEVER START WITH 7, 8 OR 9
    
    if (minute[1] == "0") {
        document.getElementById("M2-MID").style.stroke = "transparent";
        document.getElementById("M2-MID").style.fill = "none";

        document.getElementById("M2-L1").style.stroke = "cornflowerblue";
        document.getElementById("M2-L1").style.fill = "blue";

        document.getElementById("M2-L2").style.stroke = "cornflowerblue";
        document.getElementById("M2-L2").style.fill = "blue";

        document.getElementById("M2-R1").style.stroke = "cornflowerblue";
        document.getElementById("M2-R1").style.fill = "blue";

        document.getElementById("M2-R2").style.stroke = "cornflowerblue";
        document.getElementById("M2-R2").style.fill = "blue";

        document.getElementById("M2-TOP").style.stroke = "cornflowerblue";
        document.getElementById("M2-TOP").style.fill = "blue";

        document.getElementById("M2-BOT").style.stroke = "cornflowerblue";
        document.getElementById("M2-BOT").style.fill = "blue";
    }
    else if (minute[1] == "1") {
        document.getElementById("M2-L1").style.stroke = "transparent";
        document.getElementById("M2-L1").style.fill = "none";

        document.getElementById("M2-L2").style.stroke = "transparent";
        document.getElementById("M2-L2").style.fill = "none";

        document.getElementById("M2-TOP").style.stroke = "transparent";
        document.getElementById("M2-TOP").style.fill = "none";

        document.getElementById("M2-BOT").style.stroke = "transparent";
        document.getElementById("M2-BOT").style.fill = "none";

        document.getElementById("M2-MID").style.stroke = "transparent";
        document.getElementById("M2-MID").style.fill = "none";

        document.getElementById("M2-R1").style.stroke = "cornflowerblue";
        document.getElementById("M2-R1").style.fill = "blue";

        document.getElementById("M2-R2").style.stroke = "cornflowerblue";
        document.getElementById("M2-R2").style.fill = "blue";
    } 
    else if (minute[1] == "2") {
        document.getElementById("M2-L1").style.stroke = "transparent";
        document.getElementById("M2-L1").style.fill = "none";

        document.getElementById("M2-R2").style.stroke = "transparent";
        document.getElementById("M2-R2").style.fill = "none";

        document.getElementById("M2-L2").style.stroke = "cornflowerblue";
        document.getElementById("M2-L2").style.fill = "blue";

        document.getElementById("M2-R1").style.stroke = "cornflowerblue";
        document.getElementById("M2-R1").style.fill = "blue";

        document.getElementById("M2-TOP").style.stroke = "cornflowerblue";
        document.getElementById("M2-TOP").style.fill = "blue";

        document.getElementById("M2-BOT").style.stroke = "cornflowerblue";
        document.getElementById("M2-BOT").style.fill = "blue";

        document.getElementById("M2-MID").style.stroke = "cornflowerblue";
        document.getElementById("M2-MID").style.fill = "blue";

    }
    else if (minute[1] == "3") {
        document.getElementById("M2-L1").style.stroke = "transparent";
        document.getElementById("M2-L1").style.fill = "none";

        document.getElementById("M2-L2").style.stroke = "transparent";
        document.getElementById("M2-L2").style.fill = "none";

        document.getElementById("M2-R1").style.stroke = "cornflowerblue";
        document.getElementById("M2-R1").style.fill = "blue";

        document.getElementById("M2-R2").style.stroke = "cornflowerblue";
        document.getElementById("M2-R2").style.fill = "blue";

        document.getElementById("M2-TOP").style.stroke = "cornflowerblue";
        document.getElementById("M2-TOP").style.fill = "blue";

        document.getElementById("M2-BOT").style.stroke = "cornflowerblue";
        document.getElementById("M2-BOT").style.fill = "blue";

        document.getElementById("M2-MID").style.stroke = "cornflowerblue";
        document.getElementById("M2-MID").style.fill = "blue";
    }
    else if (minute[1] == "4") {
        
        document.getElementById("M2-L2").style.stroke = "transparent";
        document.getElementById("M2-L2").style.fill = "none";

        document.getElementById("M2-TOP").style.stroke = "transparent";
        document.getElementById("M2-TOP").style.fill = "none";

        document.getElementById("M2-BOT").style.stroke = "transparent";
        document.getElementById("M2-BOT").style.fill = "none";

        document.getElementById("M2-L1").style.stroke = "cornflowerblue";
        document.getElementById("M2-L1").style.fill = "blue";

        document.getElementById("M2-R1").style.stroke = "cornflowerblue";
        document.getElementById("M2-R1").style.fill = "blue";

        document.getElementById("M2-R2").style.stroke = "cornflowerblue";
        document.getElementById("M2-R2").style.fill = "blue";

        document.getElementById("M2-MID").style.stroke = "cornflowerblue";
        document.getElementById("M2-MID").style.fill = "blue";
    }
    else if (minute[1] == "5") {
        
        document.getElementById("M2-L2").style.stroke = "transparent";
        document.getElementById("M2-L2").style.fill = "none";

        document.getElementById("M2-R1").style.stroke = "transparent";
        document.getElementById("M2-R1").style.fill = "none";

        document.getElementById("M2-L1").style.stroke = "cornflowerblue";
        document.getElementById("M2-L1").style.fill = "blue";

        document.getElementById("M2-R2").style.stroke = "cornflowerblue";
        document.getElementById("M2-R2").style.fill = "blue";

        document.getElementById("M2-TOP").style.stroke = "cornflowerblue";
        document.getElementById("M2-TOP").style.fill = "blue";

        document.getElementById("M2-BOT").style.stroke = "cornflowerblue";
        document.getElementById("M2-BOT").style.fill = "blue";

        document.getElementById("M2-MID").style.stroke = "cornflowerblue";
        document.getElementById("M2-MID").style.fill = "blue";

    }

    else if (minute[1] == "6") {
        document.getElementById("M2-TOP").style.stroke = "transparent";
        document.getElementById("M2-TOP").style.fill = "none";

        document.getElementById("M2-R1").style.stroke = "transparent";
        document.getElementById("M2-R1").style.fill = "none";

        document.getElementById("M2-R2").style.stroke = "cornflowerblue";
        document.getElementById("M2-R2").style.fill = "blue";

        document.getElementById("M2-L1").style.stroke = "cornflowerblue";
        document.getElementById("M2-L1").style.fill = "blue";

        document.getElementById("M2-L2").style.stroke = "cornflowerblue";
        document.getElementById("M2-L2").style.fill = "blue";

        document.getElementById("M2-BOT").style.stroke = "cornflowerblue";
        document.getElementById("M2-BOT").style.fill = "blue";

        document.getElementById("M2-MID").style.stroke = "cornflowerblue";
        document.getElementById("M2-MID").style.fill = "blue";

    }

    else if (minute[1] == "7") {
        document.getElementById("M2-L1").style.stroke = "transparent";
        document.getElementById("M2-L1").style.fill = "none";

        document.getElementById("M2-L2").style.stroke = "transparent";
        document.getElementById("M2-L2").style.fill = "none";

        document.getElementById("M2-BOT").style.stroke = "transparent";
        document.getElementById("M2-BOT").style.fill = "none";

        document.getElementById("M2-MID").style.stroke = "transparent";
        document.getElementById("M2-MID").style.fill = "none";

        document.getElementById("M2-TOP").style.stroke = "cornflowerblue";
        document.getElementById("M2-TOP").style.fill = "blue";

        document.getElementById("M2-R1").style.stroke = "cornflowerblue";
        document.getElementById("M2-R1").style.fill = "blue";

        document.getElementById("M2-R2").style.stroke = "cornflowerblue";
        document.getElementById("M2-R2").style.fill = "blue";
    } 

    else if (minute[1] == "8") {
        document.getElementById("M2-L1").style.stroke = "cornflowerblue";
        document.getElementById("M2-L1").style.fill = "blue";
    
        document.getElementById("M2-L2").style.stroke = "cornflowerblue";
        document.getElementById("M2-L2").style.fill = "blue";
    
        document.getElementById("M2-R1").style.stroke = "cornflowerblue";
        document.getElementById("M2-R1").style.fill = "blue";
    
        document.getElementById("M2-R2").style.stroke = "cornflowerblue";
        document.getElementById("M2-R2").style.fill = "blue";
    
        document.getElementById("M2-TOP").style.stroke = "cornflowerblue";
        document.getElementById("M2-TOP").style.fill = "blue";
    
        document.getElementById("M2-BOT").style.stroke = "cornflowerblue";
        document.getElementById("M2-BOT").style.fill = "blue";
    
        document.getElementById("M2-MID").style.stroke = "cornflowerblue";
        document.getElementById("M2-MID").style.fill = "blue";
    }
    else if (minute[1] == "9") {

        document.getElementById("M2-L2").style.stroke = "transparent";
        document.getElementById("M2-L2").style.fill = "none";

        document.getElementById("M2-BOT").style.stroke = "transparent";
        document.getElementById("M2-BOT").style.fill = "none";

        document.getElementById("M2-TOP").style.stroke = "cornflowerblue";
        document.getElementById("M2-TOP").style.fill = "blue";

        document.getElementById("M2-MID").style.stroke = "cornflowerblue";
        document.getElementById("M2-MID").style.fill = "blue";

        document.getElementById("M2-L1").style.stroke = "cornflowerblue";
        document.getElementById("M2-L1").style.fill = "blue";

        document.getElementById("M2-R1").style.stroke = "cornflowerblue";
        document.getElementById("M2-R1").style.fill = "blue";

        document.getElementById("M2-R2").style.stroke = "cornflowerblue";
        document.getElementById("M2-R2").style.fill = "blue";

    }


    // second hand 
    if (seconds < 10) {
        if (seconds == "0") {
            seconds = "00";
        }
        else {
            seconds = `0${seconds}`;
        }
    }
    else {
        seconds = seconds.toString();
    }


if (seconds[0] == "0") {
    document.getElementById("S1-MID").style.stroke = "transparent";
    document.getElementById("S1-MID").style.fill = "none";

    document.getElementById("S1-L1").style.stroke = "cornflowerblue";
    document.getElementById("S1-L1").style.fill = "blue";

    document.getElementById("S1-L2").style.stroke = "cornflowerblue";
    document.getElementById("S1-L2").style.fill = "blue";

    document.getElementById("S1-R1").style.stroke = "cornflowerblue";
    document.getElementById("S1-R1").style.fill = "blue";

    document.getElementById("S1-R2").style.stroke = "cornflowerblue";
    document.getElementById("S1-R2").style.fill = "blue";

    document.getElementById("S1-TOP").style.stroke = "cornflowerblue";
    document.getElementById("S1-TOP").style.fill = "blue";

    document.getElementById("S1-BOT").style.stroke = "cornflowerblue";
    document.getElementById("S1-BOT").style.fill = "blue";
}
else if (seconds[0] == "1") {
    document.getElementById("S1-L1").style.stroke = "transparent";
    document.getElementById("S1-L1").style.fill = "none";

    document.getElementById("S1-L2").style.stroke = "transparent";
    document.getElementById("S1-L2").style.fill = "none";

    document.getElementById("S1-TOP").style.stroke = "transparent";
    document.getElementById("S1-TOP").style.fill = "none";

    document.getElementById("S1-BOT").style.stroke = "transparent";
    document.getElementById("S1-BOT").style.fill = "none";

    document.getElementById("S1-MID").style.stroke = "transparent";
    document.getElementById("S1-MID").style.fill = "none";

    document.getElementById("S1-R1").style.stroke = "cornflowerblue";
    document.getElementById("S1-R1").style.fill = "blue";

    document.getElementById("S1-R2").style.stroke = "cornflowerblue";
    document.getElementById("S1-R2").style.fill = "blue";
} 
else if (seconds[0] == "2") {
    document.getElementById("S1-L1").style.stroke = "transparent";
    document.getElementById("S1-L1").style.fill = "none";

    document.getElementById("S1-R2").style.stroke = "transparent";
    document.getElementById("S1-R2").style.fill = "none";

    document.getElementById("S1-L2").style.stroke = "cornflowerblue";
    document.getElementById("S1-L2").style.fill = "blue";

    document.getElementById("S1-R1").style.stroke = "cornflowerblue";
    document.getElementById("S1-R1").style.fill = "blue";

    document.getElementById("S1-TOP").style.stroke = "cornflowerblue";
    document.getElementById("S1-TOP").style.fill = "blue";

    document.getElementById("S1-BOT").style.stroke = "cornflowerblue";
    document.getElementById("S1-BOT").style.fill = "blue";

    document.getElementById("S1-MID").style.stroke = "cornflowerblue";
    document.getElementById("S1-MID").style.fill = "blue";

}
else if (seconds[0] == "3") {
    document.getElementById("S1-L1").style.stroke = "transparent";
    document.getElementById("S1-L1").style.fill = "none";

    document.getElementById("S1-L2").style.stroke = "transparent";
    document.getElementById("S1-L2").style.fill = "none";

    document.getElementById("S1-R1").style.stroke = "cornflowerblue";
    document.getElementById("S1-R1").style.fill = "blue";

    document.getElementById("S1-R2").style.stroke = "cornflowerblue";
    document.getElementById("S1-R2").style.fill = "blue";

    document.getElementById("S1-TOP").style.stroke = "cornflowerblue";
    document.getElementById("S1-TOP").style.fill = "blue";

    document.getElementById("S1-BOT").style.stroke = "cornflowerblue";
    document.getElementById("S1-BOT").style.fill = "blue";

    document.getElementById("S1-MID").style.stroke = "cornflowerblue";
    document.getElementById("S1-MID").style.fill = "blue";
}
else if (seconds[0] == "4") {
    
    document.getElementById("S1-L2").style.stroke = "transparent";
    document.getElementById("S1-L2").style.fill = "none";

    document.getElementById("S1-TOP").style.stroke = "transparent";
    document.getElementById("S1-TOP").style.fill = "none";

    document.getElementById("S1-BOT").style.stroke = "transparent";
    document.getElementById("S1-BOT").style.fill = "none";

    document.getElementById("S1-L1").style.stroke = "cornflowerblue";
    document.getElementById("S1-L1").style.fill = "blue";

    document.getElementById("S1-R1").style.stroke = "cornflowerblue";
    document.getElementById("S1-R1").style.fill = "blue";

    document.getElementById("S1-R2").style.stroke = "cornflowerblue";
    document.getElementById("S1-R2").style.fill = "blue";

    document.getElementById("S1-MID").style.stroke = "cornflowerblue";
    document.getElementById("S1-MID").style.fill = "blue";

}
else if (seconds[0] == "5") {
    
    document.getElementById("S1-L2").style.stroke = "transparent";
    document.getElementById("S1-L2").style.fill = "none";

    document.getElementById("S1-R1").style.stroke = "transparent";
    document.getElementById("S1-R1").style.fill = "none";

    document.getElementById("S1-L1").style.stroke = "cornflowerblue";
    document.getElementById("S1-L1").style.fill = "blue";

    document.getElementById("S1-R2").style.stroke = "cornflowerblue";
    document.getElementById("S1-R2").style.fill = "blue";

    document.getElementById("S1-TOP").style.stroke = "cornflowerblue";
    document.getElementById("S1-TOP").style.fill = "blue";

    document.getElementById("S1-BOT").style.stroke = "cornflowerblue";
    document.getElementById("S1-BOT").style.fill = "blue";

    document.getElementById("S1-MID").style.stroke = "cornflowerblue";
    document.getElementById("S1-MID").style.fill = "blue";

}

else if (seconds[0] == "6") {
    document.getElementById("S1-TOP").style.stroke = "transparent";
    document.getElementById("S1-TOP").style.fill = "none";

    document.getElementById("S1-R1").style.stroke = "transparent";
    document.getElementById("S1-R1").style.fill = "none";

    document.getElementById("S1-L1").style.stroke = "cornflowerblue";
    document.getElementById("S1-L1").style.fill = "blue";

    document.getElementById("S1-L2").style.stroke = "cornflowerblue";
    document.getElementById("S1-L2").style.fill = "blue";

    document.getElementById("S1-R2").style.stroke = "cornflowerblue";
    document.getElementById("S1-R2").style.fill = "blue";

    document.getElementById("S1-BOT").style.stroke = "cornflowerblue";
    document.getElementById("S1-BOT").style.fill = "blue";

    document.getElementById("S1-MID").style.stroke = "cornflowerblue";
    document.getElementById("S1-MID").style.fill = "blue";

}

// seconds [1] hand 
if (seconds[1] == "0") {
    document.getElementById("S2-MID").style.stroke = "transparent";
    document.getElementById("S2-MID").style.fill = "none";

    document.getElementById("S2-L1").style.stroke = "cornflowerblue";
    document.getElementById("S2-L1").style.fill = "blue";

    document.getElementById("S2-L2").style.stroke = "cornflowerblue";
    document.getElementById("S2-L2").style.fill = "blue";

    document.getElementById("S2-R1").style.stroke = "cornflowerblue";
    document.getElementById("S2-R1").style.fill = "blue";

    document.getElementById("S2-R2").style.stroke = "cornflowerblue";
    document.getElementById("S2-R2").style.fill = "blue";

    document.getElementById("S2-TOP").style.stroke = "cornflowerblue";
    document.getElementById("S2-TOP").style.fill = "blue";

    document.getElementById("S2-BOT").style.stroke = "cornflowerblue";
    document.getElementById("S2-BOT").style.fill = "blue";
}
else if (seconds[1] == "1") {
    document.getElementById("S2-L1").style.stroke = "transparent";
    document.getElementById("S2-L1").style.fill = "none";

    document.getElementById("S2-L2").style.stroke = "transparent";
    document.getElementById("S2-L2").style.fill = "none";

    document.getElementById("S2-TOP").style.stroke = "transparent";
    document.getElementById("S2-TOP").style.fill = "none";

    document.getElementById("S2-BOT").style.stroke = "transparent";
    document.getElementById("S2-BOT").style.fill = "none";

    document.getElementById("S2-MID").style.stroke = "transparent";
    document.getElementById("S2-MID").style.fill = "none";

    document.getElementById("S2-R1").style.stroke = "cornflowerblue";
    document.getElementById("S2-R1").style.fill = "blue";

    document.getElementById("S2-R2").style.stroke = "cornflowerblue";
    document.getElementById("S2-R2").style.fill = "blue";
} 
else if (seconds[1] == "2") {
    document.getElementById("S2-L1").style.stroke = "transparent";
    document.getElementById("S2-L1").style.fill = "none";

    document.getElementById("S2-R2").style.stroke = "transparent";
    document.getElementById("S2-R2").style.fill = "none";

    document.getElementById("S2-L2").style.stroke = "cornflowerblue";
    document.getElementById("S2-L2").style.fill = "blue";

    document.getElementById("S2-R1").style.stroke = "cornflowerblue";
    document.getElementById("S2-R1").style.fill = "blue";

    document.getElementById("S2-TOP").style.stroke = "cornflowerblue";
    document.getElementById("S2-TOP").style.fill = "blue";

    document.getElementById("S2-BOT").style.stroke = "cornflowerblue";
    document.getElementById("S2-BOT").style.fill = "blue";

    document.getElementById("S2-MID").style.stroke = "cornflowerblue";
    document.getElementById("S2-MID").style.fill = "blue";

}
else if (seconds[1] == "3") {
    document.getElementById("S2-L1").style.stroke = "transparent";
    document.getElementById("S2-L1").style.fill = "none";

    document.getElementById("S2-L2").style.stroke = "transparent";
    document.getElementById("S2-L2").style.fill = "none";

    document.getElementById("S2-R1").style.stroke = "cornflowerblue";
    document.getElementById("S2-R1").style.fill = "blue";

    document.getElementById("S2-R2").style.stroke = "cornflowerblue";
    document.getElementById("S2-R2").style.fill = "blue";

    document.getElementById("S2-TOP").style.stroke = "cornflowerblue";
    document.getElementById("S2-TOP").style.fill = "blue";

    document.getElementById("S2-BOT").style.stroke = "cornflowerblue";
    document.getElementById("S2-BOT").style.fill = "blue";

    document.getElementById("S2-MID").style.stroke = "cornflowerblue";
    document.getElementById("S2-MID").style.fill = "blue";
}
else if (seconds[1] == "4") {
    
    document.getElementById("S2-L2").style.stroke = "transparent";
    document.getElementById("S2-L2").style.fill = "none";

    document.getElementById("S2-TOP").style.stroke = "transparent";
    document.getElementById("S2-TOP").style.fill = "none";

    document.getElementById("S2-BOT").style.stroke = "transparent";
    document.getElementById("S2-BOT").style.fill = "none";

    document.getElementById("S2-L1").style.stroke = "cornflowerblue";
    document.getElementById("S2-L1").style.fill = "blue";

    document.getElementById("S2-R1").style.stroke = "cornflowerblue";
    document.getElementById("S2-R1").style.fill = "blue";

    document.getElementById("S2-R2").style.stroke = "cornflowerblue";
    document.getElementById("S2-R2").style.fill = "blue";

    document.getElementById("S2-MID").style.stroke = "cornflowerblue";
    document.getElementById("S2-MID").style.fill = "blue";

}
else if (seconds[1] == "5") {
    
    document.getElementById("S2-L2").style.stroke = "transparent";
    document.getElementById("S2-L2").style.fill = "none";

    document.getElementById("S2-R1").style.stroke = "transparent";
    document.getElementById("S2-R1").style.fill = "none";

    document.getElementById("S2-L1").style.stroke = "cornflowerblue";
    document.getElementById("S2-L1").style.fill = "blue";

    document.getElementById("S2-R2").style.stroke = "cornflowerblue";
    document.getElementById("S2-R2").style.fill = "blue";

    document.getElementById("S2-TOP").style.stroke = "cornflowerblue";
    document.getElementById("S2-TOP").style.fill = "blue";

    document.getElementById("S2-BOT").style.stroke = "cornflowerblue";
    document.getElementById("S2-BOT").style.fill = "blue";

    document.getElementById("S2-MID").style.stroke = "cornflowerblue";
    document.getElementById("S2-MID").style.fill = "blue";

}

else if (seconds[1] == "6") {
    document.getElementById("S2-TOP").style.stroke = "transparent";
    document.getElementById("S2-TOP").style.fill = "none";

    document.getElementById("S2-R1").style.stroke = "transparent";
    document.getElementById("S2-R1").style.fill = "none";

    document.getElementById("S2-L1").style.stroke = "cornflowerblue";
    document.getElementById("S2-L1").style.fill = "blue";

    document.getElementById("S2-L2").style.stroke = "cornflowerblue";
    document.getElementById("S2-L2").style.fill = "blue";

    document.getElementById("S2-R2").style.stroke = "cornflowerblue";
    document.getElementById("S2-R2").style.fill = "blue";

    document.getElementById("S2-BOT").style.stroke = "cornflowerblue";
    document.getElementById("S2-BOT").style.fill = "blue";

    document.getElementById("S2-MID").style.stroke = "cornflowerblue";
    document.getElementById("S2-MID").style.fill = "blue";

}

else if (seconds[1] == "7") {
    document.getElementById("S2-L1").style.stroke = "transparent";
    document.getElementById("S2-L1").style.fill = "none";

    document.getElementById("S2-L2").style.stroke = "transparent";
    document.getElementById("S2-L2").style.fill = "none";

    document.getElementById("S2-BOT").style.stroke = "transparent";
    document.getElementById("S2-BOT").style.fill = "none";

    document.getElementById("S2-MID").style.stroke = "transparent";
    document.getElementById("S2-MID").style.fill = "none";

    document.getElementById("S2-R1").style.stroke = "cornflowerblue";
    document.getElementById("S2-R1").style.fill = "blue";

    document.getElementById("S2-R2").style.stroke = "cornflowerblue";
    document.getElementById("S2-R2").style.fill = "blue";

    document.getElementById("S2-TOP").style.stroke = "cornflowerblue";
    document.getElementById("S2-TOP").style.fill = "blue";
}

else if (seconds[1] == "8") {
    document.getElementById("S2-L1").style.stroke = "cornflowerblue";
    document.getElementById("S2-L1").style.fill = "blue";

    document.getElementById("S2-L2").style.stroke = "cornflowerblue";
    document.getElementById("S2-L2").style.fill = "blue";

    document.getElementById("S2-R1").style.stroke = "cornflowerblue";
    document.getElementById("S2-R1").style.fill = "blue";

    document.getElementById("S2-R2").style.stroke = "cornflowerblue";
    document.getElementById("S2-R2").style.fill = "blue";

    document.getElementById("S2-TOP").style.stroke = "cornflowerblue";
    document.getElementById("S2-TOP").style.fill = "blue";

    document.getElementById("S2-BOT").style.stroke = "cornflowerblue";
    document.getElementById("S2-BOT").style.fill = "blue";

    document.getElementById("S2-MID").style.stroke = "cornflowerblue";
    document.getElementById("S2-MID").style.fill = "blue";
}

else if (seconds[1] == "9") {

    document.getElementById("S2-L2").style.stroke = "transparent";
    document.getElementById("S2-L2").style.fill = "none";

    document.getElementById("S2-BOT").style.stroke = "transparent";
    document.getElementById("S2-BOT").style.fill = "none";

    document.getElementById("S2-L1").style.stroke = "cornflowerblue";
    document.getElementById("S2-L1").style.fill = "blue";

    document.getElementById("S2-R1").style.stroke = "cornflowerblue";
    document.getElementById("S2-R1").style.fill = "blue";

    document.getElementById("S2-R2").style.stroke = "cornflowerblue";
    document.getElementById("S2-R2").style.fill = "blue";

    document.getElementById("S2-TOP").style.stroke = "cornflowerblue";
    document.getElementById("S2-TOP").style.fill = "blue";

    document.getElementById("S2-MID").style.stroke = "cornflowerblue";
    document.getElementById("S2-MID").style.fill = "blue";

}
}, 1000);
                    

