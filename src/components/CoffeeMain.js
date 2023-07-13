import {useNavigate} from 'react-router-dom'; // 라우터

function CoffeeMain() {

    let navigate = useNavigate();

return (
    <div className="coffeeMain">
    <div>
    <img src={process.env.PUBLIC_URL + '/img/CoffeeLogo.png'}  alt="coffeeMain"/>
    </div>
    <button type="button" onClick={()=>{
        navigate('/list');
    }}>주문하기</button>
    </div>
    
)
}

export default CoffeeMain;