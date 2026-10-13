import Image from "next/image";
import { contactCta } from "@/lib/content";
import { ButtonLink, Container, Eyebrow, Heading, Reveal } from "@/components/ui";

/**
 * Closing CTA — the reference's booking block: a narrow image strip bleeding
 * off the left, a centred-ish text column, and a larger image bleeding off the
 * right.
 */
export default function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-24 overflow-x-clip bg-bg">
      <Container
        wide
        className="grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:gap-8"
      >
        <Reveal className="lg:col-span-2 lg:py-4" aria-hidden="true">
          <figure className="relative aspect-16/9 overflow-hidden rounded-card lg:aspect-2/5">
            <Image
              src={contactCta.stripImage.src}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 14vw"
              className="img-warm object-cover"
            />
            <div className="img-tint" />
          </figure>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-4">
          <Reveal>
            <Eyebrow>{contactCta.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <Heading level={2} className="mt-6 max-w-[20ch]" lead={contactCta.title} accent={contactCta.titleAccent} />
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-7 max-w-[52ch] text-muted">{contactCta.body}</p>
          </Reveal>

          <Reveal delay={200}>
            <div id="contact-details" className="mt-9 scroll-mt-32">
              <ButtonLink href="#top" variant="accent" withArrow>
                {contactCta.cta.label}
              </ButtonLink>
              <p className="mt-5 max-w-[40ch] text-small text-muted">{contactCta.pending}</p>
            </div>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-3 lg:col-start-10 lg:py-4" delay={120}>
          <figure className="relative aspect-16/10 overflow-hidden rounded-card lg:aspect-2/3">
            <Image
              src={contactCta.tallImage.src}
              alt={contactCta.tallImage.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 22vw"
              className="img-warm object-cover"
            />
            <div className="img-tint" />
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
