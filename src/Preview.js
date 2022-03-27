import { useState } from "react"
import reviews from "./Data"
function Preview()
{
    const len=reviews.length-1
    let[index,setindex]=useState(0)
  let {id,name,job,image,text}=reviews[index]
  function reset()
  {
    document.getElementById('nextbtn').disabled=false
    document.getElementById('btn2').disabled=false
      let a=0
      return setindex(index=0)
  }
  function next()
  {
      console.log(index);
      console.log(len);
     if(index == len)
     {
    
    document.getElementById('nextbtn').disabled=true
     return setindex(index)
     }
     else
     {
        document.getElementById('btn2').disabled=false
    return  setindex(index+1)
     }
  }
  function previous()
  {
    
     if(index === 0)
     {
     document.getElementById('btn2').disabled=true
     return setindex(index)
     }
     else
     {
        document.getElementById('nextbtn').disabled=false
    return  setindex(index-1)
     }
  }
    return(
        <div>
         {
             <div>
             <img src={image} width="200px" />
             <h3> # id : {id}</h3>
            <h1>{name}</h1>
            <h2>{job}</h2>
            <h5>{text}</h5>
            <button id="btn2" onClick={()=>previous()}  >pre</button>
            <button  id="nextbtn" onClick={()=>next()}  >next</button>
            <button onClick={()=>reset()} >Reset</button>
            </div>
      }

        </div>
    )
}
export default Preview