const spin = [`|`, '/', '-', '\\', '|','/','-','\\' ];

const spinner = function(spinChar, delay) {
  let time = delay;
  spinChar.forEach((chr, i) => {
    setTimeout(() => {
      process.stdout.write(`\r${chr}    `);
    }, time * i);
  });
};

spinner(spin, 500);

