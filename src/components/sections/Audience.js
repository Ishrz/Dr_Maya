import Image from "next/image";
import { audience } from "@/lib/content";
import { Container, Heading, Reveal } from "@/components/ui";

/**
 * "Who I work with" — the reference's three-column image grid: one heading,
 * then three equal columns, each a portrait image above a title and paragraph.
 */
export default function Audience() {
  return (
    <section id="services" className="bg-bg scroll-mt-24">
      <Container className="pb-20 md:pb-28">
        <Reveal>
          <Heading level={2} lead={audience.titleLead} accent={audience.titleAccent} />
        </Reveal>

        <ul className="mt-12 grid gap-12 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-8">
          {audience.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 90} className="group">
              <div className="relative aspect-3/4 overflow-hidden rounded-card">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                  className="img-warm object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.03]"
                />
                <div className="img-tint" />
              </div>

              <h3 className="mt-7 text-[length:var(--text-h4)] text-ink">{item.title}</h3>
              <p className="mt-3 max-w-[38ch] text-muted">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
