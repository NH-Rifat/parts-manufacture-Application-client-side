import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './pages/Home/Navbar/Navbar';

function App() {
  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
