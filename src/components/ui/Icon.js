import { icons } from "@/lib/content";

/**
 * Inline SVG icon. `icons` holds path data in lib/content.js so no icon
 * library is needed. Decorative by default — pass a `title` when the icon is
 * the only label for something.
 */
export default function Icon({ name, size = 22, title, className = "" }) {
  const d = icons[name];
  if (!d) return null;

  const isStroke =
    name === "sun" || name === "screen" || name === "plus" || name === "menu" || name === "check";
  const isArrow = name === "arrow";

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill={isStroke ? "none" : "currentColor"}
      stroke={isStroke ? "currentColor" : "none"}
      strokeWidth={isStroke ? 1.4 : undefined}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      {isArrow ? (
        <>
          <path d="M4 12h14" />
          <path d="M13 6.5 18.5 12 13 17.5" />
        </>
      ) : (
        <path d={d} />
      )}
    </svg>
  );
}
