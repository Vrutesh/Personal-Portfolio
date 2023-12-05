//gototop btn

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#E50914 ${scrollValue}%, #fff ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

//form Validation

let name_validation;
let email_validation;
let number_validation;
let message_validation;

document.querySelector(".sendsms").addEventListener('click', ()=>{
  //name validation
  const name = document.getElementById("name").value;
  if (name == "") {
    document.getElementById("name").style.border = "3px solid red";
    name_validation = "Please Enter name first";
  } else if (name.length <= 2) {
    name_validation = "Name is too short. Please enter more than 2 characters.";
    document.getElementById("name").style.border = "3px solid red";
  } else if (name.length >= 15) {
    name_validation = "Name is too long. Please enter less than 15 characters.";
    document.getElementById("name").style.border = "3px solid red";
  } else {
    document.getElementById("name").style.border = "3px solid springgreen";
    name_validation = "";
  }
  document.getElementById("name_error").innerHTML = name_validation;

  //email validation
  const email = document.getElementById("email").value;
  if (email == "") {
    email_validation = "Please Enter a valid email";
    document.getElementById("email").style.border = "3px solid red";
  } else {
    email_validation = "";
    document.getElementById("email").style.border = "3px solid springgreen";
  }
  document.getElementById("email_error").innerHTML = email_validation;

  // phone validation

  const phone_no = document.getElementById("phone_no").value;
  if (phone_no == "") {
    number_validation = "Please Enter a valid Phone Number";
    document.getElementById("phone_no").style.border = "3px solid red";
  } else if (phone_no.length > 10) {
    number_validation = "Please Enter a valid Phone Number";
    document.getElementById("phone_no").style.border = "3px solid red";
  } else {
    number_validation = "";
    document.getElementById("phone_no").style.border = "3px solid springgreen";
  }
  document.getElementById("number_error").innerHTML = number_validation;

  //message validation

  const message = document.getElementById("message").value;
  if (message == "") {
    message_validation = "Write a Message";
    document.getElementById("message").style.border = "3px solid red";
  } else {
    message_validation = "";
    document.getElementById("message").style.border = "3px solid springgreen";
  }
  document.getElementById("message_error").innerHTML = message_validation;
})

//sidebar hamburger

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");

  hamburger.addEventListener("click", function () {
    if (sidebar.style.width === "0px" || sidebar.style.width === "") {
      sidebar.style.width = "150px"; // Adjust the width as needed
    } else {
      sidebar.style.width = "0";
    }
  });
});

//dark mode btn

const darkModeToggle = document.getElementById("dark-mode-toggle-checkbox");
let body = document.body;
let btn = document.getElementById("cvbtn1");

darkModeToggle.addEventListener("change", () => {
  if (darkModeToggle.checked) {
    body.classList.add("dark-mode");
    btn.style.backgroundColor = "white";
  } else {
    body.classList.remove("dark-mode");
  }
});





