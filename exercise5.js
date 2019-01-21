function ubahHuruf(kata) {
  var kataBaru = '';
  var abjad = "abcdefghijklmnopqrstuvwxyz"
  for (i = 0; i < kata.length; i++) {
    for (j = 0; j < abjad.length; j++) {
      if (abjad[j] === kata[i]) {
        var hurufSetelah = abjad[j + 1]
        kataBaru = kataBaru + hurufSetelah
      }
    }
  }
  return kataBaru;

}


// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu