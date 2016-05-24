var currentTime = moment().format('hmA');
console.log(currentTime);
$(document).ready(function(){
$('#alarmset').submit(function(event){
  event.preventDefault();
  var hour = $('#hour').val();
  var minute = $('#minute').val();
  var ampm = $('.radio:checked').val();
  var alarmTime = hour + minute + ampm;
  console.log(alarmTime);
});
});
