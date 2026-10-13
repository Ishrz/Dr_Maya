import Image from "next/image";
import { hero } from "@/lib/content";
import { ButtonLink, Container, Eyebrow, Heading, Reveal } from "@/components/ui";

/**
 * Hero — clone of the reference's opening block: a tall image on the left and an
 * eyebrow / h1 / subtext / CTA column on the right.
 *
 * The section is sized against the viewport rather than the image: the image is
 * capped to a share of `100dvh` so the heading and both buttons always land
 * above the fold on a laptop, instead of pushing them off-screen.
 */
export default function Hero() {
  return (
<section className="overflow-x-clip bg-bg md:flex md:min-h-[calc(100dvh-var(--header-h))] md:items-center">
      <Container
        wide
        className="grid gap-7 py-7 md:grid-cols-12 md:gap-8 md:py-12"
      >
        <Reveal className="md:col-span-5 md:pr-4">
          <div className="relative aspect-16/10 overflow-hidden rounded-card sm:aspect-4/5 md:aspect-auto md:h-[min(62dvh,36rem)]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 767px) 100vw, 40vw"
              className="img-warm object-cover"
            />
            <div className="img-tint" />
          </div>
        </Reveal>

        <div className="md:col-span-7 md:col-start-6 md:py-6 md:pl-4">
          <Reveal delay={80}>
            <Eyebrow className="max-w-[34ch]">{hero.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={140}>
            <Heading
              level={1}
              className="mt-4 max-w-[18ch]"
              lead={hero.titleLead}
              accent={hero.titleAccent}
              tail={hero.titleTail}
            />
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 max-w-[54ch] text-muted">{hero.subtitle}</p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
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