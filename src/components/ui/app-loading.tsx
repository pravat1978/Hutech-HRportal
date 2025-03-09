import React from "react";
import Loading from "./loading";

const AppLoading = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="w-full max-w-md mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <span className="text-[#1e2844]">Hutech</span>
            <span className="text-orange-500">HR</span>
          </h1>
          <p className="text-gray-500">Human Resource Management System</p>
        </div>

        <Loading size="large" text="Loading application..." />

        <div className="mt-12 text-sm text-gray-400">
          <p>© 2023 Humantech Solutions India Pvt. Ltd.</p>
        </div>
      </div>
    </div>
  );
};

export default AppLoading;
