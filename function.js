function write(obj, sentence, i, cb) {
  if (i != sentence.length) {
    setTimeout(function () {
      i++
      obj.innerHTML = sentence.substr(0, i + 1) + ' <em aria-hidden="true"></em>';
      write(obj, sentence, i, cb)
    }, 50)
  } else {
    cb()
  }
}

function erase(obj, cb, i) {
  var sentence = obj.innerText
  if (sentence.length != 0) {
    setTimeout(function () {
      sentence = sentence.substr(0, sentence.length - 1)
      obj.innerText = sentence
      erase(obj, cb)
    }, 18 / (i * (i / 10000000)))
  } else {
    obj.innerText = " "
    cb()
  }
}
var typeline = document.querySelector("#typeline")

function writeerase(obj, sentence, time, cb) {
  write(obj, sentence, 0, function () {
    setTimeout(function () {
      erase(obj, cb)
    }, time)
  })
}

var sentences = [
  " Luna.",
  "a Software Engineer.",
  "a Web Developer.",
  "a Web Designer. "
]

var counter = 0

function loop() {
  var sentence = sentences[counter % sentences.length]
  writeerase(typeline, sentence, 3000, loop)
  counter++
}

loop()