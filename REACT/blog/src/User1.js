import React from 'react';
// function User1(){
//     return(
//         <div>hello User <br></br>
//             {10*10}  
//         </div>
//     )
// }

// without JSX
function User1(){
    return React.createElement('h1',null,"hello user");
}

export default User1;