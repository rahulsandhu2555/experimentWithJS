import React from "react";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  return (
    <div>
        <button onClick={()=>window.location='/home'}>Home</button>
    </div>
  );
}

export default Navbar;
