import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

// Lazy load company profile components
const CompanyProfile = lazy(
  () => import("./components/company/CompanyProfile"),
);
const Address = lazy(() => import("./components/company/Address"));
const Department = lazy(() => import("./components/company/Department"));
const Designations = lazy(() => import("./components/company/Designations"));
const Grades = lazy(() => import("./components/company/Grades"));
const Announcements = lazy(() => import("./components/company/Announcements"));
const Policies = lazy(() => import("./components/company/Policies"));
const StatutoryInfo = lazy(() => import("./components/company/StatutoryInfo"));
const CompanyID = lazy(() => import("./components/company/CompanyID"));
const Admins = lazy(() => import("./components/company/Admins"));
const MyPlan = lazy(() => import("./components/company/MyPlan"));

// Lazy load profile components
const Work = lazy(() => import("./components/profile/Work"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Company Profile Routes */}
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/company-profile/address" element={<Address />} />
          <Route path="/company-profile/department" element={<Department />} />
          <Route
            path="/company-profile/designations"
            element={<Designations />}
          />
          <Route
            path="/company-profile/announcements"
            element={<Announcements />}
          />
          <Route path="/company-profile/policies" element={<Policies />} />
          <Route
            path="/company-profile/statutory-info"
            element={<StatutoryInfo />}
          />
          <Route path="/company-profile/company-id" element={<CompanyID />} />
          <Route path="/company-profile/admins" element={<Admins />} />
          <Route path="/company-profile/my-plan" element={<MyPlan />} />
          <Route path="/company-profile/grades" element={<Grades />} />

          {/* Profile Routes */}
          <Route path="/my-profile/work" element={<Work />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
