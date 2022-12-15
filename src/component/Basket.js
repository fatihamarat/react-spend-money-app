import React from 'react';
import Basketitem from './Basketitem';
import { moneyFormat } from './Helpers';
function Basket({basket,products,total,resetBasket}) {
  return (
   <>
        <h3>Sepetim</h3>
        <div>
        {basket.map(item=>(
            <Basketitem key={item.id} item={item} product={products.find(p=>p.id===item.id)}/>
        ))}
        <div>Toplam Tutar: $ {moneyFormat(total)}</div>
        <button onClick={resetBasket}>Sepeti Boşalt</button>
        </div>
    </> 
   
  )
}

export default Basket;