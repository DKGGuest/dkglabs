import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
const Home = lazy(() => import("./pages/Home"));
const Healthcare = lazy(() => import("./pages/Healthcare.jsx"));
const FinanceDetails = lazy(() => import("./pages/FinanceDetails"));
const ManufacturingAndAutomotiveDetails = lazy(() => import("./pages/ManufacturingAndAutomotiveDetails"));
const EducationDetails = lazy(() => import("./pages/EducationDetails"));
const EntertainmentAndMediaDetails = lazy(() => import("./pages/EntertainmentAndMediaDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/auth" element={<AuthPage/>} />
          <Route path="/" element={<Home />} />
          <Route path="/healthcareDetails" element={<Healthcare />} />
          <Route path="/financeDetails" element={<FinanceDetails />} />
          <Route path="/manufacturingAndAutomotiveDetails" element={<ManufacturingAndAutomotiveDetails />} />
          <Route path="/educationDetails" element={<EducationDetails />} />
          <Route path="/entertainmentAndMediaDetails" element={<EntertainmentAndMediaDetails />} />
          <Route path="*" element={<NotFound />} />
        </Suspense>
      </Routes>
    </Router>
  );
};

export default App;
