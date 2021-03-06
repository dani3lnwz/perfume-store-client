import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import StockDetail from './Pages/StockDetail/StockDetail';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Update from './Pages/Update/Update/Update';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AddProduct from './Pages/AddProduct/AddProduct';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
// import MyItems from './pages/MyItems/MyItems';
import Blogs from './Pages/Blogs/Blogs';
import MyItems from './Pages/MyItems/MyItems';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/product/:productId' element={<StockDetail></StockDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/update/:productId" element={
          <RequireAuth>
            <Update></Update>
          </RequireAuth>
        }></Route>
        <Route path="/addproduct" element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>
        <Route path="/manage" element={
          <RequireAuth>
            <ManageProducts></ManageProducts>
          </RequireAuth>
        }></Route>
        <Route path="/myitems" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
