import { useDispatch, useSelector } from 'react-redux';
import CartPage from './CartPage';
import { addCart, delCoffee } from '../store';
import { useEffect } from 'react';

// 상품목록
function ProductListPage(){
  let dispatch = useDispatch();
  let state = useSelector((state)=>{return state})

  useEffect(() => { 
    return () => {

      //장바구니 초기화
      dispatch(delCoffee());
    };
  },[]);

  return (
        <div className="ProductListPage">
        <h1> MENU </h1>
        <ul>
          {
            state.menu.map((a,i)=>{
              return(
            <li className="Product" key={i} onClick={()=>{
              dispatch(addCart({state : {
                idx  : i,
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
     
     {/* 장바구니 컴포넌트 */}
      <CartPage></CartPage>
      </div>
    )
}

export default ProductListPage;