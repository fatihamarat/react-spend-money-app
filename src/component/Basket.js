import React from 'react';
import Basketitem from './Basketitem';
import { moneyFormat } from './Helpers';
import "./CSS/basket.css";
function Basket({basket,products,total,resetBasket}) {
  return (
   <div className='container basket'>
        <h3>Sepetim</h3>
        <ul className='basket-items'>
          {basket.map(item=>(
            <Basketitem key={item.id} item={item} product={products.find(p=>p.id===item.id)}/>
          ))}
        </ul>
        <div className='total'>Toplam Tutar: $ {moneyFormat(total)}</div>
        <button className='reset-btn' onClick={resetBasket}>Sepeti Boşalt</button>
        
    </div> 
   
  )
}

export default Basket;