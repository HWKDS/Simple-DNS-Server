const dgram = require('dgram');
const client = dgram.createSocket('udp4');
const domain = 'example2.com';
client.send(domain, 12345, 'localhost');
client.on('message', (msg) => {
    console.log('Domain: ', domain, '\nIP: ', msg.toString());
    client.close();
});