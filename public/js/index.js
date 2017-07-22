var socket = io();

socket.on('connect', function(){
    console.log('Connected to server');

    socket.emit('createEmail', {
        to: 'test@test.com',
        text: 'Welcome test'
    });

    socket.emit('createMessage', {
        from: 'Ahamd',
        text: 'Hello server'
    });
});

socket.on('disconnect',function(){
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message){
    console.log('newMessage',message);
})