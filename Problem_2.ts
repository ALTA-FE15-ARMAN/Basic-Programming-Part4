function fibonacci(number: number): number {
    if (number <= 0) {
      return 0; 
    }

    if (number === 1 || number === 2) {
      return 1; 
    }
  
    let der1 = 1;
    let der2 = 1;
  
    for (let i = 3; i <= number; i++) {
      const result = der1 + der2;
      der1 = der2;
      der2 = result;
    }
  
    return der2;
  }
  
  console.log(fibonacci(0)); 
  console.log(fibonacci(2));
  console.log(fibonacci(9)); 
  console.log(fibonacci(10));
  console.log(fibonacci(12));