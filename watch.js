function showTime(){
  var date = new Date();
  var h = date.getHours(); 
  var m = date.getMinutes(); 
  var s = date.getSeconds(); 
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("time").innerHTML= time;
  document.getElementById("time").innerHTML = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();
function showDate()
{
  var x = new Date()
var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
  console.log(x1);
  document.getElementById("date").innerHTML=x1;
}
showDate();
// function message()
// {
  
//     var xhttp=new XMLHttpRequest();
//     xhttp.onreadystatechange=function(){
//       if(this.readyState==4 && this.status==200)
//       {
        
//         document.getElementById("change").innerHTML=this.responseText;
//         // myfunction();
//       }
//     }
//     xhttp.open("GET","message.html",true)
//     xhttp.send();
  
// }
// 