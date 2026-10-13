/**
 * Horizontal rhythm for every section: the reference site runs content inside a
 * 24-column fluid grid with a wide gutter. We hold the same idea with a max
 * width plus a matching gutter (see .bleed-* utilities in globals.css).
 */
export default function Container({ as: Tag = "div", wide = false, className = "", children }) {
  return (
    <Tag
      className={`gutter-x mx-auto w-full ${wide ? "max-w-[var(--container-wide)]" : "max-w-[var(--container-site)]"} ${className}`}
    >
      {children}
    </Tag>
  );
}
