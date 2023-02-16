function highlightInput() {
    getElement.style.background="yellow";
}
 function submit(){
alert('done submitted');
 }
 function displayWindowsize(){

var w = window.outerWidth;
var h = window.outerHeight;
var txt = "Windoe size ; width=" + w + ", height = " +h;
document.getElementById("result").innerHTML =txt;


 }
 window.onresize=displayWindowsize;


 var now = new Date();
 var dayofWeek = now.getDay();
 if (dayofWeek == 6){
alert ("Happy Saturday");
 }
else if(dayofWeek== 0){
alert ("oh its Sunday!");
}
else if(dayofWeek== 1){
    alert ("oh its Monday!");
    }
    else if(dayofWeek== 2){
        alert ("oh its Tuesday!");
        }
        else if(dayofWeek== 3){
            alert ("oh its Fcae to face!");
            }
            else if(dayofWeek== 4){
                alert ("oh its Thiursday!");
                }    
                else if(dayofWeek== 5){
                    alert ("oh its Friday!");
                    }                  
else{

alert (Have a nice day!);

}
/*var now = new Date();
switch (new Date().getDay()){
case 0: 
  day = "Sunday";
  break;
  case 1: 
  day = "Monday";
  break;
  case 2: 
  day = "Tuesday";
  break;
  case 3: 
  day = "Wednesday";
  break;
  case 4: 
  day = "Thursday";
  break;
  case 5: 
  day = "Friday";
  break;
  case 6: 
  day = "Saturday";
  break;
}
 

 