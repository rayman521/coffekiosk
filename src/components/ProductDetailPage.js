import { useDispatch, useSelector } from "react-redux";
import { useLocation,useNavigate } from "react-router-dom";
import  {DownCnt, UpCnt, addCart}  from '../store.js';

// 주문 커피 상품 정보
function ProductDetailPage() {

  let location = useLocation();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let state = useSelector((state)=>{return state});

  //location
  let menuName = location.state.name; // 커피 명
  let menuPrice = location.state.price; // 커피 가격 

  //state
  let orderCnt = state.orderInfo.cnt; // 주문 커피 수

  return (
 <div className="ProductDetailPage">
    <h1>Coffee Info</h1>
    <div className="ProductDetail">
      <img src={process.env.PUBLIC_URL + '/img/coffeeMain.png'}/>
      <div className="ProductDetail__info">
        <h2>{menuName}</h2>
      
        <div className="ProductDetail__selectedOptions">
          <ul>
            <li>
              {menuName} -  {orderCnt} 개
              <div>
              <button onClick={()=>{ dispatch(UpCnt())}}>+</button>
              <button onClick={()=>{ dispatch(DownCnt())}}>-</button>
              </div>
            </li>
          </ul>
          <div className="ProductDetail__totalPrice">총 {menuPrice * orderCnt} 원</div>
          <button className="OrderButton" onClick={()=>{
              dispatch(addCart({name : menuName, cnt : orderCnt, price : menuPrice * orderCnt}),)
              navigate('/cart');
          }}>주문하기</button>
        </div>
      </div>
    </div>
  </div>
 )
}
export default ProductDetailPage;