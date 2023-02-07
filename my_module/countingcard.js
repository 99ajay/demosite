function chunkArrayInGroups(arr, size) {
let array=[];
let finalarray=[];
let count=0;
for(let i=0;i<arr.length;i++)
{
  if(count<size)
  {
  array.push(arr[i]);
  count++;
  }
  else
  {
    finalarray.push(array);
    count=0;
    array=[];
    
  }
}
if(arr.length>0)
{
  finalarray.push(arr);
}


  
  return finalarray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);