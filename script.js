bar1 = document.querySelectorAll(".comp-bar")
console.log(bar1)
let evmin = bar1[0]
let evhour = bar1[1]
let evtmr = bar1[2]
let evmon = bar1[3]
let evchr = bar1[4]
let evapr = bar1[5]
let evleap = bar1[6]


function updateMin(){
    const d = new Date();
    let seconds = d.getSeconds()
    evmin.style.width = (seconds/0.6).toString() + "%"
}

function updateHour(){
    const d = new Date();
    let minutes = d.getMinutes()
    evhour.style.width = (minutes/0.6).toString() + "%"
}

setInterval(() => {
    updateMin()
    updateHour()
}, 1000);