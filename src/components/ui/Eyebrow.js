/**
 * Small-caps label above a heading. The reference site sets these in uppercase
 * Muli with generous tracking; we keep the gesture in the body font.
 */
export default function Eyebrow({ children, className = "", onDark = false }) {
  return (
    <p className={`eyebrow ${onDark ? "text-inverse/75" : ""} ${className}`}>{children}</p>
  );
}
