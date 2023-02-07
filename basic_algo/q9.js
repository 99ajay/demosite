// //let x=["Ajay","Verma"];
// let x="AjayVerma"
// console.log(x.toLowerCase());

// let str="abscjdjud4256/?!%";

// let x='';
// for(let i=0;i<str.length;i++)
// {
//     if(str[i]>='a' && str[i]<='z')
//     {
//         x=x+str[i];
//     }
// }
// console.log(x);


 


function palindrome(str) {

    let x='';
    for(let i=0;i<str.length;i++)
    {
      if((str[i]>='a' && str[i]<='z') || (str[i]>='A' && str[i]<='Z') || (str[i]>='0' && str[i]<='9'))
      {
        x=x+str[i];
      }
    }
    let y=x.toLowerCase().split('');

   // console.log(y);
    let start=0;
    let end=y.length-1;
    while(start<end)
    {
      if(y[start]!=y[end])
      {
        return false;
      }
      start++;
      end--;
    }
    
    return true;
    
    
    
     
    }
    
    console.log(palindrome("My age is 0, 0 si ega ym."));