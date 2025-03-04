// TCP => RabbitMQ, WebSocket, Kafka, gRPC, FileSystem

// let buff = Buffer.from('NodeJS');

let buff = Buffer.alloc(4);
buff.write('Node')

// console.log(buff);
// console.log(buff[0]);
// console.log('N'.codePointAt(0));
// console.log('N'.charCodeAt(0));
// console.log('N'.codePointAt(0).toString(16));
// console.log(buff.toString());

const buffer = Buffer.from('Azim');
console.log(buffer.toJSON());
console.log(typeof buffer);

const buff2 = Buffer.from([ 65, 122, 105, 109 ], 'hex');
console.log(buff2.toString());
