function primeX(number: number): number {
  if (number < 1) {
    return -1; 
  }

  let count = 0;
  let nilai1 = 2;

  while (count < number) {
    let prima = true;

    for (let i = 2; i <= Math.sqrt(nilai1); i++) {
      if (nilai1 % i === 0) {
        prima = false;
        break;
      }
    }

    if (prima) {
      count++;
    }

    if (count === number) {
      return nilai1;
    }

    nilai1++;
  }

  return -1; 
}

console.log(primeX(1));  
console.log(primeX(5)); 
console.log(primeX(10)); 
console.log(primeX(15)); 
console.log(primeX(20)); 
