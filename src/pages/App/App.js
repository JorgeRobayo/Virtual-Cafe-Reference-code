import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service.js";
import NewOrderPage from "../NewOrderPage/NewOrderPage.jsx";
import AuthPage from "../AuthPage/AuthPage.jsx";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage.jsx";
import Navbar from "../../components/Navbar.jsx";


function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div className="App">

      {user ? (
        <>
          <Navbar user={user} setUser={setUser} />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
            <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser}/>} />

          </Routes>
        </>
      ) : (
        <AuthPage user={user} setUser={setUser}/>
      )}
    </div>
  );
}

export default App;
