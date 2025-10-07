import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Settings from "./components/Settings";
import Login from "./components/Login";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Hospital from "./components/Hospital";
import ViralIllness from "./components/ViralIllness";
import Helpline from "./components/Helpline";
import Schemes from "./components/Schemes";
import FAQ from "./components/FAQ";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      {/* Login */}
      <Route path="/login" element={<Login setUser={setUser} />} />

      {/* Authenticated layout */}
      <Route
        path="/"
        element={
          user ? (
            <div className="h-screen bg-[#f1f1f1] flex flex-col ">
              <Header user={user} />

              {/* Main scrollable content */}
              <div className="flex-1 p-3 overflow-y-auto scroll-smooth">
                <MainContent />
              </div>

              {/* Footer / Bottom Navigation */}
              <div>
                <Footer />
              </div>
            </div>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Settings */}
      <Route
        path="/setting"
        element={
          user ? <Settings user={user} /> : <Navigate to="/login" replace />
        }
      />
      <Route path="/hospi" element={<Hospital />} />
      <Route path="/viral" element={<ViralIllness />} />
      <Route path="/helpline" element={<Helpline />} />
      <Route path="/schemes" element={<Schemes />} />
      <Route path="/FAQ" element={<FAQ/>} />

      <Route path="*" element={<NotFound />} />
      <Route
        path="/profile"
        element={
          user ? <Profile user={user} /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
}

export default App;

// bg-[#f1f1f1]
