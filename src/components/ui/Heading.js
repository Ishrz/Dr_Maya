/**
 * Section headings across the site are two-tone: a lead line and an italic
 * accent phrase (Fraunces italic, like the reference's <em> inside headings).
 */
export default function Heading({ level = 2, lead, accent, tail, className = "", id }) {
  const Tag = `h${level}`;
  const sizes = {
    1: "text-[length:var(--text-display)]",
    2: "text-[length:var(--text-h2)]",
    3: "text-[length:var(--text-h3)]",
    4: "text-[length:var(--text-h4)]",
  };

  return (
    <Tag id={id} className={`${sizes[level]} leading-tight text-ink ${className}`}>
      {lead ? lead.trimEnd() : null}
      {accent ? (
        <>
          {" "}
          <em className="font-display italic text-primary-soft">{accent}</em>
        </>
      ) : null}
      {tail}
    </Tag>
  );
}
