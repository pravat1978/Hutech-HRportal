import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";

const AttendanceRules = () => {
  const navigate = useNavigate();

  // Redirect to timesheet page
  React.useEffect(() => {
    navigate("/attendance/timesheet");
  }, [navigate]);

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <p>Redirecting to timesheet...</p>
      </div>
    </Layout>
  );
};

export default AttendanceRules;
