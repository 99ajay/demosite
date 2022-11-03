//server creation

//1. http module;
const http=require('http');

const server=http.createServer((req,res)=>{
    console.log('request has been made from the browser to server');
    // console.log(req);
    // console.log(req.method);
    // console.log(req.url);
    
    res.setHeader('Content-Type','text/html');
    res.write('<div><h1>My name is ajay verma </h1><br><h2>a passionate front end developer from the india </h2></div>');
    res.end();

});


//port number host ,callback function
server.listen(3000,'localhost',()=>{
    console.log('server is listening at the port 3000');
});

