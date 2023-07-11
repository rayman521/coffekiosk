
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import  {DownCnt, TotalPay, UpCnt, addInfo}  from '../store.js';
import { useEffect} from "react";

// 주문 커피 상품 정보
function ProductDetailPage() {

  let location = useLocation();
  let dispatch = useDispatch();
  let state = useSelector((state)=>{return state});

  useEffect(()=>{
      dispatch(TotalPay({price : location.state.price}));
  },[])

  return (
 <div className="ProductDetailPage">
    <h1>Coffee Info</h1>
    <div className="ProductDetail">
      <img className="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png"/>
      <div className="ProductDetail__info">
        <h2>{location.state.name}</h2>
        <div className="ProductDetail__price">{location.state.price} 원</div>
        <div className="ProductDetail__selectedOptions">
          <h3>선택된 상품</h3>
          <ul>
            <li>
              아메리카노 -  {state.orderInfo.cnt} 개
              <div>
              <button onClick={()=>{ dispatch(UpCnt())}}>+</button>
              <button onClick={()=>{ dispatch(DownCnt())}}>-</button>
              </div>
            </li>
          </ul>
          <div className="ProductDetail__totalPrice">175,000원</div>
          <button className="OrderButton" onClick={()=>{
              dispatch(addInfo())
          }}>주문하기</button>
        </div>
      </div>
    </div>
  </div>
 )
}
export default ProductDetailPage;