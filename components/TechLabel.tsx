interface TechLabelProps {
  children: React.ReactNode;
  variant?: "blue" | "green" | "orange" | "neutral";
}

export default function TechLabel({
  children,
  variant = "neutral",
}: TechLabelProps) {
  return (
    <span className={`tech-label tech-label--${variant}`}>{children}</span>
  );
}
