const myTime = document.querySelector('#myTime');
const myCurrentDate = document.querySelector('#myDate');


function dateTime() {
    var myDate = new Date();
    var hours = myDate.getHours();
    var minutes = (myDate.getMinutes() > 10) ? myDate.getMinutes() : ("0" + myDate.getMinutes());
    var seconds = (myDate.getSeconds() > 10) ? myDate.getSeconds() : ("0" + myDate.getSeconds());
    var amPm = (myDate.getHours() >= 12) ? 'PM' : 'AM';


    var myHurs = hours + ':' + minutes + ":" + seconds + amPm

    myTime.innerHTML = myHurs;

    if (myDate.getHours() == 0) {
        hours = 12;
    }
    else if (myDate.getHours() > 12) {
        hours = myDate.getHours() - 12
    }
    else (
        myDate.getHours()
    )

    var myCurentDay = ["Saturday", "Sunday", "Tuesday", "Wednesday", "Thursday", "Friday"],

        myMonth = ["January", "February", "March", "April", "May", "June", 'July', "August", 'September', 'October', 'November', "December"],

        day = myDate.getDate();
    var currentDay = myCurentDay[myDate.getDay()] + "," + myMonth[myDate.getMonth()] + ' ' + day

    myCurrentDate.innerHTML = currentDay;
}
dateTime()

setInterval(() => {
    dateTime()
}, 1000)
