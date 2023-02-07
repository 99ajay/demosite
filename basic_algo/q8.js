function frankenSplice(arr1, arr2, n) {
    let x=[...arr2];
    x.splice(n,0,...arr1);
    console.log(x);
    console.log(arr2);
    return x;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);