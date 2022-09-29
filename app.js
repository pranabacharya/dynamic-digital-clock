let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let ampm = document.querySelector('#ampm');
let hh = document.querySelector('#hh');
let mm = document.querySelector('#mm');
let ss = document.querySelector('#ss');

let hh_dot = document.querySelector('.hh_dot');
let mm_dot = document.querySelector('.mm_dot');
let ss_dot = document.querySelector('.ss_dot');



function getLiveTimeinUI(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >=12 ? "PM" : "AM";

    if( h > 12){
        h -= 12;
    }
    h = h < 10 ? "0"+h : h;
    m = m < 10 ? "0"+m : m;
    s = s < 10 ? "0"+s : s;


    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>";
    ampm.innerHTML = am;

    hh.style.strokeDashoffset = 440 -(440 * h)/12;
    mm.style.strokeDashoffset = 440 -(440 * m)/60;
    ss.style.strokeDashoffset = 440 -(440 * s)/60;

    hh_dot.style.transform = `rotate(${h * 30}deg)`;
    mm_dot.style.transform = `rotate(${m * 6}deg)`;
    ss_dot.style.transform = `rotate(${s * 6}deg)`;
}
setInterval(getLiveTimeinUI, 1000);