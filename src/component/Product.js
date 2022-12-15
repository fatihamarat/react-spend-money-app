import React from 'react';
import { moneyFormat } from './Helpers';

function Product({product,basket,setBasket,total,money}) {
    const basketItem = basket.find(item=>item.id===product.id)

    const addBasket = ()=>{
        const checkBasket = basket.find(item=>item.id === product.id)
        if(checkBasket){
            checkBasket.amount+=1
            setBasket([...basket.filter(item=>item.id!==product.id),checkBasket]);
        }
        else{
            setBasket([...basket,{
                id:product.id,
                amount:1
            }])
        }
    }
    const removeBasket = ()=>{
        const currentBasket = basket.find(item=>item.id === product.id)
        const basketWithoutCurrent = basket.filter(item=>item.id!==product.id)
        currentBasket.amount -=1
        
        if(currentBasket.amount===0){
            
            setBasket([...basketWithoutCurrent])
        }
        else{
            setBasket([...basketWithoutCurrent,currentBasket])
        }
    };

    
  return (
    <div className= "p-4 bg-slate-200 border border-solid border-neutral-400 mb-5 w-1/2">
        {/* <img></img> */}
        <h6>{product.title}</h6>
        <div>$ {moneyFormat(product.price)}</div>
        <div>
            <button disabled={total + product.price > money} onClick={addBasket} >Sepete At</button>
            <span>{basketItem && basketItem.amount || 0}</span>
            <button disabled={!basketItem} onClick={removeBasket}>Sepetten Çıkar</button>
        </div>
        
       
        
        

        
    </div>
  )
}

export default Product;