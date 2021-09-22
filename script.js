(function (window) {
  var names = ["Lemuel", "John", "Jake", "Justin", "Timothy", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);

