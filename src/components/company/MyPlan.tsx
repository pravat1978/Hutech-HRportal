import React from "react";
import Layout from "../layout/Layout";
import { Check, AlertCircle, ArrowRight } from "lucide-react";

const MyPlan = () => {
  const currentPlan = {
    name: "Business Pro",
    price: "$49.99",
    billingCycle: "monthly",
    startDate: "January 15, 2023",
    nextBillingDate: "July 15, 2023",
    status: "Active",
    features: [
      "Up to 100 employees",
      "All HR modules",
      "Advanced reporting",
      "API access",
      "Priority support",
      "Custom branding",
    ],
  };

  const plans = [
    {
      id: 1,
      name: "Starter",
      price: "$19.99",
      description: "For small businesses just getting started",
      features: [
        "Up to 25 employees",
        "Basic HR modules",
        "Standard reporting",
        "Email support",
      ],
      popular: false,
    },
    {
      id: 2,
      name: "Business Pro",
      price: "$49.99",
      description: "For growing businesses with advanced needs",
      features: [
        "Up to 100 employees",
        "All HR modules",
        "Advanced reporting",
        "API access",
        "Priority support",
        "Custom branding",
      ],
      popular: true,
      current: true,
    },
    {
      id: 3,
      name: "Enterprise",
      price: "$99.99",
      description: "For large organizations with complex requirements",
      features: [
        "Unlimited employees",
        "All HR modules",
        "Custom reporting",
        "API access",
        "24/7 dedicated support",
        "Custom branding",
        "Single sign-on (SSO)",
        "Advanced security features",
      ],
      popular: false,
    },
  ];

  return (
    <Layout>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold mb-6">My Subscription Plan</h1>

        <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-semibold mb-2">
                Current Plan: {currentPlan.name}
              </h2>
              <div className="text-3xl font-bold text-[#1e2844] mb-4">
                {currentPlan.price}
                <span className="text-sm font-normal text-gray-500">
                  {" "}
                  / month
                </span>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-700 w-40">
                    Billing Cycle:
                  </span>
                  <span className="text-sm text-gray-600 capitalize">
                    {currentPlan.billingCycle}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-700 w-40">
                    Start Date:
                  </span>
                  <span className="text-sm text-gray-600">
                    {currentPlan.startDate}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-700 w-40">
                    Next Billing Date:
                  </span>
                  <span className="text-sm text-gray-600">
                    {currentPlan.nextBillingDate}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-700 w-40">
                    Status:
                  </span>
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {currentPlan.status}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-md font-semibold mb-2">Plan Features:</h3>
                <ul className="space-y-1">
                  {currentPlan.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Check size={16} className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg max-w-xs">
              <div className="flex items-start">
                <AlertCircle size={20} className="text-blue-500 mr-2 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-blue-800 mb-1">
                    Need Help?
                  </h3>
                  <p className="text-xs text-blue-700">
                    Contact our billing support team for any questions about
                    your subscription or to make changes to your plan.
                  </p>
                  <button className="mt-2 text-xs font-medium text-blue-600 hover:text-blue-800">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex space-x-4">
            <button className="bg-[#1e2844] text-white px-4 py-2 rounded-md hover:bg-[#2a3659] transition-colors">
              Manage Billing
            </button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
              Cancel Subscription
            </button>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Available Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white p-6 rounded-lg shadow-sm border ${plan.popular ? "border-blue-500" : "border-gray-200"} relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  Popular
                </div>
              )}
              {plan.current && (
                <div className="absolute top-0 left-0 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-br-lg rounded-tl-lg">
                  Current Plan
                </div>
              )}
              <h3 className="text-lg font-semibold mt-4">{plan.name}</h3>
              <div className="text-2xl font-bold text-[#1e2844] my-2">
                {plan.price}
                <span className="text-sm font-normal text-gray-500">
                  {" "}
                  / month
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{plan.description}</p>

              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm text-gray-600"
                  >
                    <Check size={16} className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full flex items-center justify-center ${plan.current ? "bg-gray-200 cursor-not-allowed text-gray-500" : "bg-[#1e2844] text-white hover:bg-[#2a3659]"} px-4 py-2 rounded-md transition-colors`}
                disabled={plan.current}
              >
                {plan.current ? "Current Plan" : "Upgrade"}
                {!plan.current && <ArrowRight size={16} className="ml-2" />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MyPlan;
