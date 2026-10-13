import Image from "next/image";
import { about } from "@/lib/content";
import { Container, EditorialLink, Eyebrow, Heading, Reveal } from "@/components/ui";

/**
 * About / how we work — the reference's sand-coloured section: eyebrow,
 * heading, two columns of body copy, a text button, and a full-height image
 * bleeding off the right edge. Here the image is Maya's portrait.
 */
export default function About() {
  return (
    <section id="about" className="scroll-mt-24 overflow-x-clip bg-surface">
      <Container
        wide
        className="grid gap-10 py-20 md:py-24 lg:grid-cols-12 lg:gap-8 lg:py-28"
      >
        <div className="lg:col-span-9 lg:pr-10">
          <Reveal>
            <Eyebrow>{about.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal delay={80}>
            <Heading level={2} className="mt-6 max-w-[20ch]" lead={about.title} accent={about.titleAccent} />
          </Reveal>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:gap-12">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="max-w-[46ch] text-ink/80">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={180}>
            <div className="group mt-10">
              <EditorialLink href={about.cta.href}>{about.cta.label}</EditorialLink>
            </div>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-3" delay={120}>
          <figure className="relative aspect-2/3 overflow-hidden rounded-card lg:aspect-auto lg:h-full lg:rounded-none">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 26vw"
              className="img-warm object-cover"
            />
          </figure>
          <figcaption className="mt-4 text-[0.8rem] tracking-wide text-muted lg:mt-5">
            {about.caption}
          </figcaption>
        </Reveal>
      </Container>
    </section>
  );
}
