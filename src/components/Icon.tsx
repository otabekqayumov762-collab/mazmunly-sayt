interface Props {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export type IconName =
  | "globe"
  | "envelope"
  | "pen"
  | "book"
  | "check"
  | "spark"
  | "arrow-right"
  | "arrow-left"
  | "quote"
  | "chevron";

const PATHS: Record<IconName, React.ReactNode> = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  envelope: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pen: (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </>
  ),
  book: (
    <>
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z" />
      <path d="M4 17.5h16" />
    </>
  ),
  check: <path d="m20 6-11 11-5-5" />,
  spark: (
    <path d="M12 3v18M5 7l14 10M19 7 5 17M3 12h18" />
  ),
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  "arrow-left": <path d="M19 12H5M11 6l-6 6 6 6" />,
  quote: (
    <path d="M7 7c-2 1-3 3-3 6h4v-6H7Zm10 0c-2 1-3 3-3 6h4v-6h-1Z" />
  ),
  chevron: <path d="m6 9 6 6 6-6" />,
};

export default function Icon({
  name,
  size = 22,
  className = "",
  strokeWidth = 1.5,
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
