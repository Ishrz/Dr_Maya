import { areas } from "@/lib/content";
import { Container, Reveal } from "@/components/ui";

/**
 * Areas list — reproduces the reference's signature pattern: a heading in the
 * left third and two keyword columns in the right two thirds, each row closed
 * by a hairline rule.
 */
export default function Areas() {
  return (
    <section className="bg-bg">
      <Container className="py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <h2 className="text-[length:var(--text-h3)] text-ink">
              {areas.titleLead}
              <em className="italic text-primary-soft">{areas.titleAccent}</em>
            </h2>
          </Reveal>

          <div className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8 lg:gap-x-14">
            {areas.columns.map((column, ci) => (
              <ul key={ci}>
                {column.map((item, i) => (
                  <Reveal
                    as="li"
                    key={item}
                    delay={ci * 60 + i * 40}
                    className="border-b border-line py-4 first:border-t first:border-line"
                  >
                    <span className="font-display text-[1.15rem] text-ink md:text-[1.3rem]">
                      {item}
                    </span>
                  </Reveal>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
