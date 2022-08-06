function promisifiedFunc()
{
    return new Promise(function(resolve,reject)
    {
        let a=2;
        let b=1;
        if(a==b)
        {
            resolve("Equal");
        }
        else
        {
            reject("Unequal");
        }

    })
}

let somePromise=promisifiedFunc();
console.log(somePromise);
somePromise.then(function(x)
{
    console.log(x);
})

 