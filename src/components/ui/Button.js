import { Icon } from ".";

/**
 * The reference site uses underlined, uppercase text buttons as its primary
 * action style, plus a bordered pill in the header. Both are kept.
 */
export function ButtonLink({ href, children, variant = "primary", className = "", withArrow = false }) {
  const styles = {
    primary: "btn-primary",
    accent: "btn-accent",
    outline: "btn-outline",
    "outline-light": "btn-outline-light",
  }[variant];

  return (
    <a href={href} className={`btn ${styles} ${className}`}>
      {children}
      {withArrow ? <Icon name="arrow" size={16} /> : null}
    </a>
  );
}

export function EditorialLink({ href, children, onDark = false, className = "" }) {
  return (
    <a
      href={href}
      className={`btn-editorial ${onDark ? "text-inverse" : "text-ink"} ${className}`}
    >
      {children}
      <Icon name="arrow" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}
