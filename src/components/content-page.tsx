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
    <main>
      <SiteHeader />
      <div className="page-grid border-b border-line py-16 sm:py-20 lg:py-24">
        <article className="prose-page col-span-full lg:col-span-8 lg:col-start-3">
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
