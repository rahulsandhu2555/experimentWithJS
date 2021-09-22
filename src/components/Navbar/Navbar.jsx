import React from "react";
import {useHistory} from "react-router-dom";
function Navbar() {
    const history = useHistory();
  return (
    <div>
        <button onClick={()=>history.push('/home')}>Home</button>
        <button onClick={()=>history.push('/ds')}>DS</button>
        <button onClick={()=>history.push('/js')}>JS</button>
        <button onClick={()=>history.push('/ts')}>TS</button>
        <button onClick={()=>history.push('/react')}>React</button>
        <button onClick={()=>history.push('/git')}>GIT</button>
        <button onClick={()=>history.push('/redux')}>Redux</button>
        <button onClick={()=>history.push('/rxjs')}>RxJs</button>
        <button onClick={()=>history.push('/optimization')}>Optimization</button>
        <button onClick={()=>history.push('/security')}>Security</button>
    </div>
  );
}

export default Navbar;
