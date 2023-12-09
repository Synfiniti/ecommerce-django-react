import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminPage from "./pages/AdminPage";
import AddProductPage from "./pages/AddProductPage";
import { PrivateRoute } from "./components/PrivateRoute";
import EditProductPage from "./pages/EditProductPage";
import SoloProduct from "./pages/SoloProduct";
import CatePage from "./pages/CatePage";
import SearchByCate from "./pages/SearchByCate";
import CartPage from "./pages/CartPage";
import UserProfile from "./pages/UserProfile";
import SoloOrder from "./pages/SoloOrder";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />}/>
        <Route path="register" element={<RegisterPage />}/>
        <Route index element={<HomePage />}/>
        <Route path="product/:slug" element={<SoloProduct />}/>
        <Route path="cate" element={<CatePage />}/>
        <Route path="cate/:cate" element={<SearchByCate />}/>
        <Route path="admin" index element={<AdminPage />}/>
        <Route path="admin/add" element={<AddProductPage />}/>
          <Route path="edit/:id" element={<EditProductPage />}/>
          

        <Route element={<PrivateRoute />}>
        <Route path="cart" element={<CartPage />}/>
        <Route path="/profile" element={<UserProfile />}/>
        <Route path="order/:id" element={<SoloOrder />}/>

        </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
