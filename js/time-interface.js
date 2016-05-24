var currentTime;

function incrementSeconds () {
  currentTime = moment().format('H:mm');
  $('#time').html(currentTime);
  setTimeout(incrementSeconds, 1000);
}

function timeCheck () {
  if (currentTime === time){
    $('.alarmDisplay').text('be alarmed!!');
    flash();
  }
  setTimeout(timeCheck, 1000);
}

function getRandomColor () {
  var hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}

function flash () {
  document.body.style.backgroundColor = getRandomColor();
  setTimeout(flash, 700);
}
