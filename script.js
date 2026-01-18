// main = document.querySelector(".bar-contain")
// main.style.display = 'none'

bar1 = document.querySelectorAll(".comp-bar")
console.log(bar1)
let evmin = bar1[0]
let evhour = bar1[1]
let evtmr = bar1[2]
let evmon = bar1[3]
let evchr = bar1[4]
let evapr = bar1[5]
let evleap = bar1[6]

textR = document.querySelectorAll(".event-textR")
let txmin = textR[0]
let txhour = textR[1]
let txtmr = textR[2]
let txmon = textR[3]
let txchr = textR[4]
let txapr = textR[5]
let txleap = textR[6]
let startbtn = document.getElementById("start")

function updateMin(){    
    const d = new Date();
    let seconds = d.getSeconds()
    evmin.style.width = (seconds/0.6).toString() + "%"
    txmin.innerHTML = (60-seconds).toString() + '</span>' + " Seconds Left"
    console.log(txmin.innerHTML)
}

function updateHour(){
    const d = new Date();
    let minutes = d.getMinutes()
    evhour.style.width = (minutes/0.6).toString() + "%"
    txhour.innerHTML = (60-minutes).toString() + " Minutes Left"
}

function updateTmr(){
    const d = new Date();
    let minutes = d.getMinutes()
    let hours = d.getHours()
    evtmr.style.width = ((hours*60 + minutes)/14.4).toString() + "%"
    txtmr.innerHTML = (24-hours).toString() + " Hours Left"
}

let start = false

startbtn.addEventListener('click', function(){
    startbtn.style.scale = 0.08;
    startbtn.style.top = "-6vh";
    startbtn.style.backgroundColor = "#DEDEDE"
    startbtn.style.border = "0.5rem #DEDEDE solid"
    console.log(startbtn.style.scale)
})

setInterval(() => {
    updateMin()
    updateHour()
    updateTmr()
}, 1000);