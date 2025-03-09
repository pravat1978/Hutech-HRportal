import { Suspense, lazy, useState, useEffect } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import AppLoading from "./components/ui/app-loading";

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

// Lazy load employee components
const EmployeeOnboarding = lazy(
  () => import("./components/employee/EmployeeOnboarding"),
);

// Lazy load directory component
const Directory = lazy(() => import("./components/directory/Directory"));

// Lazy load attendance components
const AttendanceLogs = lazy(
  () => import("./components/attendance/AttendanceLogs"),
);
const AttendanceTimesheet = lazy(
  () => import("./components/attendance/AttendanceTimesheet"),
);
const AttendanceRules = lazy(
  () => import("./components/attendance/AttendanceRules"),
);

// Lazy load profile components
const Work = lazy(() => import("./components/profile/Work"));
const Team = lazy(() => import("./components/profile/Team"));
const Education = lazy(() => import("./components/profile/Education"));
const Family = lazy(() => import("./components/profile/Family"));
const Documents = lazy(() => import("./components/profile/Documents"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate app initialization/loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <AppLoading />;
  }

  return (
    <Suspense fallback={<AppLoading />}>
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

          {/* Employee Routes */}
          <Route path="/employee-onboarding" element={<EmployeeOnboarding />} />
          <Route path="/directory" element={<Directory />} />

          {/* Attendance Routes */}
          <Route path="/attendance/logs" element={<AttendanceLogs />} />
          <Route
            path="/attendance/timesheet"
            element={<AttendanceTimesheet />}
          />
          <Route path="/attendance/rules" element={<AttendanceRules />} />

          {/* Profile Routes */}
          <Route path="/my-profile/work" element={<Work />} />
          <Route path="/my-profile/team" element={<Team />} />
          <Route path="/my-profile/education" element={<Education />} />
          <Route path="/my-profile/family" element={<Family />} />
          <Route path="/my-profile/documents" element={<Documents />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
