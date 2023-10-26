let btn = document.querySelector(".btn-one");
let seTwo = document.querySelector(".two");

function shwoSection() { 
seTwo.classList.add("shwo");
}



let user = document.querySelector("[name='user']");
let age = document.querySelector("[name='age']");
let seThree = document.querySelector(".three"),
happyName = document.querySelector(".three .name"),
happyAge = document.querySelector(".three .age"),
box = document.querySelector(".box");


document.forms[0].onsubmit = function (e) { 
let userValid = false;
let ageValid = false;
 if (/[a-z]{3,}/gi.test(user.value) && /[1-9]+/gi.test(age.value)) { 
    happyName.innerHTML = user.value;
    happyAge.innerHTML = `Sweet ${age.value}`;
     seThree.classList.add("shwo");

     setInterval(function() { 
       box.classList.add("effect");
       
     },2500)
     document.getElementById("happySong").play();

 }  else { 
    document.querySelector(".error").classList.toggle("run");
 }


if (userValid === false || ageValid === false) { 
e.preventDefault();
}
}



