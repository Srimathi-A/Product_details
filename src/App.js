import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Productlisting from './Productlisting';
import ProductCreate from './ProductCreate';
import ProuctEdit from './ProductEdit';
import ProductDetails from './ProductDetails';

function App() {
  return (
    <div className='App'>
      <h1>React Js CRUD Json server</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Productlisting/>} />
        <Route path='/employee/create' element={<ProductCreate/>}/>
        <Route path='/employee/edit/:empid' element={<ProuctEdit/>}/>
        <Route path='/employee/details/:empid' element={<ProductDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}