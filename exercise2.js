function fpb(angka1, angka2) {
  // you can only write your code here!
  var result = '';
  for ( var i = 1 ; i <= angka1; i++) {
    if (angka1 % i == 0 && angka2% i == 0) {
      result = i
    }
  }
  return result;
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
console.log(fpb(60, 120));

 // var terbesar = '';
  //   if (angka1 < angka2) {
  //     terbesar = angka2
  //   } else if (angka2 < angka1) {
  //     terbesar = angka1
  //   }
  //   // return terbesar;
  //   var pembagi = [];
  //   var pembagi2 = [];
  //   for (var i = 0 ; i < terbesar; i++) {
  //     if (angka1 % i == 0) {
  //      pembagi.push(i) 
  //     } else if (angka2 % i == 0) {
  //       pembagi2.push(i)
  //     }
  //   }

  //   return pembagi + ' ' +pembagi2;