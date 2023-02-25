// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let currentDayEl = $("#currentDay");
let saves = 0;
let pastHours = $(".past");
let presentHour = $("present");
let futureHour = $("future");
let userInput = document.querySelector(".description");
let saveHour9 = document.querySelector("#hour-9");

let textarea9 = $('#txtarea9');
let textarea10 = $('#txtarea10');
let textarea11 = $('#txtarea11');
let textarea12 = $('#txtarea12');
let textarea1 = $('#txtarea1');
let textarea2 = $('#txtarea2');
let textarea3 = $('#txtarea3');
let textarea4 = $('#txtarea4');
let textarea5 = $('#txtarea5');



function currentDay() {
  let theDate = dayjs().format('dddd, MMMM D');
  currentDayEl.text(theDate);
}
currentDay();

// saveInput.addEventListener("click", function(event) {
// event.preventDefault();  
// })


// localStorage.setItem("", "");
// console.log(localStorage.getItem(""))

// localStorage.clear

// let saveInput = document.querySelector(".saveBtn");


$("#btn9").on('click',()=> {
  console.log('txtarea9', textarea9.val());
  localStorage.setItem("textarea9", textarea9.val() );
})


$("#btn10").on('click',()=> {
  console.log('txtarea10', textarea10.val());
  localStorage.setItem("textarea10", textarea10.val() );
})


$("#btn11").on('click',()=> {
  console.log('txtarea11', textarea11.val());
  localStorage.setItem("textarea11", textarea11.val() );
})


$("#btn12").on('click',()=> {
  console.log('txtarea12', textarea12.val());
  localStorage.setItem("textarea12", textarea12.val() );
})


$("#btn1").on('click',()=> {
  console.log('txtarea1', textarea1.val());
  localStorage.setItem("textarea1", textarea1.val() );
})


$("#btn2").on('click',()=> {
  console.log('txtarea2', textarea2.val());
  localStorage.setItem("textarea2", textarea2.val() );
})


$("#btn3").on('click',()=> {
  console.log('txtarea3', textarea3.val());
  localStorage.setItem("textarea3", textarea3.val() );
})


$("#btn4").on('click',()=> {
  console.log('txtarea4', textarea4.val());
  localStorage.setItem("textarea4", textarea4.val() );
})


$("#btn5").on('click',()=> {
  console.log('txtarea5', textarea5.val());
  localStorage.setItem("textarea5", textarea5.val() );
})


// console.log(localStorage.getItem("textarea9"));


$(function () {

    

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // TODO: Add code to display the current date in the header of the page.
});
