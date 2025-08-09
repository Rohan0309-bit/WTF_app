import type { SVGProps } from "react";

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 5H5.2a2.3 2.3 0 0 0-2 2.7l3.2 10.3a2.3 2.3 0 0 0 4.1 0l3.3-10.3A2.3 2.3 0 0 0 12 5Z" />
      <path d="m19 5-3 6" />
      <path d="m16 5-3 6" />
      <path d="M22 5h-2.5" />
      <path d="M19.5 5h-2.5" />
      <path d="M17 5h-2.5" />
    </svg>
  ),
};
