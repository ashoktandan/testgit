const readline = require('readline');
var a=[];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', (input) => {
  //  console.log(input*2);
  a.push(input);
 // console.log(a)
  if(a.length==2){
      console.log(a[0]*2)
      console.log(a[1])
      rl.close();
  }
  
});