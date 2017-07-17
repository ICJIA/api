
var random = require("random-js")();

// String length = 58 (no zero, no uppercase 'O', no 'I', no 'l')
var alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";

//console.log(alphabet.length)
var base = alphabet.length;

// Encode to Base58
var encodeSeed = function (num){
  var encoded = '';
  while (num){
    var remainder = num % base;
    num = Math.floor(num / base);
    encoded = alphabet[remainder].toString() + encoded;
  }
  return encoded;
}


//Decode to Base10
var decodeSeed = function (str){
  var decoded = 0;
  while (str){
    var index = alphabet.indexOf(str[0]);
    var power = str.length - 1;
    decoded += index * (Math.pow(base, power));
    str = str.substring(1);
  }
  return decoded;
}


// Generate random seed ID
var generateSeed = function  () {
  var seed = random.integer(1, 9999999)
  return seed
};


module.exports.encodeSeed = encodeSeed;
module.exports.decodeSeed = decodeSeed;
module.exports.generateSeed = generateSeed;
