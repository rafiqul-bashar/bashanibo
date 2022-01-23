import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav/Nav";
import Order from './Components/Pages/Dashboard/ClientPages/Order';
import Pay from './Components/Pages/Dashboard/ClientPages/Pay';
import Review from './Components/Pages/Dashboard/ClientPages/Review';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login/Login';
import NotFound from "./Components/Pages/NotFound";
import Register from './Components/Pages/Register/Register';
import DetailService from "./Components/PriivateRoutes/DetailService";
import PlaceOrder from "./Components/PriivateRoutes/PlaceOrder";
import Products from './Components/Products.js/Products';
import AuthProvider from "./Uti&Hooks/AuthProvider";
import PrivateRoute from './Uti&Hooks/PrivateRoute';
import Dashboard from './Components/Pages/Dashboard/Dashboard';




function App() {

  return (
    <>
      <AuthProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/explore" element={<Products />}></Route>
          <Route path="/details/:id" element={<DetailService/>}></Route>
          <Route path="/order/:id" element={<PrivateRoute> <PlaceOrder/> </PrivateRoute>}></Route>
          <Route path="/dashboard" element={<PrivateRoute> <Dashboard/> </PrivateRoute>}>

          </Route>

        <Route path="*" element={<NotFound/>}/>
        </Routes>
        <footer>
        <Footer/>

        </footer>
      </AuthProvider>
    </>
  );
}

export default App;
