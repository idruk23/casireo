import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleAlert,
  Gamepad2,
  Trophy,
  X,
} from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const STAKE_AFFILIATE_URL = 'https://stake.com/?c=zrWcLA9e';
const AFFILIATE_DISCLOSURE =
  'This page contains affiliate links. Casireo may earn a commission if you register through them, at no extra cost to you.';
const faq = [
  {
    question: 'What is Stake?',
    answer:
      'Stake is an online gambling operator offering casino games and a sportsbook. The products visible to a user depend on location and applicable rules.',
  },
  {
    question: 'Does this review include a Stake bonus?',
    answer:
      'No. Casireo does not list or describe a Stake bonus on this page because no offer has been verified for this review.',
  },
  {
    question: 'Is Stake available in every country?',
    answer:
      'No assumption of worldwide availability should be made. Access and product availability depend on your country, local laws, age, and Stake’s current terms.',
  },
  {
    question: 'Is the Visit Stake link an affiliate link?',
    answer:
      'Yes. Casireo may earn a commission if an eligible user registers through the Visit Stake link, at no extra cost to the user.',
  },
  {
    question: 'Who can use Stake?',
    answer:
      'Only adults who meet the legal gambling age and are legally permitted to use the service in their location should consider visiting Stake.',
  },
];

export const metadata: Metadata = {
  title: 'Stake Casino Review — Casino & Sportsbook Overview',
  description:
    'A factual Casireo review of Stake’s casino and sportsbook experience, with clear affiliate disclosure, jurisdiction guidance and responsible gambling information.',
  alternates: { canonical: '/stake-review' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Stake Casino Review | Casireo',
    description:
      'A factual overview of Stake’s casino and sportsbook, availability considerations and responsible gambling information.',
    url: 'https://casireo.com/stake-review',
    type: 'article',
    images: [],
  },
  twitter: {
    card: 'summary',
    title: 'Stake Casino Review | Casireo',
    description:
      'A factual overview of Stake’s casino and sportsbook, with jurisdiction and responsible gambling guidance.',
    images: [],
  },
};

function AffiliateButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={STAKE_AFFILIATE_URL}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={className}
    >
      Visit Stake <ArrowRight size={16} />
      <span className="sr-only">
        {' '}
        using Casireo’s affiliate link (opens in a new tab)
      </span>
    </a>
  );
}

export default function StakeReview() {
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
        name: 'Stake Casino Review',
        item: 'https://casireo.com/stake-review',
      },
    ],
  };
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Stake Casino Review',
    description:
      'An independent, factual overview of Stake’s casino and sportsbook experience, jurisdiction considerations and responsible gambling information.',
    inLanguage: 'en',
    datePublished: '2026-08-30',
    dateModified: '2026-08-31',
    mainEntityOfPage: 'https://casireo.com/stake-review',
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
            <span className="text-stone-300">Stake Review</span>
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
                Stake Casino <span className="gold-text">Review</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
                A measured look at Stake’s combined online casino and sportsbook
                experience, with no unverified bonus, rating, payment, or
                availability claims.
              </p>
              <p className="mt-4 text-xs text-stone-500">
                Published 30 August 2026 · Updated 31 August 2026
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
              aria-label="Stake review summary"
              className="rounded-2xl border border-[#d6a94f]/25 bg-[#0e1113]/90 p-6 shadow-2xl shadow-black/30"
            >
              <div className="flex items-center gap-4 border-b border-white/10 pb-5">
                <div
                  aria-hidden="true"
                  className="display grid h-14 w-14 place-items-center rounded-xl bg-white text-2xl font-bold text-[#0b0c0e]"
                >
                  S
                </div>
                <div>
                  <p className="text-xl font-bold">Stake</p>
                  <p className="text-xs text-stone-500">Casino & sportsbook</p>
                </div>
              </div>
              <dl className="mt-5 grid gap-4 text-sm">
                {[
                  ['Review status', 'Editorial overview — not rated'],
                  ['Products', 'Online casino and sportsbook'],
                  ['Bonus listed', 'No'],
                  ['Affiliate link', 'Yes — clearly disclosed'],
                  ['Availability', 'Country and law dependent'],
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
              Stake brings casino and sportsbook products together under one
              service. This review focuses on that product structure and the
              information a prospective user should check before deciding
              whether to visit.
            </p>
            <p>
              Casireo has not assigned a rating. We have also omitted bonuses,
              payment details, payout speeds and country eligibility because
              those details require market-specific verification.
            </p>
            <p>
              For context on terms that are not claimed here, read Casireo’s{' '}
              <Link
                href="/casino-bonuses"
                className="text-[#e5bd6b] underline underline-offset-4"
              >
                casino bonus guide
              </Link>{' '}
              and{' '}
              <Link
                href="/payment-methods"
                className="text-[#e5bd6b] underline underline-offset-4"
              >
                payment methods guide
              </Link>
              .
            </p>
          </ReviewSection>
          <ReviewSection
            id="casino-sportsbook"
            number="02"
            title="Casino and Sportsbook"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Feature
                icon={Gamepad2}
                title="Casino"
                copy="Stake publicly presents casino categories including slots and live casino. Exact games and features may vary by location."
              />
              <Feature
                icon={Trophy}
                title="Sportsbook"
                copy="Stake also operates a sportsbook. Events, markets and product access may differ by jurisdiction."
              />
            </div>
            <p>
              Readers interested specifically in dealer-led games can also
              consult Casireo’s{' '}
              <Link
                href="/live-casino"
                className="text-[#e5bd6b] underline underline-offset-4"
              >
                live casino guide
              </Link>
              .
            </p>
          </ReviewSection>
          <ReviewSection id="experience" number="03" title="User Experience">
            <p>
              The service separates casino and sports areas while keeping them
              within one account experience. Before registering, users should
              read the current terms, confirm that access is lawful where they
              are, and review the controls and information presented for the
              products available to them.
            </p>
            <p>
              Casireo does not treat interface polish as evidence of safety,
              value, or suitability. Terms, eligibility and personal limits
              remain more important than presentation.
            </p>
          </ReviewSection>
          <ReviewSection id="pros-cons" number="04" title="Pros and Cons">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/[.035] p-5">
                <h3 className="flex items-center gap-2 font-bold">
                  <Check size={18} className="text-emerald-400" />
                  Potential advantages
                </h3>
                <ul className="mt-4 grid gap-3 text-sm text-stone-400">
                  <li>Casino and sportsbook in one service</li>
                  <li>Dedicated responsible gambling information</li>
                  <li>Casino categories include slots and live casino</li>
                </ul>
              </div>
              <div className="rounded-xl border border-rose-400/15 bg-rose-400/[.035] p-5">
                <h3 className="flex items-center gap-2 font-bold">
                  <X size={18} className="text-rose-400" />
                  Important limitations
                </h3>
                <ul className="mt-4 grid gap-3 text-sm text-stone-400">
                  <li>Not available or lawful everywhere</li>
                  <li>No Casireo rating has been assigned</li>
                  <li>Terms and product access can vary by country</li>
                </ul>
              </div>
            </div>
          </ReviewSection>
          <ReviewSection
            id="suitability"
            number="05"
            title="Who Stake May Suit"
          >
            <p>
              Stake may be relevant to legally eligible adults who specifically
              want to explore casino and sports products within one service and
              who are comfortable checking current terms and jurisdiction rules
              before registering.
            </p>
            <p>
              It is not suitable for minors, self-excluded people, anyone in a
              prohibited location, or anyone who sees gambling as income or a
              solution to financial problems.
            </p>
          </ReviewSection>
          <ReviewSection
            id="jurisdiction"
            number="06"
            title="Jurisdiction & Availability"
          >
            <p>
              Availability depends on the user’s physical location, age, Stake’s
              current restrictions and local law. Casireo does not direct
              traffic based on inferred location and does not claim Stake is
              permitted in any specific country on this page.
            </p>
            <p>
              Do not attempt to bypass geographic restrictions. If access or
              legality is unclear, do not register or play.
            </p>
          </ReviewSection>
          <ReviewSection
            id="responsible"
            number="07"
            title="Responsible Gambling"
          >
            <p>
              Gambling involves risk and should only be treated as
              entertainment. Set time and spend limits before playing, never
              chase losses, and never use money needed for living costs.
            </p>
            <p>
              Stake publishes responsible gambling information and account
              controls. Independent of any operator tools, Casireo recommends
              reading our{' '}
              <Link
                href="/responsible-gambling"
                className="text-[#e5bd6b] underline underline-offset-4"
              >
                responsible gambling guide
              </Link>{' '}
              before playing. 18+ only, or the higher legal gambling age where
              you live.
            </p>
          </ReviewSection>
          <ReviewSection id="faq" number="08" title="FAQ">
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
          <ReviewSection id="verdict" number="09" title="Final Verdict">
            <p>
              Stake combines online casino and sportsbook products in a single
              service, which may appeal to some eligible adults. Casireo does
              not currently assign it a score and makes no claim that it is
              available or appropriate for every reader.
            </p>
            <p>
              The deciding factors should be legal availability, the current
              terms and your ability to gamble within firm personal limits—not
              an offer or marketing promise.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <AffiliateButton className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#b57e28] to-[#ebc56f] px-6 py-3.5 text-sm font-extrabold text-black" />
              <span className="text-xs text-stone-500">
                18+ · Check local laws and Stake’s current terms.
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
                ['Casino & Sportsbook', '#casino-sportsbook'],
                ['User Experience', '#experience'],
                ['Pros & Cons', '#pros-cons'],
                ['Who It May Suit', '#suitability'],
                ['Jurisdiction', '#jurisdiction'],
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
              <Link href="/best-online-casinos" className="text-[#e5bd6b]">
                Best Online Casinos
              </Link>
              <Link href="/casino-reviews" className="text-[#e5bd6b]">
                Casino Reviews
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
function Feature({
  icon: Icon,
  title,
  copy,
}: {
  icon: typeof Gamepad2;
  title: string;
  copy: string;
}) {
  return (
    <div className="rounded-xl border border-[#d6a94f]/15 bg-[#d6a94f]/[.035] p-5">
      <Icon className="text-[#d6a94f]" />
      <h3 className="mt-4 font-bold text-stone-100">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-stone-400">{copy}</p>
    </div>
  );
}
