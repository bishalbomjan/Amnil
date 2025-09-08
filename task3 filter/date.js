//
let d = new Date();
console.log(d.toString());
console.log(d.getFullYear());
console.log(d.toJSON());
console.log(typeof d);
// let myDate = new Date(2025, 1, 21);
let myDate = new Date(2025, 1, 21, 5, 3);
let timeStamp = Date.now();
console.log(timeStamp); //millisecond
console.log(
  myDate.toLocaleString("default", {
    weekday: "long",
  })
);

const now = Date.now();
const birth_date = new Date(1995, 0, 23);
console.log(now);
// give time in millisecond
// const t = birth_date.getDay();
// const t = birth_date.getMonth()
// const t = birth_date.getTime()
const t = birth_date.getTime();
const time = now - t;
// note millisecond starts counting date from 1970 jan 1
// 1 second =1000ms
//time is not date object any more,it is number
console.log(Math.floor(time / (1000 * 60 * 60 * 24 * 365)));
