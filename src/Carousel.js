// import "./styles.css";
// import { useState, useEffect } from "react";
// const slides = [
//     "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/3c4df1bcf25b7565.jpg?q=20"
// ];

// const Contact = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     useEffect ((=> {
//         setCurrentIndex(pervIndex) =>{
//             const nextIndex =(pervIndex =1) % slides,length;
//             retuen
//         }
//     }))

import React, { useEffect, useState } from 'react'
const slides=[
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/bd94c9e6358f3a70.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e446c82994f3a8fd.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/efc2678b65ca1390.jpg?q=20"
]

function Carousel() {
    const [currentIndex, setCurrentIndex]= useState(0)
    useEffect(()=>{
        const intrvalid = setInterval(()=>{
            setCurrentIndex((prev)=>{
                const next= (prev + 1)% slides.length
                return next
            })
        },3000)

    })
  return (
    <div>
      <img src={slides[currentIndex]}  alt=''/>
    </div>
  )
}

export default Carousel
