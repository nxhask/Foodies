// import React, { useEffect, useState } from 'react'
// import './App.css';
//  import food from "./Data"
// function Menu() {
//   // const [value, setVlaue] = useState([])
//   // function fetchinfo() {
//   //   fetch("https://mp91bf800267b30b81b8.free.beeceptor.com/data")
//   //     .then((res) => res.json())
//   //     .then((resp) => {
//   //       const all = Object.values(resp)
//   //       setVlaue(all)

//   //       console.log(all)
//   //     })
//   // }
//   // useEffect(() => {
//   //   fetchinfo()
//   // }, [])
//   // const [data, setData]= useState(0)
//   // function abc(){
//   //   setData(data+1)
//   // }
//   // function jaba(){
//   //   setData(data-1)
//   // }
//   // function da(){
//   //   setData(data*2)
//   // }kamran.haider@icat.ac.in



//   return (
//     <div>
//       {/* <h1>{data}</h1>
//       <button onClick={abc}>increase</button>
//       <button onClick={jaba}>Dicrees</button>
//       <button onClick={da}>multy</button> */}

//       <div className='mmainbx1'>

//         <div className='msubmainbx1'>
//           <h1 className='menuhead1'>Where every ingredient tells a story</h1>
//           <div className='menubtnarow'>
//             <button className='menubtn2'>Taste the best</button>
//             <div className='menuicon1'></div>
//           </div>
//         </div>

//         <div className='msubmainbx2'></div>

//       </div>


//       <div className='mmainbx2'>

//         <h1 className='menuhead2'>View Our Menu </h1>
//         <div className='menu_main_column1'>
//           <div className='menu_row1'>

//             <div className='menu_sub_column'>
//               <div className='mimg1'></div>
//               <div>
//                 <h2>Pizza</h2>
//                 <button className='menu_cart_btn'>Show More</button>
//               </div>
//             </div>
//             <div className='menu_sub_column'>
//               <div className='mimg2'></div>
//               <div>
//                 <h2>Sandwich</h2>
//                 <button className='menu_cart_btn'>Show More</button>
//               </div>
//             </div>
//             <div className='menu_sub_column'>
//               <div className='mimg3'></div>
//               <div>
//                 <h2>Shawerma Roll</h2>
//                 <button className='menu_cart_btn'>Show More</button>
//               </div>
//             </div>
//             <div className='menu_sub_column'>
//               <div className='mimg4'></div>
//               <div>
//                 <h2>Burger</h2>
//                 <button className='menu_cart_btn'>Show More</button>
//               </div>
//             </div>
//           </div>

//           <div className='menu_row1'>

//             <div className='menu_sub_column'>
//               <div className='mimg5'></div>
//               <div>
//                 <h2>Biriyani</h2>
//                 <button className='menu_cart_btn'>Show More</button>
//               </div>
//             </div>
//             <div className='menu_sub_column'>
//               <div className='mimg6'></div>
//               <div>
//                 <h2>Fried Rice</h2>
//                 <button className='menu_cart_btn'>Show More</button>
//               </div>
//             </div>
//             <div className='menu_sub_column'>
//               <div className='mimg7'></div>
//               <div>
//                 <h2>Pasta</h2>
//                 <button className='menu_cart_btn'>Show More</button>
//               </div>
//             </div>
//             <div className='menu_sub_column'>
//               <div className='mimg8'></div>
//               <div>
//                 <h2>Noodle</h2>
//                 <button className='menu_cart_btn'>Show More</button>
//               </div>
//             </div>
//           </div>

//           <div className='menu_row1'>

//             <div className='menu_sub_column'>
//               <div className='mimg9'></div>
//               <div>
//                 <h2>Pudding</h2>
//                 <button className='menu_cart_btn'>Show More</button>
//               </div>
//             </div>
//             <div className='menu_sub_column'>
//               <div className='mimg10'></div>
//               <div>
//                 <h2>Mousse</h2>
//                 <button className='menu_cart_btn'>Show More</button>
//               </div>
//             </div>
//             <div className='menu_sub_column'>
//               <div className='mimg11'></div>
//               <div>
//                 <h2>Fruit Salad</h2>
//                 <button className='menu_cart_btn'>Show More</button>
//               </div>
//             </div>
//             <div className='menu_sub_column'>
//               <div className='mimg12'></div>
//               <div>
//                 <h2>Cake</h2>
//                 <button className='menu_cart_btn'>Show More</button>
//               </div>
//             </div>
//           </div>
//         </div>


//       </div>
//       {
//         value.map((item) => (
//           <div>

//             <h1>{item.name}</h1>
//           </div>
//         ))
//       }



//     </div>
//   )
// }

// export default Menu


// // import React, { useEffect, useState } from 'react'

// // function Menu() {
// //   const [data, setData]= useState([])
// //   function a(){
// //     fetch("https://mp91bf800267b30b81b8.free.beeceptor.com/data")
// //     .then((res)=>res.json())
// //     .then((resp)=>{
// //       const all = Object.values(resp)
// //       setData(all )
// //         console.log(all)
       
// //     })
// //   }
// //   useEffect(()=>{
// // a()
// //   },[])
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }

// // export default Menu


import React from 'react'
import{ food} from "./Data"
import "./Menu.css"

function Menu() {
  return (
    <div>

      <div className='container'>
      {
        food.bbqs.map((item)=>(
          <div className='card'>
            <img className='card-img' src={item.img} alt='' />
            <div className='text'> 
            <h3 className='name'>Dish Name:-{item.name}</h3>
            <p className='dsc'>{item.dsc}</p>
            <h3>{item.price}</h3>
            </div>
            </div>
        ))
      }
      </div>
    </div>
  )
}

export default Menu
