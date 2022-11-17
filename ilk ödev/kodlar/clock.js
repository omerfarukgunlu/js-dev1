let person = window.prompt("Adınzı Giriniz");

if (person != null) {
  document.getElementById("myName").innerHTML = person
}
function clock(){
  var daylist = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]; 
  var today = new Date();
  var hour = today.getHours();
  console.log(hour)
  var minute = today.getMinutes();
  console.log(minute)
  var second = today.getSeconds();
  var day = today.getDay();

  document.querySelector("#myClock").innerHTML = `${hour}:${minute}:${second} ${daylist[day]}`
};
setInterval(clock);
