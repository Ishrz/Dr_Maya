import Image from "next/image";
import { statement } from "@/lib/content";
import { Container, Heading, Reveal } from "@/components/ui";

/**
 * Statement — the reference's landscape-image-plus-text block: a wide image on
 * the left running to the left edge, text on the right, bottom-aligned.
 */
export default function Statement() {
  return (
    <section className="overflow-x-clip bg-bg">
      <Container
        wide
        className="grid items-end gap-10 py-20 md:py-24 lg:grid-cols-12 lg:gap-8 lg:py-0"
      >
        <Reveal className="lg:col-span-7 lg:py-20">
          <figure className="relative aspect-16/10 overflow-hidden rounded-card lg:aspect-3/2">
            <Image
              src={statement.image.src}
              alt={statement.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="img-warm object-cover"
            />
            <div className="img-tint" />
          </figure>
        </Reveal>

        <Reveal className="lg:col-span-5 lg:pb-24" delay={120}>
          <Heading level={2} lead={statement.title} accent={statement.titleAccent} />
        </Reveal>
      </Container>
    </section>
  );
}
