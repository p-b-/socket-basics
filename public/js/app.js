var socket=io();

socket.on('connect',function () {
  console.log('Connected to socket.io server!');
});

socket.on('message', function (message) {
  console.log('New message');
  console.log(message.text);
});

// Handle submission of newmessage
var $form = jQuery('#message-form');

$form.on('submit', function (event) {
  console.log('Submit');
  event.preventDefault();
  var $inp=$form.find('input[name=message]');

  socket.emit('message', {
    text: $inp.val()
  });
  $inp.val('');
});
