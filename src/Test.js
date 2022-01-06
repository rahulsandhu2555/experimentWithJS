// import React, {useEffect, useState} from 'react';
//
// function Test(props) {
//     const[flag, setFlag] = useState(false)
//     return (
//         <div>
//             test
//             {flag && <Test2/>}
//             <button type='button' onClick={()=> setFlag(!flag)}>click
//             </button>
//
//         </div>
//     );
// }
// function Test2(props) {
//     const[x, setX] = useState('xyz')
//     useEffect(()=>{
//         return () =>{
//             console.log('inside test2')
//             console.log(x)
//         }
//     })
//     return (
//         <div>
//             Test2
//         </div>
//     );
// }
// export default Test;

const arr = [1,1];
console.log(arr.filter(item=>item).length===0?true:false)
