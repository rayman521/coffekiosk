import { useDispatch, useSelector } from 'react-redux';
import CartPage from './CartPage';
import { addCart, delCoffee } from '../store';
import { useEffect } from 'react';
// 상품목록
function ProductListPage(){

  let dispatch = useDispatch();
  let state = useSelector((state)=>{return state})

  useEffect(() => { 
   // for(let i=0; i < CoffeeList.length; i++){
    
    //  SetTotalPrice(totalPrice += CoffeeList[i].price);
   // }
    return () => {
      //장바구니 초기화
      dispatch(delCoffee());
    };
  },[]);

  return (
    // 메뉴 컴포넌트
        <div className="ProductListPage">
        <h1> MENU </h1>
        <ul>
          {
            state.menu.map((a,i)=>{
              return(
            <li className="Product" key={i} onClick={()=>{
              dispatch(addCart({state : {
                name : state.menu[i].name,
                price : state.menu[i].price,
                cnt : 1
               }}))
            }}>
              <img src={process.env.PUBLIC_URL + '/img/coffeeMain.png'}/> 
          
            <div className="Product__info">
              <div>{state.menu[i].name}</div>
              <div>{state.menu[i].price}</div>
            </div>
          </li>
            )})
          }
        </ul>
     
     {/* 주문목록 컴포넌트 */}
          
      <CartPage></CartPage>
      </div>
    )
}

export default ProductListPage;