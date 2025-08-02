'use client'

interface WicketIconProps {
  className?: string;
}

export const WicketIcon = ({ className = "h-5 w-5" }: WicketIconProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      {/* Stumps */}
      <line x1="8" y1="6" x2="8" y2="18" strokeLinecap="round" />
      <line x1="12" y1="6" x2="12" y2="18" strokeLinecap="round" />
      <line x1="16" y1="6" x2="16" y2="18" strokeLinecap="round" />
      
      {/* Bails */}
      <path d="M7 6 L17 6" strokeLinecap="round" />
      <path d="M6 5 L18 5" strokeLinecap="round" />
    </svg>
  );
}; 