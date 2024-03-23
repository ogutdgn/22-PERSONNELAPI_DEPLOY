"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */


//? MORGAN LOGGING
// https://expressjs.com/en/resources/middleware/morgan.html
// https://github.com/expressjs/morgan
//? $ npm i morgan

const morgan = require("morgan");

//? WRITE TO LOG FILE
// const fs = require("node:fs");
// app.use(morgan("combined", {
//     stream: fs.createWriteStream("./access.log", { flags: "a+" })
// }))

//? WRITE TO FILE DAY BY DAY

const fs = require("node:fs");

const now = new Date();
// console.log(typeof now, now);

const today = now.toISOString().split("T")[0]
// console.log(typeof today, today); // 2024-03-21

module.exports = morgan("combined", {
    stream: fs.createWriteStream(`./logs/${today}.log`, { flags: "a+" })
})