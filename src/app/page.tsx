import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarCheck2,
  Check,
  PackageCheck,
  Search,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import { FeatureShowcase } from "@/components/feature-showcase";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { appPath } from "@/lib/config";
import { cn } from "@/lib/utils";

const communityTypes = ["Faculties", "Departments", "Clubs", "Student societies"];

const workflow = [
  {
    number: "01",
    icon: UsersRound,
    title: "Join your community",
    description: "Create an account and request membership in the organizations you belong to.",
  },
  {
    number: "02",
    icon: Search,
    title: "Find what you need",
    description: "Browse the resources your approved memberships make available to you.",
  },
  {
    number: "03",
    icon: CalendarCheck2,
    title: "Book with clarity",
    description: "Choose an available time, understand the point cost, and keep the booking visible.",
  },
];

const organizationBenefits = [
  "Keep resource ownership with the right organization",
  "Choose which organizations can discover each resource",
  "Manage member access through explicit approval",
  "Track bookings without separate spreadsheets and message threads",
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <section className="hero-grid overflow-hidden border-x border-white/10">
        <SiteHeader />

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
                href={appPath("/signup")}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 bg-primary px-5 text-black shadow-[0_0_40px_rgba(246,170,28,0.22)] hover:bg-primary/90",
                )}
              >
                Get started
                <ArrowRight aria-hidden="true" />
              </Link>
              <Link
                href="#how-it-works"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "h-11 px-5 text-white/75 hover:bg-white/5 hover:text-white",
                )}
              >
                See how it works
              </Link>
            </div>
          </div>

          <div className="relative mx-auto mt-14 max-w-5xl">
            <div className="absolute inset-x-20 -top-6 h-32 bg-primary/25 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-2 shadow-2xl shadow-black/40">
              <BorderBeam size={110} duration={10} colorFrom="#f6aa1c" colorTo="#fff1c7" />
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

      <section className="border-x border-t border-white/10 bg-[#0d0e11] px-5 py-10 sm:px-8 lg:px-10">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-white/35">
          One shared place for
        </p>
        <div className="mt-6 grid grid-cols-2 border-y border-white/10 sm:grid-cols-4">
          {communityTypes.map((type) => (
            <div key={type} className="border-white/10 px-3 py-5 text-center text-sm text-white/60 odd:border-r sm:border-r sm:last:border-r-0">
              {type}
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="scroll-mt-6 border-x border-t border-white/10 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">The shared campus catalogue</p>
          <h2 className="section-title">Less chasing. More sharing.</h2>
          <p className="section-copy">
            ResourceHive brings discovery, organization access, and bookings together without adding another complicated process.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-6xl">
          <FeatureShowcase />
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-6 border-x border-t border-white/10 bg-[#0d0e11] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">How it works</p>
          <h2 className="section-title">From “does anyone have one?” to booked.</h2>
          <p className="section-copy">A clear path for people who need resources and the teams responsible for them.</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-4 lg:grid-cols-3">
          {workflow.map((step) => (
            <Card key={step.number} className="min-h-72 justify-between bg-white/[0.025] ring-white/10">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <step.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-white/25">{step.number}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl text-white">{step.title}</CardTitle>
                <p className="mt-3 leading-6 text-white/50">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="for-organizations" className="scroll-mt-6 border-x border-t border-white/10 px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="section-kicker text-left">For organizations</p>
            <h2 className="section-title text-left">Share widely. Stay in control.</h2>
            <p className="section-copy mx-0 text-left">
              Resource owners decide what is available and who can access it. The university’s organization structure stays visible instead of disappearing into a flat list.
            </p>
            <Link
              href={appPath("/signup")}
              className={cn(buttonVariants({ size: "lg" }), "mt-8 h-11 bg-primary px-5 text-black hover:bg-primary/90")}
            >
              Create an account
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-7">
            <div className="absolute right-0 top-0 size-40 bg-primary/10 blur-3xl" aria-hidden="true" />
            <div className="relative flex items-center gap-4 border-b border-white/10 pb-5">
              <span className="grid size-12 place-items-center rounded-xl bg-primary text-black">
                <Building2 className="size-6" aria-hidden="true" />
              </span>
              <div>
                <p className="font-medium text-white">Organization workspace</p>
                <p className="mt-1 text-sm text-white/40">Ownership and access stay explicit</p>
              </div>
            </div>
            <ul className="relative mt-5 grid gap-3">
              {organizationBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 rounded-xl border border-white/8 bg-black/20 p-4 text-sm leading-6 text-white/65">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-3" aria-hidden="true" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-x border-t border-white/10 p-5 sm:p-8 lg:p-10">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-[radial-gradient(circle_at_50%_0%,rgba(246,170,28,0.2),transparent_52%),#111216] px-5 py-16 text-center sm:px-10 sm:py-20">
          <ShieldCheck className="mx-auto size-8 text-primary" aria-hidden="true" />
          <h2 className="mx-auto mt-5 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl">
            Put the resources you already have to better use.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-7 text-white/55">
            Join ResourceHive and make campus sharing easier for everyone involved.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={appPath("/signup")}
              className={cn(buttonVariants({ size: "lg" }), "h-11 bg-primary px-5 text-black hover:bg-primary/90")}
            >
              Get started
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 border-white/15 bg-white/5 px-5 text-white hover:bg-white/10")}
            >
              Organization onboarding
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
