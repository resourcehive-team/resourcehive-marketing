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
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <Brand />
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
            A trusted resource-sharing platform for university communities.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/55" aria-label="Footer navigation">
          {footerLinks.map((item) => (
            <Link key={item.href} className="transition-colors hover:text-white" href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="transition-colors hover:text-white" href={appPath("/signup")}>
            Create account
          </Link>
        </nav>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/35">
        © {new Date().getFullYear()} ResourceHive. Built for better sharing across campus.
      </div>
    </footer>
  );
}
