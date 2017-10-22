var word = document.getElementById('word');

var index = 0;
var stringToEncode = "Marta, kocham Cię jak wariat, i już nie wyobrażam sobie życia bez Ciebie! ♡♥❤";

setInterval(encodeFull, 100);

function changeWord () {
    if (index < stringToEncode.length) {
        var c = randomChar();
        var str = word.innerHTML;
        str = replaceChar(str, c, index);
        if (c === stringToEncode[index]) {
            index++;
        }
        word.innerHTML = str;
    } else {
        setBackground();
    }
}

function countDifferences () {
  var d = 0;
  var str = word.innerHTML;
  for (var i = 0; i < stringToEncode.length; i++) {
    if (stringToEncode[i] !== str[i]) {
      d++;
    }
  }
  return d;
}

function encodeFull () {
  var diff = countDifferences();
  if (diff < 6) {
    word.innerHTML = stringToEncode;
  }
  var str = word.innerHTML;
  for (var i = 0; i < stringToEncode.length; i++) {
    var c = randomChar();
    if(str[i] === stringToEncode[i]) {
      continue;
    } else {
      str = replaceChar(str, c, i);
    }
  }
  word.innerHTML = str;
}

function setBackground () {
    document.body.style.background = "pink";
}

function replaceChar (str, c, i) {
    return str.substr(0, i) + c + str.substr(i+1);
}

function randomChar() {
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdeęćfghijklmnopqrstuvwxyz0123456789!,ż:) ♡♥❤♡♥❤♡♥❤♡♥❤";
  return possible.charAt(Math.floor(Math.random() * possible.length));
}
