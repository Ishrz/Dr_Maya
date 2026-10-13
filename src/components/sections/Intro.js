import Image from "next/image";
import { intro } from "@/lib/content";
import { Container, Heading, Reveal } from "@/components/ui";

/**
 * Intro — mirrors the reference's second block: a heading and two text columns
 * on the left, a full-height portrait image pinned to the right edge.
 */
export default function Intro() {
  return (
    <section className="overflow-x-clip bg-bg">
      <Container
        wide
        className="grid gap-10 pb-20 pt-8 md:pb-24 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-16"
      >
        <div className="lg:col-span-8 lg:pr-10">
          <Reveal>
            <Heading level={2} className="max-w-[22ch]" lead={intro.title} accent={intro.titleAccent} />
          </Reveal>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:gap-12">
            {intro.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="max-w-[46ch] text-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="lg:col-span-4" delay={120}>
          <figure className="relative aspect-2/3 overflow-hidden rounded-card lg:aspect-auto lg:h-full lg:rounded-none">
            <Image
              src={intro.image.src}
              alt={intro.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 32vw"
              className="img-warm object-cover"
            />
            <div className="img-tint" />
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
