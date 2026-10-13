import Link from "next/link";
import { contact, footer } from "@/lib/content";
import { Container, Icon } from "@/components/ui";

/**
 * Footer follows the reference: wordmark + blurb on the left, link columns and
 * a contact block on the right, then a slim full-bleed bar underneath.
 */
export default function Footer() {
  return (
    <footer className="bg-surface">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="font-display text-[1.7rem] leading-tight text-ink">
              {footer.blurb}
            </p>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.heading} aria-label={column.heading} className="lg:col-span-2">
              <h2 className="eyebrow mb-5">{column.heading}</h2>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="link-underline text-[0.95rem] text-ink/80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:col-span-3">
            <h2 className="eyebrow mb-5">{footer.contactHeading}</h2>
            <address className="not-italic text-[0.95rem] leading-relaxed text-ink/80">
              {contact.addressLine1}
              <br />
              {contact.addressLine2}
            </address>
            <ul className="mt-4 flex flex-col gap-2 text-[0.95rem] text-ink/80">
              {contact.formats.map((format) => (
                <li key={format} className="flex items-start gap-2.5">
                  <Icon name="check" size={16} className="mt-1.5 shrink-0 text-accent" />
                  {format}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Slim bar, echoing the reference's coloured legal strip */}
      <div className="bg-primary">
        <Container className="flex flex-col gap-2 py-5 text-[0.8rem] text-inverse/80 md:flex-row md:items-center md:justify-between">
          <p>{footer.copyright}</p>
          <p className="text-inverse/75">{footer.legal}</p>
        </Container>
      </div>
    </footer>
  );
}
