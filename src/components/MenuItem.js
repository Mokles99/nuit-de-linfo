import React from 'react'
import '../styles/MenuItem.css'
import {Link} from 'react-router-dom'
import {useCart} from 'react-use-cart'


function MenuItem({image, name, price}) {
     {/*const { addItem} = useCart();*/}
  return (
    <div className='menuItem'>
        <div className='img-product' style={{backgroundImage:'url('+image+')'}} ></div>
        <h1> {name}</h1>
        <p>${price}</p>
        <Link to="/Shop"> <button className='btn-primary'
                            >ADD TO CARD</button> </Link>



    </div>
  )
}

export default MenuItem 
{/*
const MenuItem = (props) =>{
  <div className='col-11'>
<div class="card p-0">
  <imgage src={props.imgage} class="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <h5 class="card-text">{props.price}</h5>
    <button class="btn btn-success">ADD TO CARD </button>
  </div>
</div>
</div>
}
export default MenuItem 
*/}