import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddCategory from './components/AddCategory';
import CategoryList from './components/CategoryList';
import UpdateCategory from './components/UpdateCategory';
import HomePage from './components/HomePage';
import Deals from './components/Deals';
import PaymentTabs from './components/PaymentTabs';
import Receipt from './components/Receipt';
import PaymentForm from './components/PaymentForm';

function App() {
  return (
    <>
    <BrowserRouter>
      {/* <TopBar /> */}
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path='/deals' element={<Deals />}></Route>
        <Route path='/payments' element={<PaymentTabs />}></Route>
        <Route path='/paymentForm' element={<PaymentForm />}></Route>
        <Route path='/categoryList' element={<CategoryList />}></Route>
        <Route path='/addCategory' element={<AddCategory />}></Route>
        <Route path='/receipt' element={<Receipt />}></Route>
        <Route path='/updateCategory/:id' element={<UpdateCategory />}></Route>
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
