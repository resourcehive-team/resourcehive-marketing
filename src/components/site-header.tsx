import Link from "next/link";

import { Brand } from "@/components/brand";
import { buttonVariants } from "@/components/ui/button";
import { appPath } from "@/lib/config";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#for-organizations", label: "For organizations" },
];

export function SiteHeader() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 px-5 sm:px-8 lg:px-10">
      <Brand />

      <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex" aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link key={item.href} className="transition-colors hover:text-white" href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link
        href={appPath("/login")}
        className={cn(
          buttonVariants({ variant: "outline", size: "lg" }),
          "border-white/15 bg-white/5 px-4 text-white hover:bg-white/10",
        )}
      >
        Sign in
      </Link>
    </header>
  );
}
