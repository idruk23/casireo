export const locales = ['en', 'pl', 'de', 'fr', 'es'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
export const localeStatus: Record<Locale, 'active' | 'planned'> = { en:'active', pl:'planned', de:'planned', fr:'planned', es:'planned' };
