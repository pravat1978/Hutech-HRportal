import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";

const HolidayCalendarRedirect = () => {
  const navigate = useNavigate();

  // Redirect to the enhanced holiday calendar page
  useEffect(() => {
    navigate("/leave/holiday-calendar");
  }, [navigate]);

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <p>Redirecting to Holiday Calendar...</p>
      </div>
    </Layout>
  );
};

export default HolidayCalendarRedirect;
