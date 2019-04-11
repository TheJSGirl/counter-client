import io from 'socket.io-client';

const socket = io('http://localhost:9000');

socket.on('connect', async() => {
    if(window.location.hash) {
        const hashID = window.location.hash.substring(1);
         socket.emit('hello', { hashID });
         socket.on('stats', (hits) => {
             document.getElementById('#hitCounts').innerHTML = hits;
         })
    }
});