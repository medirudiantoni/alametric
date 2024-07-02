import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Quiz from "./pages/quiz";
import Rank from "./pages/rank";
import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./context/protectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <div className="w-screen h-screen bg-violet-300 flex justify-center">
        <div className="w-full h-full sm:max-w-sm bg-primary overflow-hidden">
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/level/:level" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
              <Route path="/rank" element={<ProtectedRoute><Rank /></ProtectedRoute>} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;
