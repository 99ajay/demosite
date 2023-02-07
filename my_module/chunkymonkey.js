function chunkArrayInGroups(arr, size) {
    let array=[];
    let finalarray=[];
    let count=0;
    for(let i=0;i<arr.length;i++)
    {
      if(count<=size)
      {
      array.push(arr[i]);
      
      count++;
      if(count==size)
      {
        finalarray.push(array);
        count=0;
        array=[];
        
      }
      
      }
      
    }
    let x=(arr.length)%size;
    let y=[];
    for(let j=(arr.length-x);j<arr.length;j++)
    {
        y.push(arr[j]);
    }
    if(x>0)
    {
      finalarray.push(y);
    }
    
    
      
      return finalarray;
    }
    
    const x=chunkArrayInGroups(["a", "b", "c", "d"], 3);
    console.log(x);