
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';



import Home from './Home';
import Menu from './Menu';
import About from './About';
import Services from './Services';
import Facility from './Facility';
// import Carousel from './Carousel';

function App() {    

  return (
    <div className="App">
      {/* <Carousel /> */}
    
      <div className='nav' style={{height: "15vh", width: "100%", display:"flex", justifyContent: "space-around", alignItems:"center", backgroundColor:"black" }}>

      <h3 className='h3'>Foodie's</h3>

      <div className='navlink' style={{display:"flex",gap:"40px", justifyContent: "space-around", alignItems:"center", padding:"20px"}}>
      <Link  className='link' to="/" >Home</Link>
      <Link className='link' to="menu" >Menu</Link>
      <Link className='link' to="facility" >About Us</Link>
      <Link className='link' to="about" >Contact Us</Link>
      <div className='nav-actions'>
            <input type='text' className='search-bar'  placeholder='Search...' />
            <button className='btnlogin'>Login</button>
          </div>
      </div>

      
      </div>
     
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='menu' element={<Menu/>} />
        <Route path='/about' element={<About/>} />
        <Route path='services' element={<Services/>} />
        <Route path='facility' element={<Facility />} />
      </Routes>

      

    </div>

    


  );
}

export default App;
