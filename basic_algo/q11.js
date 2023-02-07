function binarySearch(str,value)
{
    let start=0;
    let end=str.length-1;

    while(start<=end)
    {
        let mid=(start+end)/2;

        if(str[mid]===value)
        {
            return mid;
        }
        else if(str[mid]<value)
        {
            start=mid+1;
        }
        else{
            end=mid-1;
        }

    }
    return -1;
}
  let str=[11,12,13,14,15,16,17,18,19,20,21];
  console.log(binarySearch(str,13));