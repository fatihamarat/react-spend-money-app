import Header from "./component/Header";
import React,{useState, useEffect} from "react";
import products from "./component/products.json";
import Product from "./component/Product";
import Basket from "./component/Basket";

function App() {

  const [money,setMoney] = useState(1000000);
  const [basket,setBasket] = useState([]);
  const [total,setTotal] = useState(0);
  const resetBasket = (()=>{
    setBasket([]);
  })

  // const array1 = [1, 2, 3, 4];
  // //0 + 1 + 2 + 3 + 4
  // const initialValue = 0;
  // const sumWithInitial = array1.reduce(
  // (accumulator, currentValue) => accumulator + currentValue,
  // initialValue
  // );


  useEffect(()=>{
    setTotal(basket.reduce(
      (acc,item)=>{
      return acc+(item.amount*(products.find(product=>product.id===item.id).price))
    },0))
  },[basket]);

  return (
    <div className="App">
      <Header money={money} total={total}/>
      {products.map(product=>(
        <Product key={product.id} product={product} basket={basket} setBasket={setBasket} total={total} money={money}/>
      ))}
      {total > 0 && <Basket key={basket.item} basket={basket} products={products} total={total} resetBasket={resetBasket}/>}
      
    </div>
    
  );
}

export default App;