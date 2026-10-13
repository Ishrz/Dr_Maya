import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Areas from "@/components/sections/Areas";
import About from "@/components/sections/About";
import Approach from "@/components/sections/Approach";
import Audience from "@/components/sections/Audience";
import ContactCta from "@/components/sections/ContactCta";
import Faqs from "@/components/sections/Faqs";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Office from "@/components/sections/Office";
import PullQuote from "@/components/sections/PullQuote";
import Statement from "@/components/sections/Statement";

/**
 * Section order follows the reference homepage:
 * hero → intro → who we help → dark pull-quote → areas list → how we work
 * → image+statement → specialties grid → booking CTA → footer.
 * Our Office and FAQs are additions, slotted so the page still reads in order.
 */
export default function Home() {
  return (
    <>
      <span id="top" />
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Intro />
        <Audience />
        <PullQuote />
        <Areas />
        <About />
        <Statement />
        <Approach />
        <Office />
        <Faqs />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
