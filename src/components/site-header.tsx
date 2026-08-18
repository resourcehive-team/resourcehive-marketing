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
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="page-grid h-20 items-center">
        <div className="col-span-6 md:col-span-3">
          <Brand />
        </div>

        <nav className="col-span-6 hidden items-center justify-center gap-8 text-xs md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} className="underline-offset-4 hover:underline" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="col-span-6 flex items-center justify-end gap-2 md:col-span-3">
          <Link href={appPath("/login")} className="hidden px-3 py-2 text-xs underline-offset-4 hover:underline sm:block">
            Log in
          </Link>
          <Link
            href={appPath("/signup")}
            className={cn(buttonVariants({ size: "lg" }), "rounded-none bg-ink px-4 text-paper hover:bg-ink/80")}
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
