import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from "react-router-dom";
import POS from "./pages/POSPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProtectedRoute from "./Routes/ProtectedRoutes.jsx";
import AdminLayout from "./Layouts/AdminLayout.jsx";
import {AuthProvider} from "./Contexts/AuthContext.jsx";
import StorePage from "./pages/StorePage.jsx";
import POSPage from "./pages/POSPage.jsx";
import Login from "./pages/LoginPg.jsx";
import Dashboard from "./pages/Dashbord.jsx";
import BandManagement from "./pages/Admin.jsx";
import ProfileSettings from "./pages/profile.jsx";
import Stock from "./pages/Stock.jsx";
import Setting from "./pages/Setting.jsx";
import KitchenDashboard from "./pages/KitchenDashboard.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/dw" element={<ProfileSettings/>}></Route>
            <Route path="/kitchen" element={<KitchenDashboard />}></Route>
            <Route path="/dd" element={<BandManagement/>}></Route>
            <Route path="/stock" element={<Stock />}></Route>
            <Route path="/setting" element={<Setting />}></Route>
            <Route path="/see" element={<StorePage/>}></Route>
            <Route path="/pos" element={<POSPage/>}></Route>
            {/* Customer routes */}
            <Route element={<ProtectedRoute allowedRole="cashier" />}>
                <Route path="/cashier" element={<AdminLayout />}>
                    <Route index element={<POS />} />
                </Route>
            </Route>
            <Route element={<AdminLayout />}>

            </Route>
        </Routes>
    </>
  )
}

export default App
