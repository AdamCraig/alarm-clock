var currentTime;

incrementSeconds = function() {
  currentTime = moment().format('H:mm');
  $('#time').html(currentTime);
  setTimeout(incrementSeconds, 1000);
}

timeCheck = function() {
  if (currentTime === time){
    $('.alarmDisplay').text('be alarmed!!');
  }
  setTimeout(timeCheck, 1000);
}

$(document).ready(function() {
    incrementSeconds();
    timeCheck();

    $('#alarmset').submit(function(event){
      event.preventDefault();
      time = $('#user_time').val();
      console.log(time);
      console.log(currentTime);
      $('.display').text('Alarm is set for ' + time + '.');
    });

});
