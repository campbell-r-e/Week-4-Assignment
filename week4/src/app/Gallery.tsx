"use client";
import React, { useState } from 'react'; 
interface images{
  pics: string[];
}

export default function Gallery({ pics }:images) {
  const [imageIndex, setimageIndex] = useState(0);
  
  
  const image_calc_up = () => {
    if(imageIndex<pics.length-1){
     
      setimageIndex(imageIndex + 1); 
    }else{
      setimageIndex(0); 
    }

    
   
  };
  const image_calc_down = () => {
    if(imageIndex>0){
     
      setimageIndex(imageIndex - 1); 
    }else{
      setimageIndex(pics.length-1); 
    }

    
   
  };



  return (
    
    <div>
      <title>Ham Radio</title>
      <h1>Ham radio Pictures</h1>
      <img src={`/${pics[imageIndex]}`}width="700" height="700"></img>
      <button onClick= {image_calc_down}>Previous</button>
      
      <button onClick= {image_calc_up}>Next</button>

      
    </div>
  );
}