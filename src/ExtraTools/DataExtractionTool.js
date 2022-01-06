import React, {useEffect, useState} from "react";

function DataExtractionTool(props) {
  const [string, setString] = useState("");

    useEffect(()=>{console.log(string)},[string])
    const tagStack = [];
    let openTag = false;
    let closeTag = false;
    let selfCloseTag = false;
    let tagName = '';
    const tagsToIgnore = [];
    let count = 0;
    const checkTags= () =>{
        [...string].forEach(i => {
                count++
            if(i==='<'){
                if(!openTag && !closeTag && !selfCloseTag){
                    openTag = true;
                    tagName = '';
                    return;
                }
            }
            if(i !== " "){
                tagName += i;
            }else {
                tagStack.push(tagName);
                tagName= '';
                return;
            }
            if( i === '>'){

            }


        });
        console.log(count)

        if(tagStack.length === 0){
            console.log('success')
            return
        } console.log('Failed')

    }
  return <div>
  <textarea rows={30} cols={80} onChange={(e)=> setString(e.target.value)}/>
      <button type='button' onClick={checkTags}>check</button>
  </div>;
}

export default DataExtractionTool;
