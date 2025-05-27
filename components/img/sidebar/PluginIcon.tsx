import * as React from "react";

interface PluginIconProps {
  isActive?: boolean;
  className?: string;
}

const PluginIcon = ({ isActive = false, ...props }: PluginIconProps) => {
  if (isActive) {
    // Filled version (active state)
    return (
      <svg
        width={21}
        height={21}
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g clipPath="url(#clip0_153_25365)">
          <path
            d="M20.125 6.125H14.875V0H13.125V6.125H7.875V0H6.125V6.125H0.875V7.875H2.625V12.25C2.625 15.6275 5.37337 18.375 8.75 18.375H9.625V21H11.375V18.375H12.25C15.6266 18.375 18.375 15.6275 18.375 12.25V7.875H20.125V6.125Z"
            fill="#192C69"
          />
        </g>
        <defs>
          <clipPath id="clip0_153_25365">
            <rect width={21} height={21} fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  // Outlined version (inactive state)
  return (
    <svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          d="M19.25 6.125h-4.375V.875a.875.875 0 1 0-1.75 0v5.25h-5.25V.875a.875.875 0 1 0-1.75 0v5.25H1.75a.875.875 0 1 0 0 1.75h.875V10.5c0 4.046 3.068 7.39 7 7.826v1.799a.875.875 0 1 0 1.75 0v-1.799c3.932-.437 7-3.78 7-7.826V7.875h.875a.875.875 0 1 0 0-1.75M16.625 10.5a6.13 6.13 0 0 1-6.125 6.125A6.13 6.13 0 0 1 4.375 10.5V7.875h12.25z"
          fill="#1F1F2D"
          fillOpacity={0.7}
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h21v21H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PluginIcon;

