
import './App.css';
import MainPage from './MainPage';
import Nav from './Nav';
import { Routes, Route } from 'react-router-dom';
import Numeric from './Numeric';
import Emoji from './Emoji';
import Minimalist from './Minimalist';

function App() {
  return (
    <div className="font-link">
    {/* <BackGround/> */}
    <Nav/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/numeric" element={<Numeric />} />
        <Route path="/emoji" element={<Emoji />} />
        <Route path="/minimalist" element={<Minimalist />} />
      </Routes>
    
    </div>
  
    // <div className="font-link">
    // <Nav/>
    //   <Routes>
    //     <Route path="/" element={<MainPage />} />
    //     <Route path="/numeric" element={<Numeric />} />
    //     <Route path="/emoji" element={<Emoji />} />
    //     <Route path="/minimalist" element={<Minimalist />} />
    //   </Routes>
    //   </div>
  );
}

export default App;
