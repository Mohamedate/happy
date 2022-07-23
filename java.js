let btn = document.querySelector(".btn-one");
let se = document.querySelector(".two");
console.log(btn);
function shwoSection() { 
se.classList.add("shwo");
}



let user = document.querySelector("[name='user']");
let age = document.querySelector("[name='age']");
let seThree = document.querySelector(".three");
console.log(age)
console.log(user)

document.forms[0].onsubmit = function (e) { 
let userValid = false;
let ageValid = false;
 if (user.value === "shosho" && age.value === "19") { 
     seThree.classList.add("shwo");

 }  else { 
    document.querySelector(".error").classList.toggle("run");
 }


if (userValid === false || ageValid === false) { 
e.preventDefault();
}
}



