import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from "react-router-dom";
import POS from "./pages/POS.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProtectedRoute from "./Routes/ProtectedRoutes.jsx";
import AdminLayout from "./Layouts/AdminLayout.jsx";
import {AuthProvider} from "./Contexts/AuthContext.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
            <Route path="/" element={<LoginPage/>}></Route>
            {/* Customer routes */}
            <Route element={<ProtectedRoute allowedRole="cashier" />}>
                <Route path="/cashier" element={<AdminLayout />}>
                    <Route index element={<POS />} />
                </Route>
            </Route>
        </Routes>
    </>
  )
}

export default App
