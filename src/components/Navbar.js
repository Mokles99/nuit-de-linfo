import React, {useState} from 'react'
import Logo from '../assets/logoaids.jpeg'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'
import {AiOutlineShoppingCart} from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
function Navbar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (


    <div className='navbar'> 
      <div className='leftSide'>
         <Link to="/h"> <img src={Logo}/> </Link> 
          <div className='hiddenlinks'>
         
          
          <Link to="/cr"> CoNSeiLS </Link>
          <Link to="/tr"> dOCtoRs </Link>
          <Link to="/c"> Contact </Link>
          </div>
           </div>
    
       <div className='rightSide'>
        
            {/*}  <span>0</span> .  */}
              <Link to="Shop">
         {/*} <AiOutlineShoppingCart color='white'></AiOutlineShoppingCart> */}
          </Link>
          <Link to="/a"> About </Link>
        </div>
    </div>
  )
}

export default Navbar