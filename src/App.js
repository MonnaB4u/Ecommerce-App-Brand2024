import logo from './logo.svg';
import './App.css';
import Allcomponent from './Component/AllheaderComponent/Allcomponent';

import { BrowserRouter, Route, Routes } from "react-router-dom"

import { createContext, useState } from 'react';
import LoginandReister from './Component/Login/LoginandReister';
import SearchAllcheta from './Component2/SearchAllcheta/SearchAllcheta';
import ProductDetail from './Component/ProductDetails/ProductDetail';
import MyCart from './Component2/MyCart/MyCart';
import CheckOut from './Component2/CheckOut/CheckOut';
import PrivateRoute from './Component/Login/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [order, setOrder] = useState([])
  const [orderJason, setOrderJason] = useState([])
  const [loggedInUser, setLoggedInUser] = useState([]);
  console.log("from App",loggedInUser);

  return (

    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Allcomponent />} />
            <Route path='/login' element={<LoginandReister />} />
            <Route path='/searchAllcheta' element={<SearchAllcheta />} />

            <Route element={<PrivateRoute />}>
              <Route path='/productDetails/:id' element={<ProductDetail />} />
              <Route path='/myCart' element={<MyCart setOrder={setOrder} setOrderJason={setOrderJason} />} />
              <Route path='/checkout' element={<CheckOut order={order} orderJason={orderJason} />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
