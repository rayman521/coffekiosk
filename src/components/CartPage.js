import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { delCoffee } from "../store";

// 주문 커피 장바구니
function CartPage() {

  let navigate = useNavigate();
  let state = useSelector((state)=>{return state});
  let dispatch = useDispatch();

  // 총금액
  let [totalPrice,SetTotalPrice] = useState(0);

  //받아온 데이터
  let CoffeeList = state.cartList;

  useEffect(() => { 

    for(let i=0; i < CoffeeList.length; i++){
    
      SetTotalPrice(totalPrice += CoffeeList[i].price);
    }
    return () => {
      //리스트 초기화
      dispatch(delCoffee());
    };
  }, []);

    return (
        <div className="CartPage">
        <h1>Coffee Cart</h1>
        <div className="Cart">
          <ul>
      {
        CoffeeList.map((a,i)=>{
            return(
              <li className="Cart__item" key={i}>
              <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png"/>
              <div className="Cart__itemDesription">
                <div>{CoffeeList[i].name}  {CoffeeList[i].cnt} 잔</div>
                <div>{CoffeeList[i].price} 원</div>
              </div>
            </li>
            )
          
        })
      }
          </ul>
          <div className="Cart__totalPrice">
            총 상품가격 {totalPrice} 원
           </div>
          <button className="OrderButton" onClick={()=>{
               navigate('/')
          }}>주문하기</button>
        </div>
      </div>
    )   
}

export default CartPage;