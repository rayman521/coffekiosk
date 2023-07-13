import './App.css';
import { Routes,Route,useNavigate,Outlet } from 'react-router-dom'; // 라우터
import ProductDetailPage from './components/ProductDetailPage.js';
import ProductListPage from './components/ProductListPage';
import CoffeeMain from './components/CoffeeMain';
import CartPage from './components/CartPage';

function App() {

    let navigate = useNavigate();
  return (
    <div className="App">
    <nav class="navbar">
        <div class="navbar__logo">
            <i class="fab fa-accusoft"></i>
            <a onClick={()=>{
              navigate('/');
            }}>HYEOK COFFEE</a>
        </div>
    </nav>

  {/* 라우터 */}      
    <Routes>
          <Route path='/' element={<><CoffeeMain/></>}/>

          <Route path='/list' element={<><ProductListPage/></>}/>

          <Route path='/detail' element={<><ProductDetailPage/></>}/>
    
          <Route path='/cart' element={<><CartPage/></>}/>

          <Route path='*' element={<div>없는 페이지 입니다</div>}/>

    </Routes>
    </div>
  );
}

export default App;
