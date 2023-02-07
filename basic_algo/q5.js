function titleCase(str) {
    const y=str.toLowerCase();
    const splitted=y.split(" ");
 
    const addd=[];
 
    let x;
 
    for(let i=0;i<splitted.length;i++)
    {
      x="";
      for(let j=0;j<splitted[i].length;j++)
      {
        if(j==0)
        {
          x=x+splitted[i][j].toUpperCase();
        }
        else
        {
          x=x+splitted[i][j];
        }
 
      }
      addd.push(x);
    }

    return addd.join(" ");
   
    
 }
 
 console.log(titleCase("I'm a little tea pot"));