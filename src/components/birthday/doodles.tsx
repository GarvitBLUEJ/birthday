import type { CSSProperties } from "react";

export function Heart({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg
      className={className}
      style={style}
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M11 17.5C11 17.5 2.2 12.2 2.2 6.9C2.2 4.4 4.1 2.7 6.4 2.7C8 2.7 9.4 3.5 11 5.3C12.6 3.5 14 2.7 15.6 2.7C17.9 2.7 19.8 4.4 19.8 6.9C19.8 12.2 11 17.5 11 17.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StarBurst({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg
      className={className}
      style={style}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
    >
      <path
        d="M9 1.2v15.6M1.2 9h15.6M3.4 3.4l11.2 11.2M14.6 3.4 3.4 14.6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ScribbleArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="78"
      height="36"
      viewBox="0 0 78 36"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 22c18-16 38-18 62-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M56 8c6 4 10 8 12 14-6-1-12-1-16 1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
