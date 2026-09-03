export type CountryCode =
  | 'GB'
  | 'IE'
  | 'CA'
  | 'DE'
  | 'PL'
  | 'FR'
  | 'ES'
  | 'ROW';
export type Casino = {
  id: string;
  name: string;
  status: 'demo' | 'approved';
  rating: null | number;
  summary: string;
  countries: CountryCode[];
  excludedCountries: CountryCode[];
  categories: string[];
  paymentMethods: string[];
  affiliateUrl: null | string;
  bonus: null | string;
};
export const casinos: Casino[] = [1, 2, 3].map((i) => ({
  id: `sample-${i}`,
  name: `Sample Casino ${i}`,
  status: 'demo',
  rating: null,
  summary:
    'Placeholder profile for layout and review workflow testing. No commercial relationship is implied.',
  countries: ['ROW'],
  excludedCountries: [],
  categories:
    i === 1 ? ['Live casino', 'Slots'] : i === 2 ? ['Slots'] : ['Live casino'],
  paymentMethods:
    i === 1 ? ['Cards', 'E-wallets'] : i === 2 ? ['Bank transfer'] : ['Crypto'],
  affiliateUrl: null,
  bonus: null,
}));
export function casinosForCountry(country: CountryCode) {
  return casinos.filter(
    (casino) =>
      !casino.excludedCountries.includes(country) &&
      (casino.countries.includes('ROW') || casino.countries.includes(country)),
  );
}
export const routeContent: Record<
  string,
  {
    title: string;
    eyebrow: string;
    description: string;
    intro: string;
    sections: { title: string; body: string }[];
    relatedLinks?: { label: string; href: string; description: string }[];
  }
> = {
  'best-online-casinos': {
    title: 'Best Online Casinos',
    eyebrow: 'Comparison methodology',
    description:
      'Learn how Casireo compares online casinos using transparent criteria, clear disclosures and responsible gambling standards.',
    intro:
      'Casireo does not publish a numbered “best” ranking without enough verified evidence. This guide explains the checks that should come before any recommendation and links to the operator review currently available.',
    sections: [
      {
        title: 'What a useful casino comparison should cover',
        body: 'A meaningful comparison separates factual checks from editorial judgment. Ownership information, current terms, account eligibility, security practices, responsible gambling controls, support access and product scope all need context. A polished website or large headline offer is not evidence that an operator is right for a particular player.',
      },
      {
        title: 'How commercial links are handled',
        body: 'An affiliate link may support Casireo, but it does not buy a rating or positive verdict. Affiliate pages are labeled near the first commercial link, and unverified bonuses, payout claims and country-specific availability statements are omitted.',
      },
      {
        title: 'Why there is no numbered ranking yet',
        body: 'Stake and JetTon are the approved active affiliate operators currently listed. Casireo does not yet have enough verified, comparable evidence to support a numbered ranking, so both are presented as unrated reviews instead of manufacturing a league table.',
      },
      {
        title: 'Checks to make before choosing',
        body: 'Confirm that you meet the legal age, that the operator accepts users in your location, and that local law permits access. Read the current terms directly, decide on a fixed entertainment budget, and do not register if any material condition is unclear.',
      },
    ],
    relatedLinks: [
      {
        label: 'Read the Stake casino review',
        href: '/stake-review',
        description:
          'See Casireo’s measured, unrated overview of the casino and sportsbook.',
      },
      {
        label: 'Browse all casino reviews',
        href: '/casino-reviews',
        description:
          'Understand which operator profiles are active and how commercial links are disclosed.',
      },
      {
        label: 'Read the responsible gambling guide',
        href: '/responsible-gambling',
        description: 'Set limits and recognize warning signs before playing.',
      },
    ],
  },
  'live-casino': {
    title: 'Live Casino Guide',
    eyebrow: 'Dealer-led games',
    description:
      'Understand live casino games, studio presentation, table limits and responsible play before choosing where to play.',
    intro:
      'Live casino games stream a real presenter or table to a player’s device. Video quality matters, but clear rules, usable controls, published limits and the ability to pause or leave matter more than presentation alone.',
    sections: [
      {
        title: 'How live casino games work',
        body: 'A live studio uses cameras and game interfaces to show play in real time. Common formats include roulette, blackjack and baccarat, although the games visible to a user depend on the operator, provider and jurisdiction.',
      },
      {
        title: 'What to compare before joining a table',
        body: 'Check the game rules, minimum and maximum stakes, interface language, bet-confirmation flow, connection requirements and any side-bet terms. Limits should fit a budget decided before play begins—not encourage a larger stake.',
      },
      {
        title: 'Streaming and mobile experience',
        body: 'A stable connection and legible controls are important on smaller screens. Players should be able to understand the current bet, remaining time and result without relying only on color or presenter commentary.',
      },
      {
        title: 'Keep live play in perspective',
        body: 'The pace and social presentation can make sessions feel more immersive. Set both a time limit and a spending limit, take breaks, and never interpret a streak, chat message or presenter remark as evidence about the next result.',
      },
    ],
    relatedLinks: [
      {
        label: 'Stake casino and sportsbook overview',
        href: '/stake-review',
        description:
          'The current review notes that Stake presents live casino categories without claiming specific game availability.',
      },
      {
        label: 'How Casireo compares casinos',
        href: '/best-online-casinos',
        description:
          'See the evidence and disclosure standards used across operator content.',
      },
      {
        label: 'Responsible gambling',
        href: '/responsible-gambling',
        description: 'Practical limit-setting and support guidance.',
      },
    ],
  },
  slots: {
    title: 'Online Slots Guide',
    eyebrow: 'Game mechanics',
    description:
      'Learn how online slots use RTP, volatility, paylines and features—and why none of them predicts the next result.',
    intro:
      'Slot information is most useful when it explains mechanics and risk rather than promising wins. Casireo does not publish “hot slot” claims or treat recent results as a guide to future outcomes.',
    sections: [
      {
        title: 'RTP is a long-run theoretical figure',
        body: 'Return to player describes a theoretical proportion returned across a very large number of plays under stated conditions. It is not a promise for one person or one session, and it does not show when a win will happen.',
      },
      {
        title: 'Volatility describes result patterns',
        body: 'Lower- and higher-volatility labels describe how outcomes may be distributed, not whether a game is due to pay. Terminology and models can differ, so provider game information should be read in context.',
      },
      {
        title: 'Paylines, ways and feature rules',
        body: 'Winning combinations may use fixed paylines, variable ways, clusters or other mechanics. Feature triggers, multipliers and bonus rounds can have separate conditions. The game’s own rules screen is the relevant source for how a title operates.',
      },
      {
        title: 'Use limits, not predictions',
        body: 'No betting pattern changes an independent random result. Choose a fixed entertainment budget, avoid autoplay if it makes spending harder to track, and stop when the planned time or money limit is reached.',
      },
    ],
    relatedLinks: [
      {
        label: 'Casino reviews',
        href: '/casino-reviews',
        description:
          'Find the active operator review without invented slot or bonus claims.',
      },
      {
        label: 'Casino bonus terms guide',
        href: '/casino-bonuses',
        description:
          'Learn why game contribution can affect promotional wagering.',
      },
      {
        label: 'Responsible gambling',
        href: '/responsible-gambling',
        description: 'Recognize harmful patterns and find support routes.',
      },
    ],
  },
  'casino-bonuses': {
    title: 'Casino Bonuses Explained',
    eyebrow: 'Terms before headlines',
    description:
      'Understand casino bonus wagering, eligibility, game contribution, expiry and withdrawal restrictions before opting in.',
    intro:
      'Casireo currently publishes no active bonus offer. This guide explains the terms that matter so readers can assess a promotion from its complete conditions rather than its headline amount.',
    sections: [
      {
        title: 'Wagering requirements',
        body: 'A wagering requirement describes how much qualifying play may be required before promotional funds or related winnings can be withdrawn. The base used for the calculation and whether deposit funds are included must be clear.',
      },
      {
        title: 'Eligibility and country restrictions',
        body: 'Promotions can be limited by location, age, account status, payment method or previous participation. An offer visible online should not be assumed to apply to every user.',
      },
      {
        title: 'Game contribution, maximum bets and expiry',
        body: 'Different games may contribute different percentages toward wagering. Maximum-bet rules and expiry dates can also affect whether terms are met. These conditions should be checked before accepting, not after playing.',
      },
      {
        title: 'Why Casireo omits unverified offers',
        body: 'Offer values and terms can change quickly. Casireo will only publish a promotion when its source, market, material conditions and verification date can be shown together. Stake’s current review therefore contains no bonus claim.',
      },
    ],
    relatedLinks: [
      {
        label: 'Read the Stake review',
        href: '/stake-review',
        description:
          'The review deliberately omits unverified bonus information.',
      },
      {
        label: 'Payment methods guide',
        href: '/payment-methods',
        description:
          'Understand why payment eligibility and withdrawal routes require separate checks.',
      },
      {
        label: 'Best online casinos methodology',
        href: '/best-online-casinos',
        description:
          'See how commercial claims are separated from editorial assessment.',
      },
    ],
  },
  'payment-methods': {
    title: 'Online Casino Payment Methods',
    eyebrow: 'Deposits and withdrawals',
    description:
      'Compare casino payment categories, fees, verification, deposits and withdrawal routes without unsupported speed claims.',
    intro:
      'A payment method offered for deposits is not necessarily available for withdrawals. Options, fees, limits and processing stages vary by operator, provider and country, so Casireo does not assign universal speed labels.',
    sections: [
      {
        title: 'Cards and bank payments',
        body: 'Cards and bank transfers are familiar options, but issuer policies, transaction limits and withdrawal support differ. A card deposit does not guarantee that the same card can receive a withdrawal.',
      },
      {
        title: 'E-wallets and alternative services',
        body: 'Digital wallets may separate casino transactions from a primary bank account, but fees, identity checks, account eligibility and operator support vary. Availability should be confirmed for both deposits and withdrawals.',
      },
      {
        title: 'Cryptocurrency considerations',
        body: 'Crypto transactions can be irreversible and network fees or confirmation times can change. Legal availability, price volatility, wallet security and operator terms all need consideration; Casireo does not present crypto as anonymous or universally available.',
      },
      {
        title: 'Checks before depositing',
        body: 'Review the cashier terms, minimum and maximum amounts, possible fees, supported withdrawal route and identity-verification requirements. Never deposit money needed for living costs, and do not use a payment method to bypass location rules.',
      },
    ],
    relatedLinks: [
      {
        label: 'Casino reviews',
        href: '/casino-reviews',
        description:
          'Operator pages list payment details only when they can be verified.',
      },
      {
        label: 'Casino bonuses explained',
        href: '/casino-bonuses',
        description:
          'Payment choice can affect promotion eligibility under an operator’s terms.',
      },
      {
        label: 'Responsible gambling',
        href: '/responsible-gambling',
        description:
          'Use payment and spending controls as part of a fixed budget.',
      },
    ],
  },
  'casino-reviews': {
    title: 'Online Casino Reviews',
    eyebrow: 'Independent review directory',
    description:
      'Read Casireo’s evidence-led online casino reviews with clear affiliate disclosure and no invented ratings, bonuses or availability claims.',
    intro:
      'Casireo publishes an operator review only when the relationship and scope can be described accurately. Stake and JetTon are currently the active affiliate reviews; pending operators are not displayed as partners or recommendations.',
    sections: [
      {
        title: 'What each review is designed to answer',
        body: 'A useful review should explain the operator’s product scope, the limits of what has been checked, important jurisdiction considerations, commercial disclosures and responsible gambling context. Unknown details should remain unknown rather than be filled with assumptions.',
      },
      {
        title: 'How ratings and offers are treated',
        body: 'Casireo has not rated Stake and does not publish an unverified Stake bonus. Future scores or offers will require a documented basis, appropriate market context and a visible verification date.',
      },
      {
        title: 'Affiliate disclosure and independence',
        body: 'Casireo may earn a commission from an eligible registration made through a clearly identified affiliate link. That possibility does not guarantee a favorable conclusion, and internal review links never conceal a direct affiliate destination.',
      },
      {
        title: 'Corrections and changing information',
        body: 'Operator products, terms and availability can change. Readers should confirm current information directly before acting. Evidence-backed correction requests are reviewed without promising a particular outcome.',
      },
    ],
    relatedLinks: [
      {
        label: 'Stake Casino Review',
        href: '/stake-review',
        description:
          'Read the current affiliate review, jurisdiction warning and responsible gambling guidance.',
      },
      {
        label: 'Best online casinos methodology',
        href: '/best-online-casinos',
        description:
          'Learn why Casireo does not publish a one-operator ranking.',
      },
      {
        label: 'Live casino guide',
        href: '/live-casino',
        description: 'Understand live dealer formats and what to compare.',
      },
    ],
  },
  about: {
    title: 'About Casireo',
    eyebrow: 'Independent by design',
    description:
      'Meet the principles behind Casireo’s international casino discovery portal.',
    intro:
      'Casireo is being built as an editorial discovery and comparison brand: useful before it is commercial, transparent about what is known, and careful about what is claimed.',
    sections: [
      {
        title: 'Our mission',
        body: 'Make complex casino information easier to compare without glamorizing gambling or hiding material conditions.',
      },
      {
        title: 'Editorial principles',
        body: 'Accuracy, independence, clear labeling, jurisdiction awareness, responsible gambling context, and prompt correction of verified errors.',
      },
    ],
  },
  contact: {
    title: 'Contact',
    eyebrow: 'Speak with Casireo',
    description:
      'Contact Casireo about corrections, editorial questions, accessibility, or business enquiries.',
    intro:
      'This foundation does not yet send form submissions. Use the categories below to prepare a clear message once verified contact channels are connected.',
    sections: [
      {
        title: 'Editorial & corrections',
        body: 'Include the page URL, the statement in question, and a reliable source supporting the correction.',
      },
      {
        title: 'Operator enquiries',
        body: 'Submitting an operator does not guarantee a review, placement, rating, or commercial relationship.',
      },
    ],
  },
  'responsible-gambling': {
    title: 'Responsible Gambling',
    eyebrow: 'Stay in control',
    description:
      'Practical safer-gambling guidance, warning signs, and routes to professional support.',
    intro:
      'Gambling should never be used to solve financial problems. It carries a real risk of harm and is not a way to make money. If it stops being enjoyable, stop and seek support.',
    sections: [
      {
        title: 'Set limits before you play',
        body: 'Choose a fixed entertainment budget and time limit. Never chase losses, borrow to gamble, or use money needed for bills.',
      },
      {
        title: 'Warning signs',
        body: 'Hiding play, spending more than intended, chasing losses, anxiety, borrowing, or neglecting work and relationships are reasons to pause and seek help.',
      },
      {
        title: 'Get help',
        body: 'Use the responsible gambling and self-exclusion services available in your country. If you are in immediate danger or crisis, contact local emergency services.',
      },
    ],
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    eyebrow: 'Legal',
    description:
      'How the Casireo foundation is designed to handle privacy and personal information.',
    intro:
      'Effective 30 August 2026. This pre-launch policy describes the current local foundation. It must be reviewed before analytics, advertising, accounts, or external forms are activated.',
    sections: [
      {
        title: 'Current data collection',
        body: 'This static foundation does not include user accounts, analytics, advertising trackers, or a connected contact form.',
      },
      {
        title: 'Future services',
        body: 'Before any data-processing service is enabled, this notice should identify the controller, purposes, lawful bases, recipients, retention, international transfers, rights, and contact channel.',
      },
      {
        title: 'Cookies',
        body: 'No non-essential cookie system is intentionally included in this foundation. Any future cookies or similar technologies must be documented and, where required, consent-managed.',
      },
    ],
  },
  'terms-and-conditions': {
    title: 'Terms & Conditions',
    eyebrow: 'Legal',
    description:
      'Terms for using Casireo’s informational casino comparison service.',
    intro:
      'Effective 30 August 2026. Casireo provides general information, not gambling, legal, or financial advice. The service is intended only for adults legally permitted to access gambling information where they live.',
    sections: [
      {
        title: 'Informational use',
        body: 'Casino availability, laws, terms, and promotions can change. Users must verify current operator terms and local legality before acting.',
      },
      {
        title: 'No operator relationship',
        body: 'Demo listings are placeholders only. They do not represent real casinos, endorsements, partnerships, bonuses, or affiliate arrangements.',
      },
      {
        title: 'Limitation and updates',
        body: 'The final production terms should identify the operating legal entity, governing law, dispute process, and full liability provisions before public launch.',
      },
    ],
  },
};
