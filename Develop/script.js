let currentDayEl = $("#currentDay");
let textarea9 = $('#txtarea9');
let textarea10 = $('#txtarea10');
let textarea11 = $('#txtarea11');
let textarea12 = $('#txtarea12');
let textarea1 = $('#txtarea1');
let textarea2 = $('#txtarea2');
let textarea3 = $('#txtarea3');
let textarea4 = $('#txtarea4');
let textarea5 = $('#txtarea5');




$(function () {

    
  function currentDay() {
    let theDate = dayjs().format('dddd, MMMM D');
    currentDayEl.text(theDate);
  }
  currentDay();
  
  function savedEntry() {
  
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
  
  }
  
  
  savedEntry();
  
  var currentHour = dayjs().hour();
  newDate = dayjs().hour();
  function plannerColor() {
    if (currentHour.isSame(dayjs().hour(9))){
      hours.nineAm.addClass('.present');
      hours.nineAm.remove('.past');
    }
    else if (currentHour.isAfter(dayjs().hour(9))){
      hours.nineAm.addClass('.past');
      hours.nineAm.remove('.present');
    }
    else if (currentHour.isBefore(dayjs().hour(9))){
      hours.nineAm.addClass('.future');
      hours.nineAm.remove('.past');
    }
   }
   
  console.log(currentHour);
});
