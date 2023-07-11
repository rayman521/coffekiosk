import './App.css';
import { Routes,Route,Link,BrowserRouter as Router, useNavigate, Outlet } from 'react-router-dom'; // 라우터

import ProductDetailPage from './components/ProductDetailPage.js';
import ProductListPage from './components/ProductListPage';
import CoffeeMain from './components/CoffeeMain';

function App() {
  return (
    <div className="App">
<CoffeeMain/>

    {/* 라우터 */}
           
    <Routes>
          <Route path='/' element={<><CoffeeMain/></>}/>

          <Route path='/list' element={<><ProductListPage/></>}/>

          <Route path='/detail' element={<><ProductDetailPage/></>}/>
    
          <Route path='/cart' element={<><ProductListPage/></>}/>

          <Route path='*' element={<div>없는 페이지 입니다</div>}/>

    </Routes>
    </div>
  );
}

export default App;
