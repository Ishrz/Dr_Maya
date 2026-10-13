import Accordion from "@/components/ui/Accordion";
import { faqs } from "@/lib/content";
import { Container, Eyebrow, Heading, Reveal } from "@/components/ui";

/**
 * FAQs — the reference homepage has no accordion (its FAQ lives on a separate
 * page), so this block is an addition. It uses the same heading scale and
 * hairline rhythm as the rest of the site.
 */
export default function Faqs() {
  return (
    <section id="faqs" className="scroll-mt-24 bg-bg">
      <Container className="py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>FAQs</Eyebrow>
              <Heading level={2} className="mt-6" lead={faqs.titleLead} accent={faqs.titleAccent} />
              <p className="mt-6 max-w-[34ch] text-muted">
                Short answers to the things people usually want to know before they get in
                touch.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8 lg:pl-8">
            <Reveal delay={100}>
              <Accordion items={faqs.items} />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
