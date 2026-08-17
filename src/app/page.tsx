import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck2, PackageCheck, UsersRound } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export default function HomePage() {
  return (
    <main className="site-shell">
      <section className="hero-grid overflow-hidden border-x border-white/10">
        <header className="flex h-20 items-center justify-between border-b border-white/10 px-5 sm:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-3" aria-label="ResourceHive home">
            <Image src="/resourcehive-logo.png" alt="" width={34} height={34} priority />
            <span className="text-lg font-semibold tracking-tight text-white">
              Resource<span className="text-primary">Hive</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex" aria-label="Primary navigation">
            <Link className="transition-colors hover:text-white" href="#features">Features</Link>
            <Link className="transition-colors hover:text-white" href="#how-it-works">How it works</Link>
            <Link className="transition-colors hover:text-white" href="#for-organizations">For organizations</Link>
          </nav>

          <Link
            href={`${appUrl}/login`}
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-white/15 bg-white/5 px-4 text-white hover:bg-white/10")}
          >
            Sign in
          </Link>
        </header>

        <div className="px-5 pb-16 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pb-20 lg:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="outline" className="h-7 border-primary/30 bg-primary/10 px-3 text-primary">
              Built for university communities
            </Badge>
            <h1 className="mx-auto mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Everything your campus has, shared better.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-white/60 sm:text-lg">
              ResourceHive gives departments, clubs, and students one trusted place to discover, share, and book the resources already around them.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={`${appUrl}/register`}
                className={cn(buttonVariants({ size: "lg" }), "h-11 bg-primary px-5 text-black shadow-[0_0_40px_rgba(246,170,28,0.22)] hover:bg-primary/90")}
              >
                Get started
                <ArrowRight aria-hidden="true" />
              </Link>
              <Link
                href="#how-it-works"
                className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "h-11 px-5 text-white/75 hover:bg-white/5 hover:text-white")}
              >
                See how it works
              </Link>
            </div>
          </div>

          <div className="relative mx-auto mt-14 max-w-5xl">
            <div className="absolute inset-x-20 -top-6 h-32 bg-primary/25 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-2 shadow-2xl shadow-black/40">
              <div className="relative aspect-[16/8.2] min-h-64 overflow-hidden rounded-xl">
                <Image
                  src="/resourcehive-cover.png"
                  alt="A university lecture hall with the ResourceHive mobile resource catalogue in view"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
                <div className="absolute inset-x-4 bottom-4 grid gap-2 sm:inset-x-6 sm:bottom-6 sm:grid-cols-3">
                  {[
                    [PackageCheck, "Discover", "Find resources across campus"],
                    [CalendarCheck2, "Book", "Reserve with clear availability"],
                    [UsersRound, "Share", "Keep access within your community"],
                  ].map(([Icon, title, description]) => {
                    const FeatureIcon = Icon as typeof PackageCheck;
                    return (
                      <div key={String(title)} className="hidden items-center gap-3 rounded-xl border border-white/10 bg-black/55 p-3 backdrop-blur-md sm:flex">
                        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary text-black">
                          <FeatureIcon className="size-4" aria-hidden="true" />
                        </span>
                        <span className="text-left">
                          <span className="block text-sm font-medium text-white">{String(title)}</span>
                          <span className="block text-xs text-white/55">{String(description)}</span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
