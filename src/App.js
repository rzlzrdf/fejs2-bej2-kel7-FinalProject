import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import SellerHalamanProduk from './Pages/SellerHalamanProduk/SellerHalamanProduk';
import Login from './Pages/LoginRegister/Login';
import Register from './Pages/LoginRegister/Register';
import InfoPenawaran from "./Pages/InfoPenawaran/InfoPenawaran";

import InfoProduk  from './Pages/InfoProduk/InfoProduk';
import InfoProfile from './Pages/InfoProfile/InfoProfile';
import DaftarJual from './Pages/DaftarJual/DaftarJual'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="/daftar-jual" element={<DaftarJual />} />
            <Route path="/halaman-produk" element={<SellerHalamanProduk />} />
            <Route path="/info-penawaran" element={<InfoPenawaran />} />
            <Route path="/info-profil" element={<InfoProduk />} />
            <Route path="/info-produk" element={<InfoProfile />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
