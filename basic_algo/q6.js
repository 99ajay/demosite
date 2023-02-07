function findLongestWordLength(str) {
    let count=0;
    let m=0;
     for(let i=0;i<str.length;i++)
     {
         count++;
         if(str[i]==' ')
         {
            if(count-1>m)
            {
                m=count-1;
            }
            count=0;
         }
     }
     if(count>m)
     {
        m=count;
     }
     return m;
    }
    
    console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));