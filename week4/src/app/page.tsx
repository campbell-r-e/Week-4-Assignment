import Image from "next/image";
import React from 'react';
import Gallery from './Gallery';




export default function Home() {
  let pictures: String[];
  pictures = ["th-257426696.jpg","th-2696583940.jpg","th-2921091812.jpg"]
 

  return (
   <Gallery images={pictures} /> 
    
   
     
  );
}
