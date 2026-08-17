import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function ContentPage({
  eyebrow,
  title,
  introduction,
  children,
}: {
  eyebrow: string;
  title: string;
  introduction: string;
  children: ReactNode;
}) {
  return (
    <main className="site-shell">
      <SiteHeader />
      <div className="border-x border-white/10 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <article className="prose-page mx-auto max-w-3xl">
          <p className="section-kicker text-left">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lead">{introduction}</p>
          {children}
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
