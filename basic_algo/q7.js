function titleCase(str) {
    let x=str.toLowerCase().split('');
    console.log(x);
    let y='';
    y=y+x[0].toUpperCase();
    for(let i=1;i<x.length;i++)
    {
       
       if(str[i]==' ')
       {
         x[i+1]=x[i+1].toUpperCase();
       }
       y=y+x[i];
  
    }
    return y;
  }
  
  console.log(titleCase("I'm a little tea pot"));