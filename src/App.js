
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
      <div>
      <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-section">
            <h4>Socials</h4>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>FAQ</h4>
            <ul>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Order Status</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-section">
            <h4>Contact Me</h4>
            <ul>
              <li>Email: info@company.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Main St, Anytown, USA</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </div>
    </footer>
      </div>
    </div>
  );
}

export default App;
