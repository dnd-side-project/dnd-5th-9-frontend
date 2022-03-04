import React from "react";
import { Theme } from "@/foundations";

const Symbol = ({ ...props }) => {
  return (
    <svg
      viewBox="0 0 175 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={Theme.bgColor.primary}
      {...props}
    >
      <path
        d="M128.66 7.64554e-05C118.948 -0.0170313 109.485 3.07751 101.66 8.83008C97.4545 11.9141 92.3752 13.5769 87.16 13.5769C81.9449 13.5769 76.8656 11.9141 72.66 8.83008C64.835 3.07688 55.3724 -0.0177347 45.66 7.64554e-05V7.64554e-05C33.5502 7.64554e-05 21.9364 4.81067 13.3735 13.3736C4.81062 21.9365 0 33.5503 0 45.6601V135.92C0 142.436 2.58864 148.686 7.19641 153.294C11.8042 157.901 18.0536 160.49 24.57 160.49H149.74C156.256 160.49 162.506 157.901 167.114 153.294C171.721 148.686 174.31 142.436 174.31 135.92V45.6601C174.311 39.6644 173.131 33.7272 170.838 28.1875C168.544 22.6478 165.182 17.6142 160.943 13.3742C156.704 9.13413 151.671 5.77069 146.132 3.47593C140.593 1.18118 134.656 7.63116e-05 128.66 7.64554e-05V7.64554e-05Z"
        fill="currentColor"
      />
      <path
        d="M87.1501 132.15C78.0072 132.122 69.0266 129.732 61.0792 125.212C53.1318 120.692 46.4874 114.194 41.7901 106.35C41.2673 105.573 40.9086 104.697 40.7362 103.776C40.5638 102.856 40.5812 101.909 40.7874 100.995C40.9937 100.082 41.3844 99.2196 41.9356 98.4621C42.4868 97.7046 43.1868 97.0677 43.9928 96.5903C44.7989 96.113 45.694 95.8053 46.6231 95.6861C47.5523 95.5669 48.496 95.6386 49.3965 95.8971C50.2969 96.1555 51.1351 96.595 51.8597 97.1888C52.5842 97.7826 53.1798 98.5182 53.6101 99.3503C57.0633 105.17 61.9714 109.991 67.8519 113.34C73.7324 116.688 80.383 118.449 87.1501 118.449C93.9172 118.449 100.568 116.688 106.448 113.34C112.329 109.991 117.237 105.17 120.69 99.3503C121.67 97.8931 123.171 96.8659 124.884 96.4793C126.597 96.0926 128.393 96.3758 129.904 97.2707C131.416 98.1656 132.527 99.6045 133.012 101.293C133.496 102.981 133.317 104.79 132.51 106.35C127.817 114.198 121.174 120.699 113.225 125.22C105.277 129.741 96.2942 132.128 87.1501 132.15V132.15Z"
        fill="white"
      />
    </svg>
  );
};

export default Symbol;
