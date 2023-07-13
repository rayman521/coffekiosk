import './App.css';
import { Routes,Route,useNavigate,Outlet } from 'react-router-dom'; // 라우터
import ProductListPage from './components/ProductListPage';

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
          <Route path='/' element={<><ProductListPage/></>}/>
          <Route path='*' element={<div>없는 페이지 입니다</div>}/>

    </Routes>
    </div>
  );
}

export default App;
