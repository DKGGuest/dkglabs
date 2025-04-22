import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Sitemap from "./pages/Sitemap.jsx";
import Robots from "./pages/Robots.jsx";
import "./index.css";
import Healthcare from "./pages/Healthcare.jsx";
import Finance from "./pages/Finance.jsx";
import ManufacturingAndAutomotive from "./pages/Manufacturing & Automotive.jsx";
import Education from "./pages/Education.jsx";
import EntertainmentAndMedia from "./pages/Entertainment & Media.jsx";
import ExploreMorePage from "./pages-dummy/ExploreMorePage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import AuthPage from "./pages/AuthPage";
import AIService from "./pages/AIService";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/ai-consulting" element={<AIService />} />
                <Route path="/healthcareDetails" element={<Healthcare />} />
                <Route path="/financeDetails" element={<Finance />} />
                <Route path="/manufacturingAndAutomotiveDetails" element={<ManufacturingAndAutomotive />} /> 
                <Route path="/educationDetails" element={<Education />} />
                <Route path="/entertainmentAndMediaDetails" element={<EntertainmentAndMedia />} />
                <Route path="/exploreMore" element={<ExploreMorePage />} />
                <Route path="/sitemap.xml" element={<Sitemap />} />
                <Route path="/robots.txt" element={<Robots />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);   