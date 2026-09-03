import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CircleDollarSign,
  Coins,
  CreditCard,
  Gamepad2,
  Globe2,
  Landmark,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { StakeCard } from '@/components/stake-card';
import { JetTonCard } from '@/components/jetton-card';

const categories = [
  {
    title: 'Live Casino',
    copy: 'Dealer-led tables, studio quality and limits explained.',
    href: '/live-casino',
    icon: Users,
  },
  {
    title: 'Popular Slots',
    copy: 'Mechanics, providers, RTP context and volatility guides.',
    href: '/slots',
    icon: Gamepad2,
  },
  {
    title: 'Casino Bonuses',
    copy: 'Wagering, eligibility and restrictions—terms first.',
    href: '/casino-bonuses',
    icon: Sparkles,
  },
];
const payments = [
  ['Cards', 'Familiar deposits', CreditCard],
  ['E-wallets', 'Fast digital payments', Coins],
  ['Bank transfer', 'Direct bank rails', Landmark],
  ['Crypto', 'Availability varies', CircleDollarSign],
] as const;
const countries = [
  ['United Kingdom', 'GB'],
  ['Ireland', 'IE'],
  ['Canada', 'CA'],
  ['Germany', 'DE'],
  ['Poland', 'PL'],
  ['France', 'FR'],
  ['Spain', 'ES'],
  ['International', 'ROW'],
];
const faq = [
  [
    'Does Casireo operate an online casino?',
    'No. Casireo is an independent information, discovery and comparison portal. It does not accept wagers or hold player funds.',
  ],
  [
    'How are affiliate casino reviews identified?',
    'Affiliate reviews are labeled clearly. Stake and JetTon are currently Casireo’s active affiliate operators, and neither review includes an unverified rating or bonus.',
  ],
  [
    'How does Casireo assess casinos?',
    'Casireo uses a documented framework covering ownership, terms, payments, security, support, product information and responsible gambling controls. Claims are omitted when they cannot be supported.',
  ],
  [
    'Is every casino available in every country?',
    'No. Availability depends on the operator’s rules, the user’s age and location, and local law. Casireo does not recommend bypassing geographic restrictions.',
  ],
];

export default function Home() {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Casireo',
    url: 'https://casireo.com/',
    inLanguage: 'en',
  };
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Casireo',
    url: 'https://casireo.com/',
  };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
  return (
    <main>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="relative overflow-hidden">
        <Image
          src="/images/casireo-hero.png"
          alt="Casireo casino discovery banner with roulette wheel, cards and illuminated skyline"
          fill
          priority
          className="object-cover object-center opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05070b] via-[#05070b]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-transparent to-transparent" />
        <div className="container relative flex min-h-[650px] items-center py-24">
          <div className="max-w-[660px]">
            <p className="eyebrow mb-5">Independent casino intelligence</p>
            <h1 className="display text-5xl font-semibold leading-[.98] sm:text-7xl">
              A clearer way to{' '}
              <span className="gold-text">discover online casinos.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-stone-300 sm:text-lg">
              Research-led comparisons, transparent review standards, and
              responsible gambling information—built for informed decisions,
              never pressure.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/best-online-casinos"
                className="rounded-lg bg-gradient-to-r from-[#b57e28] to-[#ebc56f] px-6 py-3.5 text-sm font-extrabold text-black"
              >
                Explore casino guides
              </Link>
              <Link
                href="/about"
                className="rounded-lg border border-white/15 bg-black/20 px-6 py-3.5 text-sm font-bold"
              >
                How we review
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-5 text-xs text-stone-400">
              <span className="flex gap-2">
                <ShieldCheck size={17} className="text-[#d6a94f]" />
                Independent criteria
              </span>
              <span className="flex gap-2">
                <BadgeCheck size={17} className="text-[#d6a94f]" />
                Clear demo labels
              </span>
              <span className="flex gap-2">
                <Banknote size={17} className="text-[#d6a94f]" />
                No invented offers
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Comparison desk</p>
            <h2 className="display mt-2 text-4xl font-semibold sm:text-5xl">
              Featured Casino Reviews
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-400">
              Only approved operator reviews appear here. Stake and JetTon are
              currently Casireo’s active affiliate listings, with no unverified
              bonuses or ratings.
            </p>
          </div>
          <Link
            href="/best-online-casinos"
            className="hidden text-sm font-bold text-[#d6a94f] sm:flex"
          >
            Our methodology <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
        <div className="grid max-w-3xl gap-4 md:grid-cols-2">
          <StakeCard />
          <JetTonCard />
        </div>
      </section>
      <section className="border-y border-white/5 bg-[#0b0d12]/80">
        <div className="container py-20">
          <div className="grid gap-5 lg:grid-cols-3">
            {categories.map(({ title, copy, href, icon: Icon }) => (
              <Link
                key={title}
                href={href}
                className="group rounded-2xl border border-white/10 bg-[#11141b] p-7 hover:border-[#d6a94f]/40"
              >
                <Icon className="mb-8 text-[#d6a94f]" size={31} />
                <h2 className="display text-3xl font-semibold">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-stone-400">{copy}</p>
                <span className="mt-7 flex items-center text-xs font-bold uppercase tracking-widest text-[#d6a94f]">
                  Explore guide <ArrowRight className="ml-2" size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="container grid gap-16 py-20 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Payment guides</p>
          <h2 className="display mt-2 text-4xl font-semibold">
            Browse by payment method
          </h2>
          <p className="mt-4 text-sm leading-6 text-stone-400">
            Compare common payment categories by speed, fees and withdrawal
            support. Availability will be verified per operator and market.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {payments.map(([name, copy, Icon]) => (
              <Link
                href="/payment-methods"
                key={name}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[.025] p-4 hover:border-[#d6a94f]/40"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#d6a94f]/10 text-[#d6a94f]">
                  <Icon size={20} />
                </span>
                <span>
                  <b className="block text-sm">{name}</b>
                  <small className="text-stone-500">{copy}</small>
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Local relevance</p>
          <h2 className="display mt-2 text-4xl font-semibold">
            Browse by country
          </h2>
          <p className="mt-4 text-sm leading-6 text-stone-400">
            GEO-ready records can include or exclude operators by permitted
            country. These links currently explain the planned coverage only.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {countries.map(([name, code]) => (
              <span
                key={code}
                title={`${name} coverage is being prepared`}
                className="rounded-xl border border-white/10 bg-white/[.025] p-4 text-center"
              >
                <b className="display block text-2xl text-[#d6a94f]">{code}</b>
                <small className="mt-1 block text-stone-500">{name}</small>
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-[#d6a94f]/15 bg-gradient-to-r from-[#11131a] via-[#17140f] to-[#11131a]">
        <div className="container py-20 text-center">
          <p className="eyebrow">Why Casireo</p>
          <h2 className="display mx-auto mt-2 max-w-3xl text-4xl font-semibold sm:text-5xl">
            Built for trust before monetization.
          </h2>
          <div className="mt-12 grid gap-8 text-left md:grid-cols-3">
            {[
              [
                'Transparent reviews',
                'Criteria, sources and verification dates belong beside every verdict.',
                ShieldCheck,
              ],
              [
                'Jurisdiction aware',
                'Country permissions are part of the data model, not an afterthought.',
                Globe2,
              ],
              [
                'Responsible by default',
                '18+ context, safer-play guidance and no urgency-driven claims.',
                BadgeCheck,
              ],
            ].map(([title, copy, Icon]) => (
              <div key={title as string}>
                <Icon className="mb-4 text-[#d6a94f]" />
                <h3 className="font-bold">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-400">
                  {copy as string}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-20">
        <div className="text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="display mt-2 text-4xl font-semibold">
            Questions, answered clearly.
          </h2>
        </div>
        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#0e1016] px-6">
          {faq.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="cursor-pointer list-none pr-8 font-bold marker:hidden">
                {q}
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-stone-400">
                {a}
              </p>
            </details>
          ))}
        </div>
      </section>
      <section className="container">
        <div className="rounded-2xl border border-[#d6a94f]/25 bg-[#15130f] p-8 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 shrink-0 text-[#d6a94f]" size={30} />
            <div>
              <h2 className="display text-2xl font-semibold">
                Gambling is not a way to make money.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-400">
                Only play if you are 18+ and legally permitted. Set limits,
                never chase losses, and seek help if gambling stops feeling like
                entertainment.
              </p>
            </div>
          </div>
          <Link
            href="/responsible-gambling"
            className="mt-6 inline-flex shrink-0 rounded-lg border border-[#d6a94f]/40 px-5 py-3 text-sm font-bold text-[#d6a94f] sm:ml-8 sm:mt-0"
          >
            Safer gambling guide
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
