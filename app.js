var triangle = "";

for (var i = 1; i < 8; i++) {
    for (var j = 1; j <= i; j++) {
        triangle += "*"
    }
    triangle += "\n"
}
console.log(triangle)


var triangle = "";

for (var i = 1; i < 8; i++) {
    for (var j = 1; j <=8-i; j++) {
        triangle += "*"
    }
    triangle += "\n"
}
console.log(triangle)


let n = 6;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 1; j <= n - i; j++) {
      string += " ";
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);