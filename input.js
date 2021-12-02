const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("Thank you for playing!");
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data',handleUserInput);
  return stdin;
};
setupInput();

module.exports = { setupInput };