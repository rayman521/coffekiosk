import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// 상품목록
function ProductListPage(){

  let navigate = useNavigate();
  let state = useSelector((state)=>{return state})

  return (
        <div className="ProductListPage">
        <h1> Coffee Menu </h1>
        <ul>
          {
            state.menu.map((a,i)=>{
              return(
            <li className="Product" key={i}>
            <img src={process.env.PUBLIC_URL + '/img/coffeeMain.png'}
            onClick={()=>{navigate('/detail',{state : {
             name : state.menu[i].name,
             price : state.menu[i].price
            }})}}
            />
            <div className="Product__info">
              <div>{state.menu[i].name}</div>
              <div>{state.menu[i].price}</div>
            </div>
          </li>
            )})
          }
        </ul>
      </div>
    )
}

export default ProductListPage;