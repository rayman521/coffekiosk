import {useNavigate} from 'react-router-dom'; // 라우터

function CoffeeMain() {

    let navigate = useNavigate();

return (
    <div className="coffeeMain">
    <img src={process.env.PUBLIC_URL + '/img/CoffeeMain.png'}  alt="coffeeMain"/>
    
    <button type="button" onClick={()=>{
        navigate('/list');
    }}>주문하기</button>
    </div>
    
)
}

export default CoffeeMain;