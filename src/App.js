import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Theme } from "./Theme";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ListProduk from "./pages/ListProduk";
import DetailProduk from "./pages/DetailProduk";
import Wishlist from "./pages/Wishlist";
import ListTransaksi from "./pages/ListTransaksi";
import DetailTransaksi from "./pages/DetailTransaksi";
import Profile from "./pages/Profile";
import Penawaran from "./pages/Penawaran";
import AddProduk from "./pages/AddProduk";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/profile/:id' element={<Profile />} />

            <Route path="/list-produk" >
              <Route index element={<ListProduk />} />
              <Route path=":id" element={<DetailProduk />} />
              <Route path="add" element={<AddProduk />} />
            </Route>
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/list-transaksi" >
              <Route index element={<ListTransaksi />} />
              <Route path=":id" element={<DetailTransaksi />} />
            </Route>
            <Route path="/penawaran/:id" element={<Penawaran />} />

          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
