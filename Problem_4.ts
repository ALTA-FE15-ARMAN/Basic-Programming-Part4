function maxSequence(arr: number[]): number {
    let nilai1 = arr[0];
    let nilai2 = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      nilai2 = Math.max(arr[i], nilai2 + arr[i]);
      nilai1 = Math.max(nilai1, nilai2);
    }
  
    return nilai1;
  }
  
  console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); 
  console.log(maxSequence([-2, -5, 6, -2, -3, 1, 5, -6])); 
  console.log(maxSequence([-2, -3, 4, -1, -2, 1, 5, -3])); 
  console.log(maxSequence([-2, -5, 6, -2, -3, 1, 6, -6])); 
  console.log(maxSequence([-2, -5, 6, 2, -3, 1, 6, -6])); 