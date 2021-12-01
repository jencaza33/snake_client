const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', () => {
    console.log('oh no to slow!');
  });
  conn.on('connect', () => {
    console.log('Welcome to the party');
  });
  conn.on('connect', () => {
    conn.write('Name: JeN');
  });

  return conn;

};

module.exports = { connect };