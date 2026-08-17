import Link from "next/link";

import { Brand } from "@/components/brand";
import { appPath } from "@/lib/config";

const footerLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function SiteFooter() {
  return (
    <footer>
      <div className="page-grid py-12 lg:py-16">
        <div className="col-span-full lg:col-span-5">
          <h2 className="font-serif max-w-md text-4xl leading-[0.95] tracking-[-0.04em]">Share more. Waste less. Build together.</h2>
          <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
            ResourceHive helps university communities put existing rooms, equipment, and materials to better use.
          </p>
        </div>

        <div className="col-span-full mt-10 lg:col-span-6 lg:col-start-7 lg:mt-0">
          <nav className="grid grid-cols-2 border-l border-t border-line text-xs sm:grid-cols-3" aria-label="Footer navigation">
            {footerLinks.map((item) => (
              <Link key={item.href} className="border-b border-r border-line px-4 py-4 hover:bg-secondary" href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="border-b border-r border-line px-4 py-4 hover:bg-secondary" href={appPath("/signup")}>
              Create account
            </Link>
          </nav>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="page-grid items-end py-7">
          <div className="col-span-full sm:col-span-6"><Brand /></div>
          <p className="col-span-full mt-4 text-xs text-muted-foreground sm:col-span-6 sm:mt-0 sm:text-right">
            © {new Date().getFullYear()} ResourceHive
          </p>
        </div>
      </div>
    </footer>
  );
}
