import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SellerHalamanProduk from "./Pages/SellerHalamanProduk/SellerHalamanProduk";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import InfoPenawaran from "./Pages/InfoPenawaran/InfoPenawaran";
import InfoProduk from "./Pages/InfoProduk/InfoProduk";
import InfoProfile from "./Pages/InfoProfile/InfoProfile";
import DaftarJual from "./Pages/DaftarJual/DaftarJual";
import Disukai from "./Components/Disukai/Disukai";
import AllProduk from "./Components/AllProduk/AllProduk";
import Terjual from "./Components/Terjual/Terjual";
import Wishlist from "./Components/Wishlist/Wishlist";
import Semua from "./Pages/Semua/Semua";
import Notif from "./Pages/Notif/Notif";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import authSlice from "./Features/authSlice";
import Auth from "./Components/Auth/Auth";
import Logout from './Components/NavbarSearch/LogoutButton'
import Loading from "./Components/Loading/Loading";

function App() {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(authSlice.actions.retrieveLocalStorage());
    }
  }, [user, dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<Semua />} />
          <Route path="/notifikasi" element={<Notif />} />
          <Route element={<Auth />}>
            {/* MASUKKAN PROTECTED ROUTE DISINI */}
            <Route path="/info-penawaran" element={<InfoPenawaran />} />
            <Route path="/info-profil" element={<InfoProfile />} />
            <Route path="/info-produk" element={<InfoProduk />} />
            <Route path="/produk" element={<SellerHalamanProduk />} />
            <Route path="/daftar-jual" element={<DaftarJual />}>
              <Route index element={<AllProduk />} />
              <Route path="disukai" element={<Disukai />} />
              <Route path="terjual" element={<Terjual />} />
              <Route path="wishlist" element={<Wishlist />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
