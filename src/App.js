import './App.css';
import Navbar from './componnent/navbar';
import About from './componnent/about';
import Home from './componnent/home';
// import ProductsList from './componnent/productsList';
import { Routes, Route } from "react-router-dom";
import ProductDetails from './componnent/productDetails';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails/>}/>
      {/* <ProductsList/> */}
      </Routes>
    </div>
  );
}

export default App;
