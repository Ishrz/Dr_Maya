import { approach } from "@/lib/content";
import { Container, EditorialLink, Reveal } from "@/components/ui";

/**
 * Approach — the reference's 2x2 grid: heading in the left third, four short
 * entries (title + paragraph + link) filling the right two thirds. No cards or
 * icon circles: the original relies on typography and rules alone.
 */
export default function Approach() {
  return (
    <section id="approach" className="scroll-mt-24 bg-bg">
      <Container className="py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <h2 className="text-[length:var(--text-h3)] text-ink">
              {approach.titleLead}
              <em className="italic text-primary-soft">{approach.titleAccent}</em>
            </h2>
          </Reveal>

          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-8 lg:gap-x-14 lg:gap-y-16">
            {approach.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <article>
                  <h3 className="text-[length:var(--text-h4)] text-ink">{item.title}</h3>
                  <p className="mt-3 max-w-[42ch] text-muted">{item.body}</p>
                  <div className="group mt-5">
                    <EditorialLink href={approach.link.href} className="!text-accent">
                      {approach.link.label}
                    </EditorialLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
