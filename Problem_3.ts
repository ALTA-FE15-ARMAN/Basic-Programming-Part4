function isPrime(num: number): boolean {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function primeSegiEmpat(wide: number, high: number, start: number): void {
    let angkaAwal = start;
    let JumlahBil = 0;
  
    for (let i = 0; i < high; i++) {
      let baris = "";
      for (let j = 0; j < wide; j++) {
        while (!isPrime(angkaAwal)) {
          angkaAwal++;
        }
        baris += angkaAwal + " ";
        JumlahBil += angkaAwal;
        angkaAwal++;
      }
      console.log(baris);
    }
    console.log(JumlahBil);
    
  }

  primeSegiEmpat(2, 3, 13);
  primeSegiEmpat(5, 2, 1);
  