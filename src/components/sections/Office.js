import Image from "next/image";
import { office } from "@/lib/content";
import { ButtonLink, Container, Eyebrow, Heading, Icon, Reveal } from "@/components/ui";

/**
 * Our Office — new section (not in the reference). It borrows the reference's
 * vocabulary: sand background, editorial heading, one large image with a
 * secondary image, and the same text-button style. Deliberately no invented
 * parking, transit, accessibility or amenity details.
 */
export default function Office() {
  return (
    <section id="office" className="scroll-mt-24 overflow-x-clip bg-surface">
      <Container className="py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 lg:pr-10">
            <Reveal>
              <Eyebrow>{office.eyebrow}</Eyebrow>
            </Reveal>

            <Reveal delay={80}>
              <Heading level={2} className="mt-6" lead={office.titleLead} accent={office.titleAccent} />
            </Reveal>

            <div className="mt-8 flex flex-col gap-5">
              {office.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={140 + i * 80}>
                  <p className="max-w-[46ch] text-ink/80">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            {/* Address and formats, exactly as given in the profile */}
            <Reveal delay={220}>
              <dl className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-2">
                <div>
                  <dt className="eyebrow">{office.details.addressLabel}</dt>
                  <dd className="mt-2 text-[0.95rem] leading-relaxed text-ink">
                    {office.details.address}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">{office.details.sessionsLabel}</dt>
                  <dd className="mt-2 flex flex-col gap-2 text-[0.95rem] leading-relaxed text-ink">
                    {office.details.sessions.map((format) => (
                      <span key={format} className="flex items-start gap-2">
                        <Icon name="check" size={15} className="mt-1.5 shrink-0 text-accent" />
                        {format}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </Reveal>

            {/* Trust row — inline SVG, no icon library */}
            <Reveal delay={280}>
              <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-line pt-8">
                {office.highlights.map((item) => (
                  <li key={item.label} className="flex items-center gap-2.5 text-[0.9rem] text-muted">
                    <Icon name={item.icon} size={20} className="text-primary" />
                    {item.label}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-10">
                <ButtonLink href={office.cta.href} variant="outline">
                  {office.cta.label}
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          {/* One large image + one secondary, staggered like the reference's
              asymmetric image placements */}
          <div className="grid items-start gap-6 sm:grid-cols-5 lg:col-span-7">
            <Reveal className="sm:col-span-3" delay={120}>
              <figure className="relative aspect-3/4 overflow-hidden rounded-card">
                <Image
                  src={office.images[0].src}
                  alt={office.images[0].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 34vw"
                  className="img-warm object-cover"
                />
                <div className="img-tint" />
              </figure>
            </Reveal>

            <Reveal className="sm:col-span-2 sm:mt-14" delay={200}>
              <figure className="relative aspect-4/5 overflow-hidden rounded-card">
                <Image
                  src={office.images[1].src}
                  alt={office.images[1].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 24vw"
                  className="img-warm object-cover"
                />
                <div className="img-tint" />
              </figure>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
