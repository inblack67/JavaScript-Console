// count
console.count('Render times => ');
console.count('Render times => ');

const json = [
  {
    cmd: 'table',
    desc: 'damn cool',
  },
  {
    cmd: 'count',
    desc: 'useRef?',
  },
  {
    cmd: 'group',
    desc: 'heirarchy',
  },
  {
    cmd: 'trace',
    desc: 'backtracking',
  },
  {
    cmd: 'assert',
    desc: 'panic if false',
  },
];

// table
console.table(json);
console.table(json, 'cmd'); // keys to include

// assert
console.assert(isNaN(1), 'Its a number!');

// time
console.time('O(n)');
for (let i = 0; i < 10; i++) {
  //   console.log(i);
}
console.timeEnd('O(n)');

// group => tree structure o/p
const printArr = (arr, index = 0) => {
  if (index === arr.length) {
    return;
  }
  console.group(arr[index]);
  printArr(arr, index + 1);
  console.groupEnd();
};

printArr([1, 2, 3, 4, 5]);

// trace => call stack tour
const greet = () => {
  console.trace();
  console.log('hello');
};
greet();
