//assignment 5 Q-1


let products = ["Pen", "Notebook", "Pencil", "Scale"];

products.forEach(function(product) {
  console.log(product);
});


//assignment 5 Q-2

//Formula: F = C × 1.8 + 32

let celsiusTemps = [0, 10, 20, 30, 40];

let fahrenheitTemps = celsiusTemps.map(function(c) {
  return c * 1.8 + 32;
});

console.log(fahrenheitTemps);


//assignment 5 Q-3

let words = ["sun", "planet", "sky", "galaxy", "star"];

let longWords = words.filter(function(word) {
  return word.length > 4;
});

console.log(longWords);
