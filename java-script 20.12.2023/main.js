"use strict";
// let but = document.querySelector(".but");
// let inp1 = document.querySelector(".inp1");
// let inp2 = document.querySelector(".inp2");
// let text = document.querySelector(".text");
// inp1.addEventListener("keypress", function (event) {
//   console.log(event.target.tagName.toLowerCase());
// });

// but.disabled = true;
// inp.addEventListener("blur", function () {
//   if (inp.value == "qwerty") {
//     inp.disabled = true;
//     }

//   text.textContent = this.value;
// });

// let but = document.querySelector(".but");
// let div = document.querySelector("div");
// but.addEventListener("dblclick", function () {
//   let text = document.createElement("h3");

//   text.textContent = "salom";
//   div.appendChild(text);
// });

// but.addEventListener("mouseout", function (event)
// {
//     // mouseover
//     console.log(event.ctrlKey);
//   let text = document.createElement("h1");
//     if (event.ctrlKey) {
//         text.innerHTML = "ctrl bilan bosildi";
//       }
//       if (event.altKey)
//       {
//           text.innerHTML = "alt bilan bosildi";
//       }
//   text.textContent += "mouseover borildi";
//   div.appendChild(text);
//   console.log("hover");
// });

// let inp1 = document.querySelector(".inp1");
// let div = document.querySelector("div");
// inp1.addEventListener("keypress", function (event) {
//   let h3 = document.createElement("h3");
//   if (event.code == "Enter") {
//     h3.textContent += "enter bosildi";
//   }
//   div.appendChild(h3);
// });

// let text = document.querySelector(".text");
// let start=document.querySelector('.but')
// let stop=document.querySelector('.stop')
// let block1 = document.querySelector('.block1');
// let data = new Date()
// let hours=data.getHours()
// let minutes=data.getMinutes()
// let secondes=data.getSeconds()
// block1.innerHTML=addzero(hours)+":"+addzero(minutes)+":"+addzero(secondes)

// function addzero(num) {
//     if (num >= 0 && num <= 9) {
//         return '0'+num
//     }
//     return num
// }
// console.log();

// let i=0
// let timerId
// start.addEventListener('click', function(){
//      timerId=setInterval(() => {
//         i++
//         text.textContent=i
//     }, 1000);
// })

// stop.addEventListener('click', function(){
//     clearInterval(timerId)
// })

// setInterval(()=>{
//     i++
//     text.textContent = i

// }, 1000)

// setInterval(function(){
//     console.log('hello wolrd');
// }, 1000)

// setInterval(func, 2000)

// function func(){
//     text.textContent+='hello world   '
// }

// setInterval(function(){
//   text.textContent = i;
// }, 1000)

// but.addEventListener('click', function (event) {
// })
// stop.addEventListener('click', function() {
//   clearInterval(timerId)
// })

// let timerId;
// inp1.addEventListener('keypress', function (event) {
//   let i = inp1.value
//   if(event.code == "Enter") {
//     timerId = setInterval(() => {
//       i++
//       inp1.value = i;
//         if(i == 10) {
//           clearInterval(timerId);
//           text.textContent = "vaqt tugadi";
//       }
//     }, 1000);
//   }
// })

// let timerId;
// let i = text.innerHTML;
// timerId = setInterval(() => {
//   i++
//   secondes.innerHTML = i;
//     if(i == 10) {
//       clearInterval(timerId);
//       secondes.innerHTML = i;
//       // inp1.disabled = true;
//       // body.style.background = 'red';
//       // but.style.display = 'none';
//   }
// }, 1000);

// let body = document.querySelector("body");
// let inp1 = document.querySelector(".inp1");
// let stop = document.querySelector(".stop");
// let but = document.querySelector(".but");
// let text = document.querySelector(".text");
// let img1 = document.querySelector(".img1");
// let img2 = document.querySelector(".img2");
// setInterval(() => {
//   let data = new Date();
//   let hours = data.getHours();
//   let minutes = data.getMinutes();
//   let secondes = data.getSeconds();
//   text.textContent =
//     addzero(hours) + ":" + addzero(minutes) + ":" + addzero(secondes);
// }, 1000);

// function addzero(num) {
//   if (num >= 0 && num <= 9) {
//     return "0" + num;
//   }
//   return num;
// }

// setTimeout(() => {
//   img1.style.display = 'none';
//   img2.style.display = 'block';
// }, 10000);

// VANTA.BIRDS({
//   el: "#intro",
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.0,
//   minWidth: 200.0,
//   scale: 1.0,
//   scaleMobile: 1.0,
// });

let body = document.querySelector("body");
let inp1 = document.querySelector(".inp1");
let stop = document.querySelector(".stop");
let but = document.querySelector(".but");
let text = document.querySelector(".text");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let intro = document.querySelector('#intro');
VANTA.RINGS({
  el: "#intro",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  backgroundColor: 0xff0000,
  color: 0x2cff00,
});
setInterval(() => {
  let data = new Date();
  let hours = data.getHours();
  let minutes = data.getMinutes();
  let secondes = data.getSeconds();
  text.textContent = addzero(hours) + ":" + addzero(minutes) + ":" + addzero(secondes);
  if(secondes == 1) {
    text.classList.add("intro");
      VANTA.RINGS({
      el: "#intro",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0xff0000,
      color: 0x2cff00,
    });
  }
  if (secondes == 20) {
    text.classList.add("intro");
    VANTA.HALO({
      el: "#intro",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      baseColor: 0xff00,
      backgroundColor: 0x0,
    });
  }
  if (secondes == 40) {
    text.classList.add("intro");
    VANTA.BIRDS({
      el: "#intro",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
    });
  }
}, 1000);

function addzero(num) {
  if (num >= 0 && num <= 9) {
    return "0" + num;
  }
  return num;
}