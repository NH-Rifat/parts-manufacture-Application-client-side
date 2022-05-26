import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './pages/Home/Navbar/Navbar';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import Signup from './pages/Login/Signup/Signup';
import OrderModal from './pages/Purchase/OrderModal';
import Purchase from './pages/Purchase/Purchase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders.js/MyOrders';
import MyProfile from './pages/Dashboard/MyProfile/MyProfile';
import AddReview from './pages/Dashboard/AddReview/AddReview';
import Payment from './pages/Dashboard/Payment/Payment';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageProducts from './pages/Dashboard/ManageProducts/ManageProducts';
import ManageAllOrder from './pages/Dashboard/ManageAllOrder/ManageAllOrder';
import RequireAdmin from './pages/Login/RequireAdmin';
import AddProduct from './pages/Dashboard/AddProduct/AddProduct';

function App() {
  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route
          path='/purchase/:productId'
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path='/dashboard'
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route
            path='makeAdmin'
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path='manageProducts'
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path='manageAllOrder'
            element={
              <RequireAdmin>
                <ManageAllOrder></ManageAllOrder>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path='addProduct'
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
        </Route>
      </Routes>

      <OrderModal></OrderModal>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
