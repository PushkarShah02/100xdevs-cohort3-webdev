const { Command } = require('commander');
const program = new Command();

program
  .command('greet')
  .description('Greet a user')
  .argument('<name>', 'User name') // Required argument
  .action((name) => {
    console.log(`Hello, ${name}!`);
  });

program.parse();
