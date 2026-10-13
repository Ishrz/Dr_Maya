/**
 * ALL homepage copy lives here.
 * Source of truth: docs/04-content-maya.md (Dr. Maya Reynolds profile).
 * Nothing in this file may state a fact that is not in the profile —
 * no fees, insurance, years of experience, licence number, phone, email,
 * testimonials, hours or availability. See the "Do NOT invent" list in docs/04.
 */

export const site = {
  name: "Dr. Maya Reynolds",
  credentials: "PsyD",
  role: "Licensed Clinical Psychologist",
  tagline: "Anxiety & trauma therapy in Santa Monica, California",
  // TODO: real domain is not provided in the profile — placeholder for canonical/OG.
  url: "https://www.drmayareynolds.com",
};

export const contact = {
  // Address is reproduced exactly as given in the profile.
  addressLine1: "123th Street 45 W",
  addressLine2: "Santa Monica, CA 90401",
  // TODO: contact details were not provided in the profile.
  // No phone or email is invented; the CTA scrolls here instead.
  email: null,
  phone: null,
  formats: [
    "In-person sessions in my Santa Monica office",
    "Secure telehealth for clients located in California",
  ],
};

export const meta = {
  title: "Anxiety & Trauma Therapy in Santa Monica | Dr. Maya Reynolds",
  description:
    "Licensed clinical psychologist in Santa Monica, CA offering anxiety, panic, trauma and burnout therapy for adults. In-person or secure telehealth in California.",
  ogImage: "/images/statement.jpg",
  themeColor: "#fbf8f2", // must be a literal for Next's viewport metadata
  locale: "en_US",
};

/* ------------------------------------------------------------------ header */

export const nav = {
  logo: {
    name: "Dr. Maya Reynolds",
    suffix: "PsyD",
    role: "Licensed Clinical Psychologist",
  },
  links: [
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "About", href: "#about" },
    { label: "Our Office", href: "#office" },
    { label: "FAQs", href: "#faqs" },
  ],
  cta: { label: "Contact", href: "#contact" },
};

/* -------------------------------------------------------------------- hero */

export const hero = {
  eyebrow: "Online & in-person counseling in Santa Monica & across California",
  // Exactly one h1 on the page: specialty + location.
  titleLead: "Anxiety & trauma therapy",
  titleAccent: "in Santa Monica",
  titleTail: ", CA",
  subtitle:
    "I'm Dr. Maya Reynolds, a licensed clinical psychologist working with adults who are high-achieving and self-aware — and quietly exhausted on the inside. Sessions are warm, structured, and paced to your nervous system.",
  primaryCta: { label: "Book an appointment", href: "#contact" },
  secondaryCta: { label: "See how we work", href: "#approach" },
  image: {
    src: "/images/hero-main.jpg",
    alt: "Two mustard armchairs facing each other with a large leafy plant between them, against a softly draped white backdrop.",
  },
  edgeImage: {
    src: "/images/hero-edge.jpg",
    alt: "",
  },
};

/* ------------------------------------------------------------------- intro */

export const intro = {
  title: "You look fine from the outside. What do you want to do about ",
  titleAccent: "it?",
  paragraphs: [
    "Many people arrive in my Santa Monica office feeling “functional” — capable at work, easy to be around, holding everything together. Underneath that, there's constant worry, tension in the body, difficulty sleeping, and a sense of always bracing for something to go wrong.",
    "If that sounds familiar, it isn't a character flaw and it isn't a failure to cope. It usually means a nervous system has been carrying a load for a long time. That's the part we look at together.",
  ],
  image: {
    src: "/images/intro-portrait.jpg",
    alt: "Shadow of an olive branch on a warm ochre wall.",
  },
};

/* --------------------------------------------------------- who I work with */

export const audience = {
  titleLead: "Who I work ",
  titleAccent: "with",
  items: [
    {
      title: "Overthinkers",
      image: {
        src: "/images/card-anxiety.jpg",
        alt: "Soft folds of cream and oatmeal linen fabric in natural light.",
      },
      body:
        "Constant worry, overthinking, tension in the body, trouble sleeping, and always being braced for something to go wrong. We work on the loop itself, not just the thoughts inside it.",
    },
    {
      title: "People carrying earlier experiences",
      image: {
        src: "/images/card-trauma.jpg",
        alt: "A whitewashed corner with a potted plant, ceramic vessels on an arched shelf and a stone floor.",
      },
      body:
        "Single-incident trauma, and longer-standing patterns that grew out of childhood, relationships, or years of chronic stress. Slowly paced, with safety and stabilization first.",
    },
    {
      title: "Professionals at capacity",
      image: {
        src: "/images/card-burnout.jpg",
        alt: "Potted plants and books on a wooden counter beside a sunlit window.",
      },
      body:
        "Entrepreneurs, creatives, and professionals who have pushed through for so long they've lost touch with themselves. Therapy becomes a place to slow down and reconnect.",
    },
  ],
};

/* ------------------------------------------------------------- pull quote */

export const pullQuote = {
  text: "Nothing will be too heavy to carry alone. My job is to make room for it — so you don't have to hold it by yourself.",
  image: {
    src: "/images/quote-bg.jpg",
    alt: "",
  },
};

/* -------------------------------------------------------------- areas list */

export const areas = {
  titleLead: "What people ",
  titleAccent: "arrive with",
  columns: [
    [
      "Anxiety",
      "Panic",
      "Trauma",
      "Burnout",
      "Perfectionism",
      "Overthinking",
    ],
    [
      "High internal pressure",
      "Trouble sleeping",
      "Tension in the body",
      "Feeling on edge",
      "Disconnection from yourself",
      "…and more.",
    ],
  ],
};

/* ------------------------------------------------------- about / how we work */

export const about = {
  eyebrow: "How we work",
  title: "Warm, structured, and paced to ",
  titleAccent: "you",
  paragraphs: [
    "I'm a licensed clinical psychologist based in Santa Monica, California. I take a warm, collaborative, and grounded approach — sessions are structured enough to feel supportive, while still leaving space for reflection and depth.",
    "I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques, so we can work on both the emotional and the physiological sides of what you're experiencing.",
  ],
  cta: { label: "More about my approach", href: "#approach" },
  image: {
    src: "/images/maya.png",
    alt: "Dr. Maya Reynolds, PsyD, licensed clinical psychologist, smiling at the camera in soft indoor light.",
  },
  caption: "Dr. Maya Reynolds, PsyD — Santa Monica, CA",
};

/* ---------------------------------------------------------------- statement */

export const statement = {
  title: "Slowing down isn't falling behind. It's how you keep going without ",
  titleAccent: "breaking",
  image: {
    src: "/images/statement.jpg",
    alt: "Calm Pacific water meeting a pale sandy shoreline under a light sky, near Santa Monica.",
  },
};

/* ---------------------------------------------------------------- approach */

export const approach = {
  titleLead: "How I ",
  titleAccent: "work",
  items: [
    {
      title: "Cognitive-Behavioral Therapy",
      body:
        "We look at the thoughts, behaviours and loops that keep anxiety and panic running, and build practical tools you can actually use between sessions.",
    },
    {
      title: "EMDR",
      body:
        "A structured approach for processing traumatic memory, used for both single-incident trauma and longer-standing patterns. Careful pacing keeps it steady.",
    },
    {
      title: "Mindfulness-Based Practices",
      body:
        "Practices that build the gap between a trigger and your response, so you spend less of your life reacting and more of it choosing.",
    },
    {
      title: "Body-Oriented Techniques",
      body:
        "Because tension, bracing and poor sleep live in the body as much as the mind. Learning to settle the system is part of the work, not an add-on.",
    },
  ],
  link: { label: "Learn more", href: "#contact" },
};

/* -------------------------------------------------------------- our office */

export const office = {
  eyebrow: "Our office",
  titleLead: "A calm space in ",
  titleAccent: "Santa Monica",
  paragraphs: [
    "My office is a quiet, private space designed to help you settle rather than brace. There's natural light, comfortable seating, and nothing on the walls competing for your attention.",
    "Clients often tell me the space itself makes them feel more at ease on arrival — before we've said a word. That matters more than it sounds.",
  ],
  details: {
    addressLabel: "Office address",
    address: `${contact.addressLine1}, ${contact.addressLine2}`,
    sessionsLabel: "Sessions",
    sessions: contact.formats,
  },
  highlights: [
    { icon: "lock", label: "Private and confidential" },
    { icon: "sun", label: "Natural light" },
    { icon: "screen", label: "In-person & telehealth" },
  ],
  images: [
    {
      src: "/images/office-1.jpeg",
      alt: "Sunlit therapy room with a grey sofa, a cushioned armchair, a glass coffee table and tall windows with sheer curtains.",
    },
    {
      src: "/images/office-2.jpeg",
      alt: "Corner of the office with a grey sofa, low glass table, bookshelf with books and plants, and tall windows.",
    },
  ],
  cta: { label: "Schedule a consultation", href: "#contact" },
};

/* --------------------------------------------------------------------- faqs */

export const faqs = {
  titleLead: "Questions I hear ",
  titleAccent: "a lot",
  items: [
    {
      q: "Who do you work with?",
      a: "I work with adults. Most of the people I see are high-achieving, thoughtful, and self-aware, and they come to me with anxiety, panic, burnout, perfectionism, or the lingering effects of earlier experiences. A lot of them look fine from the outside while feeling exhausted, stuck in overthinking, or emotionally on edge.",
    },
    {
      q: "Do you offer in-person sessions?",
      a: "Yes. I see clients in person at my office in Santa Monica, California. It's a quiet, private space with natural light, and it's designed to feel calm and grounding from the moment you walk in.",
    },
    {
      q: "Do you offer online therapy?",
      a: "Yes. Alongside in-person sessions in Santa Monica, I offer secure telehealth for clients located in California.",
    },
    {
      q: "What approaches do you use?",
      a: "I work with evidence-based methods including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques. I integrate them so we can address both the emotional and the physiological sides of what you're experiencing.",
    },
    {
      q: "Do you work with complex trauma?",
      a: "Yes. I work with adults who've experienced single-incident trauma, and with more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. That work is paced carefully, with an emphasis on safety, stabilization, and feeling more regulated in daily life — not only during sessions.",
    },
    {
      q: "Is this worth doing if I seem like I'm doing fine?",
      a: "Yes. Being capable and being well are not the same thing. If you're functioning on the outside and running on empty on the inside, that's a real thing to work on, and it's exactly the kind of work I do.",
    },
  ],
};

/* ------------------------------------------------------------------ contact */

export const contactCta = {
  eyebrow: "Schedule an appointment",
  title: "Let's find a psychologist in Santa Monica who fits ",
  titleAccent: "you",
  body:
    "If you're looking for a therapist who combines practical tools with depth-oriented work — and who understands what it's like to live and work at full capacity — I may be a good fit. Getting started is simple: tell me a little about what you're carrying.",
  cta: { label: "Book now", href: "#contact-details" },
  // TODO: phone and email were not provided in the profile, so the site does not
  // display any. Replace this line with real details once they exist.
  pending: "Contact details to follow — appointments are not yet open online.",
  stripImage: {
    src: "/images/cta-strip.jpg",
    alt: "Shadow of a slender plant cast across a pale wall.",
  },
  tallImage: {
    src: "/images/cta-tall.jpg",
    alt: "Soft morning light over calm ocean water at the shoreline.",
  },
};

/* ------------------------------------------------------------------- footer */

export const footer = {
  blurb:
    "Therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. In person at my Santa Monica office, or by secure telehealth for clients located in California.",
  columns: [
    {
      heading: "Navigate",
      links: [
        { label: "Home", href: "#top" },
        { label: "Services", href: "#services" },
        { label: "Approach", href: "#approach" },
        { label: "Our Office", href: "#office" },
        { label: "FAQs", href: "#faqs" },
      ],
    },
    {
      heading: "Practice",
      links: [
        { label: "Anxiety & panic", href: "#services" },
        { label: "Trauma & EMDR", href: "#services" },
        { label: "Burnout & perfectionism", href: "#services" },
        { label: "In-person in Santa Monica", href: "#office" },
        { label: "Telehealth in California", href: "#faqs" },
      ],
    },
  ],
  contactHeading: "Contact",
  copyright: `© ${new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.`,
  // The reference site closes with a slim coloured legal bar; we keep the shape
  // but carry no invented policy pages.
  legal: "Privacy · Terms · Disclaimer — pages coming soon.",
};

/* ------------------------------------------------------------------- icons */

export const icons = {
  // Inline SVG so no icon library is pulled in.
  lock: "M12 3.5a4 4 0 0 0-4 4v2h8v-2a4 4 0 0 0-4-4Zm-6 7.5h16v9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-9Z",
  sun: "M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19",
  screen: "M3 5.5h18v11H3v-11Zm5 15h8m-4-4v4",
  check: "M20 6.5 9.5 17 4 11.5",
  arrow: "M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5",
  plus: "M12 5v14M5 12h14",
  menu: "M3 7h18M3 12h18M3 17h18",
};
