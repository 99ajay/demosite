//ARRAY.PROTOTYPE

//custom function 

//map

let myarr=[1,2,3,4,5];

let mapedarray=myarr.map(function(x)
{
    return x*x;
})

console.log(myarr);
console.log(mapedarray);

//custom map

function mypollyfillmap(arr,cb)
{
    let newarr=[];

    for(let i=0;i<arr.length;i++)
    {
        newarr.push(cb(arr[i]));
    }
    return newarr;
}


function square(x)
{
    return x*x;
}
console.log(myarr);
console.log(mypollyfillmap(myarr,square));

//filter 

let farr=[2,4,6,7,9,13,14,16];

let evenarr=farr.filter(function(x)
{
    return x%2===0;
})

console.log(farr);
console.log(evenarr);


//customised filter

function mypollyfillfilter(arr,cb)
{
    let filteredarr=[];
    for(let i=0;i<farr.length;i++)
    {
       if(cb(arr[i]))
       {
        filteredarr.push(arr[i]);
       }
    }
    return filteredarr;
}

function iseven(x)
{
    if(x%2===0)
    {
        return x;
    }
}
console.log(mypollyfillfilter(farr,iseven));