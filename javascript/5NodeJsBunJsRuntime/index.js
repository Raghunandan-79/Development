/* 
    Assignment #1 - Create a cli
    Create a command line interface that lets the user specify a file path and the
    nodejs process counts the number of words inside it

    Input - node index.js /Users/Raghu/file.txt
    Output - You have 10 words in this file

    Library to use:  https://www.npmjs.com/package/commander
*/

const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to count words in a file')
  .version('0.8.0');

program
  .argument('<file>', 'file to count words in')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err.message);
        return;
      }

      const words = data.trim().split(/\s+/).filter(Boolean).length;
      console.log(`You have ${words} words in this file`);
    });
  });

program.parse();
