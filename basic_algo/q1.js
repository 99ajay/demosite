function reverseString(str) {
    let x=str.length;
    let s="";
    for(let i=(x-1);i>=0;i--)
    {
      s=s+str[i];
    }
    return s;
  }
  
  reverseString("hello");