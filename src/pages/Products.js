import React from 'react'
import {MenuList} from '../helpers/ProductList'
import MenuItem from '../components/MenuItem'
import backImage from '../assets/gym.jpeg'
import Imcimage from '../assets/slider3.jpeg'
import { FaAvianex } from "react-icons/fa";
import '../styles/Products.css'
function Products() {
  return (
    <div className='products' style={{backgroundImage:'url('+backImage+')'}} > 
    <div className='imcdiv' style={{backgroundImage:'url('+Imcimage+')'}}  >
      <div className='imcleft'>
      <h1>Calcul de l'Indice de Masse Corporelle</h1>
     <p> L'IMC est un indicateur plus fiable que le poids pour évaluer la corpulence.</p>
     <p>    Homme ou femme, calcule en un clic ton IMC et découvre sa signification selon </p>
     <p>  la classification de l'OMS. Attention cette classification reste statistique,</p>
     <p>  elle ne s'applique pas forcément à tous, notamment les sportifs ou les seniors.</p>
     <input name="weight" placeholder="Enter your weight" type="text" />
     <input name="weight" placeholder="Enter your height" type="text" /> 
     <button type=''>Calcul</button>
     </div>
      </div>
    <h1 className='prodoctsTitle'>A YEAR FROM NOW,YOU WILL BE HAPPY YOU STARTED TODAY</h1>
    <div className='productsList'>
      {MenuList.map((menuItem, Key )=>{
        return (
        <MenuItem 
                  Key={Key} 
                  image={menuItem.image} 
                  name={menuItem.name} 
                  price={menuItem.price}
                  />
        );
    })}
    </div>
    </div>
  );
}

export default Products