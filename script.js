let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let date = document.querySelector(".date");

setInterval(()=>{
    let currentTime = new Date();
    let todayDate = currentTime.getDate() + "-" + (currentTime.getMonth()+1) +"-" + currentTime.getFullYear();
    console.log ()
    date.innerHTML = todayDate;
     hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
     min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
     sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},100)

