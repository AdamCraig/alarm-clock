

$(document).ready(function(){

  incrementSeconds();
  timeCheck();

  $('#alarmset').submit(function(event){
    event.preventDefault();
    time = $('#user_time').val();
    $('.display').text('Alarm is set for ' + time + '.');
  });
});
