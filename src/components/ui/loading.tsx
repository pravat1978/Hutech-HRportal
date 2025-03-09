import React from "react";

interface LoadingProps {
  size?: "small" | "medium" | "large";
  color?: string;
  text?: string;
  fullPage?: boolean;
}

const Loading = ({
  size = "medium",
  color = "#1e2844",
  text = "Loading...",
  fullPage = false,
}: LoadingProps) => {
  const sizeMap = {
    small: {
      spinner: "h-6 w-6",
      text: "text-sm",
    },
    medium: {
      spinner: "h-10 w-10",
      text: "text-base",
    },
    large: {
      spinner: "h-16 w-16",
      text: "text-lg",
    },
  };

  const spinnerSize = sizeMap[size].spinner;
  const textSize = sizeMap[size].text;

  const content = (
    <div className="flex flex-col items-center justify-center">
      <div className={`${spinnerSize} animate-spin`}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
      {text && <p className={`mt-4 ${textSize} font-medium`}>{text}</p>}
    </div>
  );

  if (fullPage) {
    return (
      <div
        className="fixed inset-0 flex items-center justify-center bg-white z-50"
        style={{ color }}
      >
        {content}
      </div>
    );
  }

  return <div style={{ color }}>{content}</div>;
};

export default Loading;
