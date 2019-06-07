const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sol(f) {
  return function() {
    rl.on('line', input => {
      if (input == 'exit') {
        rl.question('exit?', answer => {
          if (answer == 'y') rl.pause();
        });
      } else {
        const v = input.split(' ');
        f(...v);
      }
    });
  };
}

function uf(a, b) {
  console.log(a + b);
}

sol(uf)();
