// Set the date we're counting down to
var countDownDate = new Date("Jun 30, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

// Get the current date and time
  var now = new Date().getTime();

// Calculate the distance between now and the countdown date
  var distance = countDownDate - now;

// Calculate days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the countdown
  document.getElementById("days").innerHTML = days + "d";
  document.getElementById("hours").innerHTML = hours + "h";
  document.getElementById("minutes").innerHTML = minutes + "m";
  document.getElementById("seconds").innerHTML = seconds + "s";
// If the countdown is finished, display text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "EXPIRED";
    document.getElementById("hours").innerHTML = "";
    document.getElementById("minutes").innerHTML = "";
    document.getElementById("seconds").innerHTML = "";
  }
}, 1000);