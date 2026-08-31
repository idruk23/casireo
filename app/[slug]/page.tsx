import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  FileQuestion,
  ShieldCheck,
} from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { StakeCard } from '@/components/stake-card';
import { routeContent } from '@/lib/site-data';

export function generateStaticParams() {
  return Object.keys(routeContent).map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = routeContent[slug];
  if (!page) return {};
  const indexable = slug !== 'contact';
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${slug}` },
    robots: { index: indexable, follow: true },
    openGraph: {
      title: `${page.title} | Casireo`,
      description: page.description,
      url: `https://casireo.com/${slug}`,
      type: 'article',
      images: [
        {
          url: '/images/casireo-hero.png',
          width: 1672,
          height: 941,
          alt: 'Casireo casino discovery and comparison',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${page.title} | Casireo`,
      description: page.description,
      images: ['/images/casireo-hero.png'],
    },
  };
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = routeContent[slug];
  if (!page) notFound();
  const crumbs = {
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
        name: page.title,
        item: `https://casireo.com/${slug}`,
      },
    ],
  };
  const articleSlugs = [
    'best-online-casinos',
    'casino-reviews',
    'live-casino',
    'slots',
    'casino-bonuses',
    'payment-methods',
    'responsible-gambling',
  ];
  const article = articleSlugs.includes(slug)
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: page.title,
        description: page.description,
        inLanguage: 'en',
        datePublished: '2026-08-30',
        dateModified: '2026-08-31',
        mainEntityOfPage: `https://casireo.com/${slug}`,
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
      }
    : null;
  return (
    <main>
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      {article && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
        />
      )}
      <section className="relative overflow-hidden border-b border-[#d6a94f]/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_10%,rgba(214,169,79,.14),transparent_35%)]" />
        <div className="container relative py-16 sm:py-24">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex items-center gap-2 text-xs text-stone-500"
          >
            <Link href="/">Home</Link>
            <ChevronRight size={13} />
            <span className="text-stone-300">{page.title}</span>
          </nav>
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="display mt-3 max-w-4xl text-5xl font-semibold sm:text-7xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
            {page.intro}
          </p>
          {article && (
            <p className="mt-5 text-xs text-stone-500">
              Editorial guide · Published 30 August 2026 · Updated 31 August
              2026
            </p>
          )}
        </div>
      </section>
      <section className="container grid gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div>
          <div className="grid gap-5">
            {page.sections.map((section, index) => (
              <article
                key={section.title}
                className="rounded-2xl border border-white/10 bg-[#0f1117] p-7 sm:p-9"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="display text-xl text-[#d6a94f]">
                    0{index + 1}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#d6a94f]/30 to-transparent" />
                </div>
                <h2 className="display text-3xl font-semibold">
                  {section.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-stone-400">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
          {slug === 'casino-reviews' && (
            <div className="mt-14">
              <div className="mb-7">
                <p className="eyebrow">Active review</p>
                <h2 className="display mt-2 text-3xl font-semibold">
                  Approved operator review
                </h2>
              </div>
              <div className="max-w-sm">
                <StakeCard />
              </div>
            </div>
          )}
          {page.relatedLinks && (
            <section aria-labelledby="related-guides" className="mt-14">
              <p className="eyebrow">Continue researching</p>
              <h2
                id="related-guides"
                className="display mt-2 text-3xl font-semibold"
              >
                Related Casireo guides
              </h2>
              <div className="mt-6 grid gap-3">
                {page.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group rounded-xl border border-white/10 bg-white/[.025] p-5 hover:border-[#d6a94f]/40"
                  >
                    <span className="flex items-center font-bold text-[#e5bd6b]">
                      {link.label}
                      <ArrowRight className="ml-2" size={15} />
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-stone-400">
                      {link.description}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
        <aside>
          <div className="sticky top-28 rounded-2xl border border-[#d6a94f]/20 bg-[#12130f] p-6">
            <ShieldCheck className="text-[#d6a94f]" />
            <h2 className="display mt-4 text-2xl font-semibold">
              Casireo standard
            </h2>
            <ul className="mt-5 grid gap-3 text-sm text-stone-400">
              {[
                'Sources before claims',
                'Country rules respected',
                'No invented promotions',
                'Corrections welcomed',
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <CheckCircle2
                    size={16}
                    className="mt-0.5 shrink-0 text-[#d6a94f]"
                  />
                  {x}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-6 flex items-center text-sm font-bold text-[#d6a94f]"
            >
              About our approach <ArrowRight className="ml-2" size={14} />
            </Link>
          </div>
        </aside>
      </section>
      {slug === 'contact' && (
        <section className="container max-w-3xl pb-16">
          <div className="rounded-2xl border border-dashed border-white/15 bg-white/[.02] p-8 text-center">
            <FileQuestion className="mx-auto text-[#d6a94f]" />
            <h2 className="display mt-4 text-2xl font-semibold">
              Contact channel pending
            </h2>
            <p className="mt-2 text-sm leading-6 text-stone-400">
              No messages are transmitted from this site. A verified business
              email or connected form will be added before this page is indexed.
            </p>
          </div>
        </section>
      )}
      <SiteFooter />
    </main>
  );
}
