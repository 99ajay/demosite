// function happy(number) {
  
//     let sumnumber=number;
//     let sum=0;
//     while(sum!=1)
//     {
//       sum=0
//       while(sumnumber)
//       {
//       let rem=sumnumber%10;
//       sum=sum+Math.pow(rem,2);
//       sumnumber=parseInt(sumnumber/10);
   
//       }
//       sumnumber=sum;
//       console.log(sumnumber);
//       if(sumnumber===4)
//       {
//         //return false;
//       }
   
//     }
//     return true;
   
//    }
   
//    console.log(happy(148))



//using set 

function happy(number) {
  
    const newset=new Set();
    let sumnumber=number;
    let sum=0;
    while(sum!=1)
    {
   
      newset.add(sum);
      sum=0
      while(sumnumber)
      {
      let rem=sumnumber%10;
      sum=sum+Math.pow(rem,2);
      sumnumber=parseInt(sumnumber/10);
   
      }
     
      sumnumber=sum;
      if(newset.has(sum))
      {
        return false;
      }
     //  console.log(sumnumber);
   }
    return true;
   
   }
   
   console.log(happy(148))