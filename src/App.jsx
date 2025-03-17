import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home    from './views/Home/Home';
import Profile from './views/Profile/Profile';
import Signin  from './views/Signin/Signin';
import Signup  from './views/Signup/Signup';
import { useState } from 'react';
import AppContext from './AppContext';
import Admin from './views/Admin/Admin';
import Category from './views/Category/Category';
import Shop from './views/Shop/Shop';
import Layout from './views/Layout/Layout';
import Product from './views/Product/Product';

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const request = (url, conf) => new Promise( (resolve, reject) => {
    const backHost = "http://localhost:8080/Java-Web-221";
    // Якщо в контексті є токен, а в параметрах conf немає, то додаємо з контексту
    // console.log("request " + accessToken);
    if( accessToken != null /* && typeof(accessToken.accessTokenId) != 'undefined' */ ) {
      if( ! conf ) {
        conf = {};
      }
      if( ! conf.headers ) {
        conf.headers = {};
      }
      if( ! conf.headers["Authorization"] ) {
        conf.headers["Authorization"] = "Bearer " + accessToken; // accessToken.accessTokenId;
      }
    }
    fetch( backHost + url, conf )
    .then( r=> r.json() )
    .then( j => {
      if( j.status < 300 ) {
        resolve( j.data );
      }
      else {
        reject( j );
      }
    })
    .catch( reject );
  });

  return <AppContext.Provider value={{user, setUser, cart, setCart, request, accessToken, setAccessToken}}> 
    <Router>
      <Routes>
        <Route path="/"  element={<Layout />}>
          <Route index                element={<Home     />} />
          <Route path="profile"       element={<Profile  />} />
          <Route path="signup"        element={<Signup   />} />
          <Route path="signin"        element={<Signin   />} />
          <Route path="admin"         element={<Admin    />} />
          <Route path="category/:id"  element={<Category />} />
          <Route path="product/:id"   element={<Product  />} />
          <Route path="shop"          element={<Shop     />} />
        </Route>
      </Routes>
    </Router>
  </AppContext.Provider>;

}

export default App
