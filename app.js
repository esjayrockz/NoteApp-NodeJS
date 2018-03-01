console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
//var res = notes.addNote();
var sum = notes.add(10.2, -2);
console.log(sum);
// var user = os.userInfo();
//console.log(user);
// fs.appendFile('greetings.txt',' Hello '+ user.username+'! Your age is '+ notes.age + '.', err => {
// if(err){
//   console.log('Unable to write file');
// }
//
// });
//
// fs.appendFile('greetings.txt',` Your uid is ${os.userInfo().username}!`, err => {
// if(err){
//   console.log('Unable to write file');
// }
//
// });
