import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/nvback.jpg'
import  '../styles/Home.css'
import '../styles/Footer.css'
function Home() {
    


  return (
    <>
    <div className='home' style={{backgroundImage:'url('+BannerImage+')'}}  >
      <div className='headerContainer'  >
        <h1> 38,4 millions 
          <span className='gymcolor'> 33,9 à 43,8 millions </span> 
               personnes
          <span className='gymcolor1'> vivant avec le 
</span>  </h1>
        <p > VIH à la fin de 2021 </p>
       {/*} <div className='nader'>
       <Link to="/p">
        <button className='margintop'>Order now </button>
        </Link>
        <Link to="/cr">
        <button className='margintop' >Consult courses </button>
        </Link>
        <Link to="/tr">
        <button className='margintop' > Pick a trainer </button>
        </Link>
        </div>
  */}
      </div>
      </div>
       <div className='divtab' >
            <h1 className='planing'>  Consulting Planing </h1>
       <table className='tableau'>
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
             <th className='colonecours'> <div className='colonecours1'>Nice</div>
                  <div>09:00 - 10:15</div> 
             </th>
             <th className='colonecours' > <div className='colonecours1' >Nice</div>
                  <div>09:00 - 10:00</div> 
             </th>
             <th className='colonecours' > <div className='colonecours1' >Nice</div>
                  <div>09:00 - 09:45</div> 
             </th>
             <th className='colonecours' > <div className='colonecours1' >Nice</div>
                  <div>09:00 - 10:00</div> 
             </th>
             <th className='colonecours' > <div className='colonecours1' >Nice</div>
                  <div>09:00 - 09:55</div> 
             </th>
             <th> 
             </th>
             <th> 
             </th>
         </tr>
         <tr>
             <th className='colonetemps'> 11:00 </th>
             <th className='colonecours' > <div className='colonecours1' >Paris</div>
                  <div>11:00 - 11:45</div> 
             </th>
             <th className='colonecours' > <div className='colonecours1' >Paris</div>
                  <div>11:00 - 11:30</div> 
             </th>
             <th className='colonecours' > <div className='colonecours1' >Paris</div>
                  <div>11:00 - 11:45</div> 
             </th>
             <th> 
             </th>
             <th className='colonecours' > <div className='colonecours1' >Nantes</div>
                  <div>11:00 - 11:55</div> 
             </th>
             <th> </th> 
             <th className='colonecours' > <div className='colonecours1' >Nantes</div>
                  <div>11:00 - 12:00</div>  </th>
         </tr>
         <tr>
             <th className='colonetemps' > 12:00 </th>
             <th></th>
             <th></th>
             <th></th>
             <th></th>
             <th></th>
             <th className='colonecours' ><div className='colonecours1' >Lyon</div>
                  <div>12:00 - 12:30</div> </th>
             <th className='colonecours' ><div className='colonecours1' > Toulouse</div>
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
             <th className='colonecours' > <div className='colonecours1' >Toulouse</div>
                  <div>14:00 - 15:00</div> </th>
         </tr>
         <tr>
             <th className='colonetemps' > 16:00  </th>
             <th > </th>
             <th className='colonecours' ><div className='colonecours1' > Nantes </div>
                  <div>16:00 - 16:45</div></th>
                  <th></th>
             <th></th>
             <th></th>
             <th></th>
             <th className='colonecours' ><div className='colonecours1' > Rue de Marseille</div>
                  <div>16:00 - 17:00</div></th>
         </tr>
         <tr>
             <th className='colonetemps ' > 18:45 </th>
             <th className='colonecours' ><div className='colonecours1' > Bordeaux</div>
                  <div>18:45 - 19:45</div></th>
             <th className='colonecours' ><div className='colonecours1' > Bordeaux</div>
                  <div>18:45 - 19:15</div></th>
             <th className='colonecours' ><div className='colonecours1' > Bordeaux </div>
                  <div>18:45 - 19:45</div></th>
             <th className='colonecours' ><div className='colonecours1' > Bordeaux </div>
                  <div>18:45 - 19:15</div></th>
             <th className='colonecours' ><div className='colonecours1' > Bordeaux </div>
                  <div>18:45 - 19:30</div></th>
             <th className='colonecours' ><div className='colonecours1' > Bordeaux</div>
                  <div>18:45 - 19:45</div></th>
             <th></th>
         </tr>
         <tr>
             <th className='colonetemps ' > 18:55 </th>
             <th ></th>
             <th className='colonecours' ><div className='colonecours1' > Rennes</div>
                  <div>18:55 - 19:55</div></th>
             <th></th>
             <th className='colonecours' ><div className='colonecours1' > Angers</div>
                  <div>18:55 - 19:30</div></th>
             <th className='colonecours' ><div className='colonecours1' > Paris </div>
                  <div>18:55 - 19:30</div></th>
             <th > </th>
             <th></th>
         </tr>
         




         </tbody>

  </table>
       </div>
      </>
  );
}

export default Home