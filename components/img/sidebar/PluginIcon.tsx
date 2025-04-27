import * as React from "react";
const PluginIcon = (props) => (
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
export default PluginIcon;

