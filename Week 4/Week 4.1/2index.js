const { program } = require('commander');

program
  .option('-p, --port <number>', 'server port number') // Requires a number
  .option('--trace', 'add extra debugging output') // Just a flag (true/false)
  .option('--ws, --workspace <name>', 'use a custom workspace'); // Accepts a string

program.parse(); // Parses the CLI arguments

const options = program.opts();
console.log(options);
