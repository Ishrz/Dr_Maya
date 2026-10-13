import Image from "next/image";
import { hero } from "@/lib/content";
import { ButtonLink, Container, Eyebrow, Heading, Reveal } from "@/components/ui";

/**
 * Hero — clone of the reference's opening block: a tall image on the left, an
 * eyebrow / h1 / subtext / CTA column on the right, plus a narrow image strip
 * bleeding off the right edge. The strip is desktop-only because the reference
 * hides it on mobile.
 */
export default function Hero() {
  return (
    <section className="relative overflow-x-clip bg-bg">
      <Container
        wide
        className="grid items-center gap-10 py-12 md:py-16 lg:grid-cols-12 lg:gap-8 lg:py-20"
      >
        <Reveal className="lg:col-span-5 lg:pr-6">
          <div className="relative aspect-4/5 overflow-hidden rounded-card">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="img-warm object-fit"
            />
            <div className="img-tint" />
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7 lg:py-8 lg:pl-6">
          <Reveal delay={80}>
            <Eyebrow className="max-w-[34ch]">{hero.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={140}>
            <Heading level={1} className="mt-6 max-w-[14ch]" lead={hero.titleLead} accent={hero.titleAccent} tail={hero.titleTail} />
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 max-w-[52ch] text-muted">{hero.subtitle}</p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <ButtonLink href={hero.primaryCta.href} variant="accent" withArrow>
                {hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={hero.secondaryCta.href} variant="outline">
                {hero.secondaryCta.label}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
