import React from 'react'
/*import {AiOutlineInstagram} from 'react-icons'*/
import {AiFillInstagram} from "react-icons/ai";
import {BsFillTelephoneFill} from "react-icons/bs"
import {FaFacebookSquare} from "react-icons/fa";
import {MdLocationOn} from "react-icons/md";
import '../styles/Footer.css';
import { Link } from 'react-router-dom'
import BannerImage from '../assets/slider3.jpeg'
function Footer() {
  return ( 
    <div className='footer'>
      {/*<table className='tableau'>
        <thead>
         <tr>
             <th>       </th>
             <th>Lundi   </th>
             <th>Mardi   </th>
             <th>Mercredi</th>
             <th>Jeudi   </th>
             <th>Vendredi</th>
             <th>Samedi  </th>
             <th>Dimanche</th>
         </tr>
         </thead>
         <tbody>
         <tr>
             <th className='colonetemps'> 09:00 </th>
             <th className='colonecours'> <div className='colonecours1'>Circuit training</div>
                  <div>09:00 - 10:15</div> 
             </th>
             <th className='colonecours' > <div className='colonecours1' >Crossfit</div>
                  <div>09:00 - 10:00</div> 
             </th>
             <th className='colonecours' > <div className='colonecours1' >Abdos</div>
                  <div>09:00 - 09:45</div> 
             </th>
             <th className='colonecours' > <div className='colonecours1' >Bike</div>
                  <div>09:00 - 10:00</div> 
             </th>
             <th className='colonecours' > <div className='colonecours1' >Circuit training</div>
                  <div>09:00 - 09:55</div> 
             </th>
             <th> 
             </th>
             <th> 
             </th>
         </tr>
         <tr>
             <th className='colonetemps'> 11:00 </th>
             <th className='colonecours' > <div className='colonecours1' >Abdos</div>
                  <div>11:00 - 11:45</div> 
             </th>
             <th className='colonecours' > <div className='colonecours1' >RPM™</div>
                  <div>11:00 - 11:30</div> 
             </th>
             <th className='colonecours' > <div className='colonecours1' >Abdos</div>
                  <div>11:00 - 11:45</div> 
             </th>
             <th> 
             </th>
             <th className='colonecours' > <div className='colonecours1' >Circuit training</div>
                  <div>11:00 - 11:55</div> 
             </th>
             <th> </th> 
             <th className='colonecours' > <div className='colonecours1' > Body Attack</div>
                  <div>11:00 - 12:00</div>  </th>
         </tr>
         <tr>
             <th className='colonetemps' > 12:00 </th>
             <th></th>
             <th></th>
             <th></th>
             <th></th>
             <th></th>
             <th className='colonecours' ><div className='colonecours1' >RPM™</div>
                  <div>12:00 - 12:30</div> </th>
             <th className='colonecours' ><div className='colonecours1' > RPM™ </div>
                  <div>12:00 - 12:30</div> </th>
         </tr>
         <tr>
             <th className='colonetemps' > 14:00  </th>
             <th></th>
             <th></th>
             <th></th>
             <th></th>
             <th></th>
             <th></th>
             <th className='colonecours' > <div className='colonecours1' >Bike</div>
                  <div>14:00 - 15:00</div> </th>
         </tr>
         <tr>
             <th className='colonetemps' > 16:00  </th>
             <th > </th>
             <th className='colonecours' ><div className='colonecours1' > RPM™ </div>
                  <div>16:00 - 16:45</div></th>
                  <th></th>
             <th></th>
             <th></th>
             <th></th>
             <th className='colonecours' ><div className='colonecours1' > Crossfit</div>
                  <div>16:00 - 17:00</div></th>
         </tr>
         <tr>
             <th className='colonetemps ' > 18:45 </th>
             <th className='colonecours' ><div className='colonecours1' > Body Attack </div>
                  <div>18:45 - 19:45</div></th>
             <th className='colonecours' ><div className='colonecours1' > RPM™ </div>
                  <div>18:45 - 19:15</div></th>
             <th className='colonecours' ><div className='colonecours1' > Circuit training </div>
                  <div>18:45 - 19:45</div></th>
             <th className='colonecours' ><div className='colonecours1' > RPM™ </div>
                  <div>18:45 - 19:15</div></th>
             <th className='colonecours' ><div className='colonecours1' > Body Attack </div>
                  <div>18:45 - 19:30</div></th>
             <th className='colonecours' ><div className='colonecours1' > Yoga™ </div>
                  <div>18:45 - 19:45</div></th>
             <th></th>
         </tr>
         <tr>
             <th className='colonetemps ' > 18:55 </th>
             <th ></th>
             <th className='colonecours' ><div className='colonecours1' > Body Attack </div>
                  <div>18:55 - 19:55</div></th>
             <th></th>
             <th className='colonecours' ><div className='colonecours1' > Body Attack </div>
                  <div>18:55 - 19:30</div></th>
             <th className='colonecours' ><div className='colonecours1' > Yoga™ </div>
                  <div>18:55 - 19:30</div></th>
             <th > </th>
             <th></th>
         </tr>
         <tr>
             <th className='colonetemps ' > 19:15 </th>
             <th  className='colonecours'  > <div className='colonecours1' > RPM™ </div>
                  <div>19:15- 20:15</div>
                  <div className='colonecours1' > Body Attack </div>
                  <div>19:15 - 20:00</div>
                  </th> 
             <th> </th>
             <th className='colonecours' > <div className='colonecours1' > Body Attack </div>
                  <div> 19:15- 19:45</div> </th>
             <th  ></th>
             <th className='colonecours' ><div className='colonecours1' > Crossfit </div>
                  <div>19:15 - 20:15</div></th>
             <th className='colonecours' ><div className='colonecours1' > Bike </div>
                  <div>19:15 - 19:45    </div></th>
             <th></th>
         </tr>




         </tbody>
  </table> */}

<div className='footer__container'>
      <div className='footer__links'>
        <div className='footer__link--wrapper'>
          <div className='footer__link--items'>
            <h2>About Us</h2>
            <a href="/sign__up">How it works</a> <a href="/">Testimonials</a> <a href="/">Careers</a> <a href="/">Terms of Service</a>
          </div>
          <div className='footer__link--items'>
            <h2>Contact Us</h2>
            <a href="/">Contact</a> <a href="/">Support</a>
            <a href="/">Destinations</a>
          </div>
        </div>
        <div className='footer__link--wrapper'>
          <div className='footer__link--items'>
            <h2>Videos</h2>
            <a href="/">Submit Video</a> <a href="/">Ambassadors</a>
            <a href="/">Agency</a>
          </div>
          <div className='footer__link--items'>
            <h2>Social Media</h2>
            <a href="/">Instagram</a> <a href="/">Facebook</a> <a href="/">Youtube</a>
            <a href="/">Twitter</a>
          </div>
        </div>
      </div>
      <section className='social__media'>
        <div className='social__media--wrap'>
          <div className='footer__logo'>
            <a href="/" id="footer__logo">THE ERRORS</a>
          </div>
          <p className='website__rights'>© ERRORS 2020. All rights reserved</p>
          <div class="social__icons">
            <a href="/" cla   ss="social__icon--link" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="/" class="social__icon--link"><i class="fab fa-instagram"></i></a>
            <a href="/" class="social__icon--link"><i class="fab fa-youtube"></i></a>
            <a href="/" class="social__icon--link"><i class="fab fa-linkedin"></i></a>
            <a href="/" class="social__icon--link"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
      </section>
    </div>
      {/*<div className='socialMedia'>
        <Link  to="www.google.com"> <AiFillInstagram size={50}> </AiFillInstagram> </Link>
        <Link  to="www.google.com"> <FaFacebookSquare size={45}> </FaFacebookSquare> </Link>
          </div>
{/*&copy*/}
             
        
    </div>
    
  )
}

export default Footer