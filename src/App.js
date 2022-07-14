import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import SellerHalamanProduk from './Pages/SellerHalamanProduk/SellerHalamanProduk';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import InfoPenawaran from "./Pages/InfoPenawaran/InfoPenawaran";
import InfoProduk  from './Pages/InfoProduk/InfoProduk';
import InfoProfile from './Pages/InfoProfile/InfoProfile';
import DaftarJual from './Pages/DaftarJual/DaftarJual'
import Disukai from './Components/Disukai/Disukai';
import AllProduk from './Components/AllProduk/AllProduk';
import Terjual from './Components/Terjual/Terjual';
import Wishlist from './Components/Wishlist/Wishlist';
import Semua from './Pages/Semua/Semua';
import Notif from './Pages/Notif/Notif';
import TestPage from './Pages/TestPage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/all' element={<Semua />} />
            <Route path='/notifikasi' element={<Notif />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="/daftar-jual" element={<DaftarJual />}>
              {/* <Route path='/diminati' element={<contohdiminati />} />ntar taro sini routing nya ya dil...
              <Route path='/terjual' element={<contohterjual />} />ntar taro sini routing nya ya dil... */}
              <Route path='' index element={<AllProduk />} />
              <Route path='disukai' element={<Disukai />} />
              <Route path='terjual' element={<Terjual />} />
              <Route path='wishlist' element={<Wishlist />} />
            </Route>
            <Route path="/produk" element={<SellerHalamanProduk />} />
            <Route path="/info-penawaran" element={<InfoPenawaran />} />
            <Route path="/info-profil" element={<InfoProfile />} />
            <Route path="/info-produk" element={<InfoProduk />} />
            <Route path='/tes' element={<TestPage/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
