import Link from 'next/link';
import { ArrowRight, BadgeInfo } from 'lucide-react';

export function JetTonCard() {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-[#d6a94f]/35 bg-gradient-to-b from-[#171a18] to-[#0d0f14] p-5 transition hover:-translate-y-1 hover:border-[#d6a94f]/65">
      <span className="absolute right-0 top-0 rounded-bl-xl bg-gradient-to-r from-[#9b6d24] to-[#c79a43] px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-black">
        Affiliate review
      </span>
      <div className="mb-5 flex items-center gap-4">
        <div
          aria-hidden="true"
          className="display grid h-14 w-14 place-items-center rounded-xl bg-[#20252e] text-xl font-bold text-white"
        >
          JT
        </div>
        <div>
          <h3 className="font-bold">JetTon</h3>
          <p className="mt-1 text-xs text-stone-500">Online casino</p>
        </div>
      </div>
      <div className="mb-5 flex items-center justify-between border-y border-white/5 py-3">
        <span className="flex items-center gap-1 text-sm text-[#e0b860]">
          <BadgeInfo size={15} /> Editorial review
        </span>
        <span className="text-xs text-stone-500">Not rated</span>
      </div>
      <p className="mb-4 text-sm leading-6 text-stone-400">
        A conservative JetTon overview focused on confirmed availability context
        for Azerbaijan, Uzbekistan and Indonesia.
      </p>
      <p className="mb-5 text-xs leading-5 text-stone-500">
        Affiliate review. No bonus is listed.
      </p>
      <Link
        href="/jetton-review"
        className="flex items-center justify-center rounded-lg border border-[#d6a94f]/45 py-3 text-sm font-bold text-[#e4bd6d]"
      >
        Read JetTon review <ArrowRight className="ml-2" size={15} />
      </Link>
    </article>
  );
}
