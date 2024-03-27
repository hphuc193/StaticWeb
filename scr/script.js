function displayTime() {
    let now = new Date();
    let hours = now.getHours()
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    let timeString = hours + ":" + (minutes) + ":" + seconds;
    document.getElementById("clock").innerHTML = timeString;
    
    if (hours === 0 && minutes === 0) {
      document.getElementById("numContainer").innerHTML = "20";
      document.getElementById("numContainer").style.opacity = 1;
    }
  }
  
  let updateTime = setInterval(displayTime, 1000);
  displayTime();
  
