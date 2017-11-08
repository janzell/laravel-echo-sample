require('./bootstrap');

// console.log(window.Echo);

window.Echo.channel(`orders`)
.listen('OrderShipped', (e) => {
    console.log(e, 'OrderShipped');
});
