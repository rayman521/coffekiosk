import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { DownCnt, addPrice } from "../store";


// 주문 커피 장바구니
function CartPage() {

  let navigate = useNavigate();
  let location = useLocation();
  let dispatch = useDispatch();
  let state = useSelector((state)=>{return state});

  //받아온 데이터
  let CoffeeList = state.cartList;

  useEffect(() => {
    
    for(let i=0; i < CoffeeList.length; i++){
    
      dispatch(addPrice(CoffeeList[i].price))
    }
    return () => {
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
            총 상품가격 {state.totalPrice.price} 원
           </div>
          <button className="OrderButton" onClick={()=>{
               navigate('/')
          }}>주문하기</button>
        </div>
      </div>
    )   
}

export default CartPage;