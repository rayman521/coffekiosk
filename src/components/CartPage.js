import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { delCoffee, deleteCart, DownCnt, setTotalPrice, UpCnt } from "../store";

// 주문 커피 장바구니
function CartPage() {

  let state = useSelector((state)=>{return state});
  let dispatch = useDispatch();

 useEffect(()=>{
  
  let price = 0;

    //장바구니 내역이 있을떄만 실행
    if(state.cartList.length > 0){
      for(let i =0;  i < state.cartList.length ; i++){
            price += state.cartList[i].price * state.cartList[i].cnt;

            if(state.cartList[i].cnt == 0){
              //장바구니 요소중 0개인 리스트 요소 삭제
              dispatch(deleteCart(i));
            }
          }
          dispatch(setTotalPrice(price));
    }
 },[state.cartList])

  //커피메뉴 Store Data
  let CoffeeList = state.cartList;

    return (

        <div className="Cart" >
          <table className="scrolltable" width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr className="CartTr">
          {
        CoffeeList.map((a,i)=>{
            return(
              <td className="Cart__item" key={i}>
              <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png"/>
              <div className="Cart__itemDesription">
                <div>{CoffeeList[i].name} {CoffeeList[i].cnt}잔</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{CoffeeList[i].price * CoffeeList[i].cnt} 원</div>
                <div className="Cart__item_button">
                <button onClick={()=>{dispatch(UpCnt(i))}}>+</button>
                 <button onClick={()=>{dispatch(DownCnt(i))}}>-</button>
                </div>
              </div>
            </td>
            )
        })
      }  
          </tr>
          </table>
          <div className="Cart__totalPrice">
            총 상품가격  {state.totalPrice.price} 원
           </div>
           <tr>
          <td>
          <button className="OrderButton" onClick={()=>{ alert('총 주문금액 ' + state.totalPrice.price + '원입니다. 주문되었습니다!')
          dispatch(delCoffee());
          dispatch(setTotalPrice(0));
        }}>주문하기</button>
          </td>
           </tr>
          
        </div>
    )   
}

export default CartPage;