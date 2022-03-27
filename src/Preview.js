import { useState } from "react"
import reviews from "./Data"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function Preview()
{
    const len=reviews.length-1
    let[index,setindex]=useState(0)
  let {id,name,job,image,text}=reviews[index]
  function reset()
  {
 
      let a=0
      return setindex(index=0)
  }
  function next()
  {
    
     if(index == len)
      {
       document.getElementById('nextBtn').style.visibility="hidden"
     return setindex(index)
     }
     else
     {
        document.getElementById('previious').style.visibility='visible'
    return  setindex(index+1)
     }
  }
  function previous()
  {
    
     if(index === 0)
     {
     document.getElementById('previious').style.visibility='hidden'
     return setindex(index)
     }
     else
     {
        document.getElementById('nextBtn').style.visibility="visible"
    return  setindex(index-1)
     }
  }
    return(
        <div style={{margin:"50px 0px 0px 380px" }} >
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="170"
        image={image}
      />
      <CardContent>
    
        <Typography align="inherit" gutterBottom variant="h6" component="div">
        # {id}    {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
          
        <Button id="previious"  onClick={()=>previous()} size="small">Previous</Button>
        <Button id="nextBtn" onClick={()=>next()} size="small">Next</Button>
      <Button onClick={()=>reset()} >Reset</Button>
      
      </CardActions>
    </Card>
    </div>
 );
}
export default Preview;