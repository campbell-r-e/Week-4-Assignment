
import React from 'react';
import Gallery from './Gallery';




export default function Home() {
   
   const pictures = ["pictures/th-257426696.jpg","pictures/th-2696583940.jpg","pictures/th-2921091812.jpg"]
 

  return (
   <Gallery pics={pictures} /> 
    
   
     
  );
}
