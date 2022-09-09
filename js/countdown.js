
// Talent day start day
var countDownDate = new Date("Oct 12, 2022 09:00:00").getTime();
// var countDownDate = new Date("Sep 9, 2022 15:53:30").getTime();

// From w3 schools (https://www.w3schools.com/howto/howto_js_countdown.asp)
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Zero pad
    days = String(days).padStart(2, '0')
    hours = String(hours).padStart(2, '0')
    minutes = String(minutes).padStart(2, '0')
    seconds = String(seconds).padStart(2, '0')
  
    // Display inside the "time-box" divs
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  
    // If the count down is finished, state it has started
    if (distance < 0) {
      clearInterval(x);
      var item = document.getElementById("countdown");
      item.innerHTML = "Talent Day has Started!";
      item.style.display = 'block';
    }
}, 1000);