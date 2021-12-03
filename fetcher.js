//what we are trying to do:
const fs = require("fs");
let readline = require("readline");
const process = require("process");
const net = require("net");

const request = require("request");

//

let website = process.argv[2];
let file = process.argv[3];

request(website, (error, response, body) => {
  console.log("error:", error);
  console.log("statusCode:", response && response.statusCode);
  // console.log("body:", body);

  fs.appendFile(file, body, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    let answer = body.length;
    console.log(`Downloaded and saved ${answer} bytes to ${file}`);
  });
});
