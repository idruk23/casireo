import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleAlert,
  Globe2,
  X,
} from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const JETTON_AFFILIATE_URL = 'https://jettrednexar.com/cig0FXPvt5C';
const AFFILIATE_DISCLOSURE =
  'This page contains affiliate links. Casireo may earn a commission if you register through them, at no extra cost to you.';
const faq = [
  {
    question: 'What is JetTon?',
    answer:
      'JetTon is an online casino and gaming brand. This page is an independent Casireo affiliate review based only on the information currently confirmed to us.',
  },
  {
    question: 'Where is JetTon currently available?',
    answer:
      'Confirmed current markets include Azerbaijan, Uzbekistan and Indonesia among other supported GEOs. Availability can change, so users must confirm current eligibility and terms before registering.',
  },
  {
    question: 'Does Casireo list a JetTon bonus?',
    answer:
      'No. Casireo has not published a JetTon bonus because no bonus details have been confirmed for this review.',
  },
  {
    question: 'Has Casireo rated JetTon?',
    answer:
      'No. Casireo has not assigned JetTon a numerical score or star rating.',
  },
  {
    question: 'Is the Visit JetTon button an affiliate link?',
    answer:
      'Yes. Casireo may earn a commission if an eligible user registers through a JetTon affiliate link, at no extra cost to the user.',
  },
];

export const metadata: Metadata = {
  title: 'JetTon Casino Review',
  description:
    'Independent JetTon casino review covering confirmed availability context for Azerbaijan, Uzbekistan and Indonesia, eligibility checks and responsible gambling.',
  alternates: { canonical: '/jetton-review' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'JetTon Casino Review | Casireo',
    description:
      'An independent JetTon review with confirmed GEO context, eligibility guidance and no unverified bonus or rating claims.',
    url: 'https://casireo.com/jetton-review',
    type: 'article',
    images: [],
  },
  twitter: {
    card: 'summary',
    title: 'JetTon Casino Review | Casireo',
    description:
      'Independent JetTon review with confirmed availability context and responsible gambling guidance.',
    images: [],
  },
};

function AffiliateButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={JETTON_AFFILIATE_URL}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className={className}
    >
      Visit JetTon <ArrowRight size={16} />
      <span className="sr-only">
        {' '}
        using Casireo’s affiliate link (opens in a new tab)
      </span>
    </a>
  );
}

export default function JetTonReview() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://casireo.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Casino Reviews',
        item: 'https://casireo.com/casino-reviews',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'JetTon Casino Review',
        item: 'https://casireo.com/jetton-review',
      },
    ],
  };
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'JetTon Casino Review',
    description:
      'An independent JetTon casino review covering confirmed availability context and eligibility considerations.',
    inLanguage: 'en',
    datePublished: '2026-09-03',
    dateModified: '2026-09-03',
    mainEntityOfPage: 'https://casireo.com/jetton-review',
    author: {
      '@type': 'Organization',
      name: 'Casireo',
      url: 'https://casireo.com/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Casireo',
      url: 'https://casireo.com/',
    },
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <main>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative overflow-hidden border-b border-[#d6a94f]/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(214,169,79,.19),transparent_26%),radial-gradient(circle_at_15%_90%,rgba(20,60,75,.25),transparent_34%)]" />
        <div className="container relative py-14 sm:py-24">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-2 text-xs text-stone-500"
          >
            <Link href="/">Home</Link>
            <ChevronRight size={13} />
            <Link href="/casino-reviews">Casino Reviews</Link>
            <ChevronRight size={13} />
            <span className="text-stone-300">JetTon Review</span>
          </nav>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div>
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-[#d6a94f]/30 bg-[#d6a94f]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[.16em] text-[#e5bd6b]">
                  Affiliate review
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[.16em] text-stone-400">
                  Not rated
                </span>
              </div>
              <h1 className="display text-5xl font-semibold leading-[.95] sm:text-7xl">
                JetTon Casino <span className="gold-text">Review</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
                An independent look at the confirmed facts currently available
                about JetTon, with selected-market context and no unverified
                bonus, rating, payment or licensing claims.
              </p>
              <p className="mt-4 text-xs text-stone-500">
                Published and updated 3 September 2026
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <AffiliateButton className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#b57e28] to-[#ebc56f] px-6 py-3.5 text-sm font-extrabold text-black" />
                <a
                  href="#review"
                  className="inline-flex items-center rounded-lg border border-white/15 bg-black/20 px-6 py-3.5 text-sm font-bold"
                >
                  Read Review
                </a>
              </div>
              <p className="mt-4 max-w-2xl text-xs leading-5 text-stone-500">
                {AFFILIATE_DISCLOSURE}
              </p>
              <p className="mt-3 flex items-center gap-2 text-xs font-bold text-stone-300">
                <CircleAlert size={15} className="text-[#d6a94f]" />
                18+ only. Availability depends on your country and local laws.
              </p>
            </div>
            <aside
              aria-label="JetTon review summary"
              className="rounded-2xl border border-[#d6a94f]/25 bg-[#0e1113]/90 p-6 shadow-2xl shadow-black/30"
            >
              <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                <div
                  aria-hidden="true"
                  className="display grid h-14 w-14 place-items-center rounded-xl bg-[#20252e] text-xl font-bold text-white"
                >
                  JT
                </div>
                <div>
                  <p className="text-xl font-bold">JetTon</p>
                  <p className="text-xs text-stone-500">Online casino</p>
                </div>
              </div>
              <dl className="mt-5 grid gap-4 text-sm">
                {[
                  ['Review status', 'Editorial overview — not rated'],
                  ['Product', 'Online casino and gaming brand'],
                  ['Bonus listed', 'No'],
                  ['Affiliate link', 'Yes — clearly disclosed'],
                  ['Focus markets', 'Azerbaijan, Uzbekistan, Indonesia'],
                ].map(([term, value]) => (
                  <div key={term} className="grid grid-cols-[110px_1fr] gap-3">
                    <dt className="text-stone-500">{term}</dt>
                    <dd className="font-semibold text-stone-200">{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <div
        id="review"
        className="container grid scroll-mt-28 gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_300px]"
      >
        <article className="space-y-5">
          <ReviewSection id="overview" number="01" title="Overview">
            <p>
              JetTon is an online casino and gaming brand. Casireo is an
              independent casino discovery and affiliate review site; this page
              does not imply ownership of, or an official partnership with,
              JetTon.
            </p>
            <p>
              This first review is intentionally limited to confirmed
              information. Casireo has not assigned a rating and does not list a
              bonus, licence, payment method, payout time, RTP figure, minimum
              deposit or other unconfirmed product detail.
            </p>
          </ReviewSection>

          <ReviewSection
            id="availability"
            number="02"
            title="Jurisdiction & Availability"
          >
            <div className="rounded-xl border border-[#d6a94f]/15 bg-[#d6a94f]/[.035] p-5">
              <Globe2 className="text-[#d6a94f]" />
              <h3 className="mt-4 font-bold text-stone-100">
                Confirmed selected markets
              </h3>
              <p className="mt-2 text-sm leading-6 text-stone-400">
                Currently available in selected markets including Azerbaijan,
                Uzbekistan and Indonesia.
              </p>
            </div>
            <p>
              JetTon’s confirmed active GEO list also includes other markets,
              but this Casireo page focuses on Azerbaijan, Uzbekistan and
              Indonesia. Availability can change and does not by itself confirm
              that gambling is legal or suitable for every person in a market.
            </p>
            <p>
              Casireo does not present JetTon as currently available in Poland
              or Kazakhstan. Users must check their age, location, local law and
              JetTon’s current eligibility terms before registering. Do not try
              to bypass geographic restrictions.
            </p>
          </ReviewSection>

          <ReviewSection
            id="confirmed-scope"
            number="03"
            title="What This Review Confirms"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/[.035] p-5">
                <h3 className="flex items-center gap-2 font-bold">
                  <Check size={18} className="text-emerald-400" /> Confirmed
                </h3>
                <ul className="mt-4 grid gap-3 text-sm text-stone-400">
                  <li>JetTon is an online casino and gaming brand</li>
                  <li>Selected current markets include AZ, UZ and ID</li>
                  <li>The Visit JetTon buttons are affiliate links</li>
                </ul>
              </div>
              <div className="rounded-xl border border-rose-400/15 bg-rose-400/[.035] p-5">
                <h3 className="flex items-center gap-2 font-bold">
                  <X size={18} className="text-rose-400" /> Not claimed
                </h3>
                <ul className="mt-4 grid gap-3 text-sm text-stone-400">
                  <li>No bonus, free spins or wagering terms</li>
                  <li>No licence, payment or withdrawal claims</li>
                  <li>No numerical rating or user-review score</li>
                </ul>
              </div>
            </div>
          </ReviewSection>

          <ReviewSection
            id="suitability"
            number="04"
            title="Who JetTon May Suit"
          >
            <p>
              JetTon may be relevant to legally eligible adults in a currently
              supported market who want to consider an online casino and are
              prepared to verify the latest terms before registering.
            </p>
            <p>
              It is not suitable for minors, self-excluded people, anyone in an
              unsupported or prohibited location, or anyone treating gambling as
              income or a solution to financial difficulty.
            </p>
          </ReviewSection>

          <ReviewSection
            id="responsible"
            number="05"
            title="Responsible Gambling"
          >
            <p>
              Gambling involves financial risk and should only be treated as
              entertainment. Decide on firm time and spending limits before
              playing, never chase losses, and never use money required for
              living costs.
            </p>
            <p>
              Read Casireo’s{' '}
              <Link
                href="/responsible-gambling"
                className="text-[#e5bd6b] underline underline-offset-4"
              >
                responsible gambling guide
              </Link>{' '}
              before visiting an operator. Only adults who are legally permitted
              to gamble where they live should consider registering.
            </p>
          </ReviewSection>

          <ReviewSection id="faq" number="06" title="JetTon Review FAQ">
            <div className="divide-y divide-white/10">
              {faq.map((item) => (
                <details key={item.question} className="py-4">
                  <summary className="cursor-pointer list-none pr-8 font-bold">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-stone-400">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </ReviewSection>

          <ReviewSection id="verdict" number="07" title="Final Verdict">
            <p>
              JetTon is now listed on Casireo as an unrated affiliate review
              based on a limited set of confirmed facts. The current information
              supports a measured overview, not claims about bonuses, licensing,
              payments or speed.
            </p>
            <p>
              Eligible adults should make their decision using current JetTon
              terms, local law and personal limits. If availability or any
              material condition is unclear, do not register or play.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <AffiliateButton className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#b57e28] to-[#ebc56f] px-6 py-3.5 text-sm font-extrabold text-black" />
              <span className="text-xs text-stone-500">
                18+ · Check local laws and JetTon’s current terms.
              </span>
            </div>
          </ReviewSection>
        </article>

        <aside>
          <div className="sticky top-28 rounded-2xl border border-white/10 bg-[#0e1016] p-6">
            <p className="eyebrow">Review guide</p>
            <nav
              aria-label="On this page"
              className="mt-5 grid gap-3 text-sm text-stone-400"
            >
              {[
                ['Overview', '#overview'],
                ['Availability', '#availability'],
                ['Confirmed Scope', '#confirmed-scope'],
                ['Who It May Suit', '#suitability'],
                ['Responsible Gambling', '#responsible'],
                ['FAQ', '#faq'],
                ['Final Verdict', '#verdict'],
              ].map(([label, href]) => (
                <a key={href} href={href} className="hover:text-[#e5bd6b]">
                  {label}
                </a>
              ))}
            </nav>
            <div className="my-6 h-px bg-white/10" />
            <p className="text-xs leading-5 text-stone-500">
              Looking for broader context?
            </p>
            <div className="mt-3 grid gap-2 text-sm font-semibold">
              <Link href="/casino-reviews" className="text-[#e5bd6b]">
                Casino Reviews
              </Link>
              <Link href="/best-online-casinos" className="text-[#e5bd6b]">
                Comparison Methodology
              </Link>
            </div>
          </div>
        </aside>
      </div>
      <SiteFooter showAffiliateDisclosure />
    </main>
  );
}

function ReviewSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-2xl border border-white/10 bg-[#0f1117] p-6 sm:p-9"
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="display text-xl text-[#d6a94f]">{number}</span>
        <div className="h-px flex-1 bg-gradient-to-r from-[#d6a94f]/30 to-transparent" />
      </div>
      <h2 className="display text-3xl font-semibold sm:text-4xl">{title}</h2>
      <div className="mt-5 grid gap-4 text-sm leading-7 text-stone-400">
        {children}
      </div>
    </section>
  );
}
