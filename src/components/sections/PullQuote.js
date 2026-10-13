import Image from "next/image";
import { pullQuote } from "@/lib/content";
import { Container, Reveal } from "@/components/ui";

/**
 * Pull-quote panel — the reference sets a short statement on a dark full-bleed
 * band with a faint image wash. We keep the band, swap the colour for the new
 * primary, and keep the wash subtle enough for AA contrast.
 */
export default function PullQuote() {
  return (
    <section className="relative isolate overflow-hidden bg-primary">
      <Image
        src={pullQuote.image.src}
        alt=""
        fill
        sizes="100vw"
        className="img-warm -z-10 object-cover opacity-25"
      />
      {/* Legibility wash: primary over the photo keeps the text well above AA */}
      <div className="absolute inset-0 -z-10 bg-primary/85" />

      <Container className="py-20 md:py-28 lg:py-32">
        <Reveal>
          <blockquote className="max-w-[26ch] font-display text-[length:var(--text-h2)] italic leading-[1.15] text-inverse">
            {pullQuote.text}
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}
