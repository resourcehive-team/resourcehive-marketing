import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Box,
  Building2,
  CalendarDays,
  Camera,
  Check,
  DoorOpen,
  Network,
  Projector,
  Search,
  Users,
} from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { appPath } from "@/lib/config";
import { cn } from "@/lib/utils";

const principles = [
  { icon: Box, label: "Find what exists" },
  { icon: CalendarDays, label: "Book what is available" },
  { icon: Network, label: "Share on your terms" },
];

const resourceGroups = [
  {
    number: "01",
    icon: DoorOpen,
    title: "Spaces",
    description: "Lecture halls, meeting rooms, labs, and studios.",
    className: "bg-[#d9ddd0]",
  },
  {
    number: "02",
    icon: Projector,
    title: "Equipment",
    description: "Projectors, sound kits, tools, and specialist gear.",
    className: "bg-[#e5b94c]",
  },
  {
    number: "03",
    icon: Camera,
    title: "Media",
    description: "Cameras, lighting, recorders, and production kits.",
    className: "bg-[#c87554] text-[#171715]",
  },
  {
    number: "04",
    icon: BookOpen,
    title: "Materials",
    description: "Books, displays, event supplies, and shared collections.",
    className: "bg-ink text-paper",
  },
];

const organizationFeatures = [
  {
    title: "Ownership stays visible",
    description: "Every resource belongs to one organization, so responsibility is always clear.",
  },
  {
    title: "Access follows membership",
    description: "People see resources through the university groups they are approved to join.",
  },
  {
    title: "Sharing is selective",
    description: "Owners choose which faculties, departments, and clubs can discover each item.",
  },
  {
    title: "Bookings stay accountable",
    description: "Availability, point cost, and booking status live together in one record.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Join",
    description: "Create an account and request membership in the campus organizations you belong to.",
  },
  {
    number: "02",
    title: "Discover",
    description: "Search a catalogue shaped by your approved memberships and organization access.",
  },
  {
    number: "03",
    title: "Book",
    description: "Choose an available time, understand the point cost, and confirm the reservation.",
  },
];

export default function HomePage() {
  return (
    <main>
      <SiteHeader />

      <section className="page-grid border-b border-line py-16 sm:py-20 lg:py-24">
        <p className="eyebrow col-span-full">RESOURCE SHARING / UNIVERSITY COMMUNITIES</p>
        <h1 className="font-serif col-span-full mt-6 max-w-5xl text-[clamp(3.8rem,8.5vw,8.5rem)] leading-[0.84] tracking-[-0.055em] text-ink">
          A shared campus,
          <br />
          within reach.
        </h1>
      </section>

      <section className="page-grid border-b border-line py-8 sm:py-10">
        <div className="col-span-full grid min-h-[34rem] border border-ink bg-ink lg:grid-cols-[0.37fr_0.63fr]">
          <div className="flex flex-col justify-between border-b border-white/20 p-7 text-paper lg:border-b-0 lg:border-r lg:p-10">
            <div>
              <p className="eyebrow text-paper/45">THE CAMPUS CATALOGUE</p>
              <h2 className="font-serif mt-6 max-w-md text-4xl leading-[0.95] tracking-[-0.035em] sm:text-5xl">
                Know what your community can share.
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-6 text-paper/65 sm:text-base sm:leading-7">
                ResourceHive gives departments, clubs, and students one clear place to find resources, understand access, and make a booking.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={appPath("/signup")}
                className={cn(buttonVariants({ size: "lg" }), "rounded-none bg-paper px-5 text-ink hover:bg-paper/85")}
              >
                Create an account
                <ArrowRight aria-hidden="true" />
              </Link>
              <Link
                href="#how-it-works"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-none !border-paper/30 !bg-transparent px-5 !text-paper hover:!bg-paper hover:!text-ink focus-visible:!bg-paper focus-visible:!text-ink",
                )}
              >
                See how it works
              </Link>
            </div>
          </div>

          <div className="relative min-h-[26rem] overflow-hidden bg-clay lg:min-h-[34rem]">
            <Image
              src="/resourcehive-cover-editorial.png"
              alt="ResourceHive being used in a university lecture hall"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 63vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="page-grid border-b border-line">
        <p className="col-span-full border-b border-line py-5 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          One system, three simple promises
        </p>
        {principles.map((principle) => (
          <div key={principle.label} className="col-span-full flex items-center gap-4 border-b border-line py-6 last:border-b-0 md:col-span-4 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0">
            <principle.icon className="size-5 stroke-[1.4]" aria-hidden="true" />
            <span className="text-sm">{principle.label}</span>
          </div>
        ))}
      </section>

      <section id="features" className="page-grid scroll-mt-8 border-b border-line py-20 lg:py-28">
        <p className="eyebrow col-span-full lg:col-span-2">HOW IT COMES TOGETHER</p>
        <div className="col-span-full mt-8 lg:col-span-5 lg:col-start-3 lg:mt-0">
          <h2 className="section-heading">One place. Three useful views.</h2>
        </div>
        <p className="col-span-full mt-6 max-w-xl text-base leading-7 text-muted-foreground lg:col-span-4 lg:col-start-9 lg:mt-1">
          A shared catalogue for people who need something, a booking view for what happens next, and clear controls for the organizations that make it available.
        </p>

        <div className="col-span-full mt-12 grid border-l border-t border-line lg:grid-cols-3">
          <Card className="min-h-[30rem] rounded-none border-b border-r border-line bg-paper py-0 ring-0">
            <CataloguePreview />
            <CardHeader className="mt-auto border-t border-line p-6">
              <p className="eyebrow text-muted-foreground">01 / CATALOGUE</p>
              <CardTitle className="font-serif mt-3 text-3xl font-normal tracking-[-0.025em]">Discover what is nearby.</CardTitle>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Browse resources with their owner, access, status, and point cost already visible.
              </p>
            </CardHeader>
          </Card>

          <Card className="min-h-[30rem] rounded-none border-b border-r border-line bg-paper py-0 ring-0">
            <BookingPreview />
            <CardHeader className="mt-auto border-t border-line p-6">
              <p className="eyebrow text-muted-foreground">02 / BOOKINGS</p>
              <CardTitle className="font-serif mt-3 text-3xl font-normal tracking-[-0.025em]">Choose a time with confidence.</CardTitle>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                See availability, make a reservation, and keep upcoming bookings in one view.
              </p>
            </CardHeader>
          </Card>

          <Card className="min-h-[30rem] rounded-none border-b border-r border-line bg-ink py-0 text-paper ring-0">
            <OrganizationPreview />
            <CardHeader className="mt-auto border-t border-white/20 p-6">
              <p className="eyebrow text-paper/45">03 / ORGANIZATIONS</p>
              <CardTitle className="font-serif mt-3 text-3xl font-normal tracking-[-0.025em]">Share without losing control.</CardTitle>
              <p className="mt-3 text-sm leading-6 text-paper/60">
                Memberships and organization roles decide who can see, book, and manage resources.
              </p>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="border-b border-line bg-[#faf8f4] py-20 lg:py-28">
        <div className="page-grid">
          <div className="col-span-full lg:col-span-6">
            <p className="eyebrow">WHAT CAN BE SHARED</p>
            <h2 className="section-heading mt-5 max-w-2xl">Useful things deserve to be used.</h2>
          </div>
          <p className="col-span-full mt-6 max-w-lg text-base leading-7 text-muted-foreground lg:col-span-4 lg:col-start-9 lg:mt-8">
            From a single camera to a whole room, ResourceHive gives each shared asset a visible home and a clear path to access.
          </p>

          <div className="col-span-full mt-12 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {resourceGroups.map((group) => (
              <article key={group.number} className={cn("flex min-h-96 flex-col border-b border-r border-line p-5", group.className)}>
                <div className="flex items-start justify-between">
                  <span className="eyebrow">{group.number}</span>
                  <group.icon className="size-7 stroke-[1.2]" aria-hidden="true" />
                </div>
                <div className="mt-auto">
                  <h3 className="font-serif text-4xl tracking-[-0.035em]">{group.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-6 opacity-65">{group.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="for-organizations" className="scroll-mt-8 border-b border-line bg-ink py-20 text-paper lg:py-28">
        <div className="page-grid">
          <div className="col-span-full lg:col-span-5">
            <p className="eyebrow text-paper/45">BUILT AROUND CAMPUS STRUCTURE</p>
            <h2 className="font-serif mt-5 max-w-xl text-5xl leading-[0.92] tracking-[-0.04em] sm:text-6xl">
              From one club to a whole university.
            </h2>
            <p className="mt-7 max-w-md text-base leading-7 text-paper/60">
              ResourceHive keeps faculties, departments, clubs, and their relationships intact. Sharing expands without flattening how the campus actually works.
            </p>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mt-10 rounded-none !border-paper/30 !bg-transparent px-5 !text-paper hover:!bg-paper hover:!text-ink focus-visible:!bg-paper focus-visible:!text-ink",
              )}
            >
              Organization onboarding
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          <div className="col-span-full mt-12 border border-white/25 lg:col-span-6 lg:col-start-7 lg:mt-0">
            <div className="grid min-h-48 place-items-center border-b border-white/20 bg-[#2a2b2b] p-8">
              <div className="w-full max-w-md">
                <div className="mx-auto flex w-fit items-center gap-3 border border-paper/40 bg-ink px-4 py-3">
                  <Building2 className="size-4" aria-hidden="true" />
                  <span className="text-xs">University community</span>
                </div>
                <div className="mx-auto h-8 w-px bg-paper/35" />
                <div className="grid grid-cols-3 gap-2">
                  {["Faculty", "Department", "Club"].map((name) => (
                    <div key={name} className="border border-paper/30 px-3 py-3 text-center text-[0.65rem] uppercase tracking-wider text-paper/70">
                      {name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2">
              {organizationFeatures.map((feature, index) => (
                <div key={feature.title} className="min-h-48 border-b border-white/20 p-6 odd:sm:border-r last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0">
                  <span className="eyebrow text-paper/35">0{index + 1}</span>
                  <h3 className="mt-8 text-sm font-medium">{feature.title}</h3>
                  <p className="mt-3 text-xs leading-5 text-paper/50">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="page-grid scroll-mt-8 border-b border-line py-20 lg:py-28">
        <p className="eyebrow col-span-full lg:col-span-2">HOW IT WORKS</p>
        <div className="col-span-full mt-6 lg:col-span-5 lg:col-start-3 lg:mt-0">
          <h2 className="section-heading">From “does anyone have one?” to booked.</h2>
        </div>

        <div className="col-span-full mt-14 border-t border-ink lg:col-span-10 lg:col-start-3">
          {workflow.map((step) => (
            <div key={step.number} className="grid gap-4 border-b border-line py-7 sm:grid-cols-[5rem_10rem_1fr] sm:items-start">
              <span className="eyebrow text-muted-foreground">{step.number}</span>
              <h3 className="font-serif text-3xl tracking-[-0.03em]">{step.title}</h3>
              <p className="max-w-xl text-sm leading-6 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-grid border-b border-line py-12 lg:py-16">
        <div className="col-span-full grid border border-line lg:grid-cols-[1fr_0.72fr]">
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:min-h-[28rem]">
            <div>
              <p className="eyebrow">START SHARING</p>
              <h2 className="font-serif mt-6 max-w-2xl text-5xl leading-[0.9] tracking-[-0.045em] sm:text-6xl">
                Put the resources you already have to better use.
              </h2>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={appPath("/signup")}
                className={cn(buttonVariants({ size: "lg" }), "rounded-none bg-ink px-5 text-paper hover:bg-ink/80")}
              >
                Create an account
                <ArrowRight aria-hidden="true" />
              </Link>
              <Link
                href={appPath("/login")}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-none !border-ink !bg-transparent px-5 !text-ink hover:!bg-ink hover:!text-paper focus-visible:!bg-ink focus-visible:!text-paper",
                )}
              >
                Log in
              </Link>
            </div>
          </div>

          <div className="grid min-h-72 grid-cols-2 grid-rows-2 border-t border-line lg:border-l lg:border-t-0">
            <div className="border-b border-r border-line bg-[#d9ddd0]" />
            <div className="border-b border-line bg-[#e5b94c]" />
            <div className="border-r border-line bg-[#c87554]" />
            <div className="grid place-items-center bg-ink text-paper">
              <span className="font-serif text-7xl tracking-[-0.08em]">RH</span>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function CataloguePreview() {
  const resources = [
    [Projector, "Portable projector", "Media Unit", "12 pts"],
    [Camera, "DSLR camera", "Design Society", "18 pts"],
  ] as const;

  return (
    <CardContent className="p-5">
      <div className="border border-line bg-[#faf8f4]">
        <div className="flex items-center gap-3 border-b border-line px-4 py-3 text-xs text-muted-foreground">
          <Search className="size-3.5" aria-hidden="true" />
          Search shared resources
        </div>
        {resources.map(([Icon, name, owner, points]) => (
          <div key={name} className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-line p-3 last:border-b-0">
            <span className="grid size-10 place-items-center bg-secondary">
              <Icon className="size-4 stroke-[1.4]" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-xs font-medium">{name}</span>
              <span className="mt-1 block text-[0.65rem] text-muted-foreground">{owner}</span>
            </span>
            <span className="text-[0.65rem] text-muted-foreground">{points}</span>
          </div>
        ))}
      </div>
    </CardContent>
  );
}

function BookingPreview() {
  const days = Array.from({ length: 14 }, (_, index) => index + 12);

  return (
    <CardContent className="p-5">
      <div className="border border-line bg-[#faf8f4] p-4">
        <div className="flex items-center justify-between border-b border-line pb-3">
          <span className="text-xs font-medium">August 2026</span>
          <CalendarDays className="size-4 stroke-[1.4]" aria-hidden="true" />
        </div>
        <div className="mt-4 grid grid-cols-7 border-l border-t border-line">
          {days.map((day) => (
            <span key={day} className={cn("grid aspect-square place-items-center border-b border-r border-line text-[0.65rem]", day === 17 && "bg-ink text-paper")}>
              {day}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-line pt-3 text-[0.65rem]">
          <span>Audio equipment kit</span>
          <span className="text-muted-foreground">10:00–12:00</span>
        </div>
      </div>
    </CardContent>
  );
}

function OrganizationPreview() {
  return (
    <CardContent className="p-5">
      <div className="border border-paper/25 p-4">
        <div className="flex items-center gap-3 border-b border-paper/20 pb-4">
          <span className="grid size-10 place-items-center border border-paper/30">
            <Users className="size-4 stroke-[1.4]" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-medium">Faculty of Engineering</p>
            <p className="mt-1 text-[0.65rem] text-paper/45">Approved membership</p>
          </div>
        </div>
        <div className="mt-4 grid gap-2 text-[0.65rem] text-paper/60">
          {["Resource catalogue", "Booking access", "Organization updates"].map((label) => (
            <div key={label} className="flex items-center gap-3 border border-paper/20 px-3 py-2.5">
              <Check className="size-3 text-[#e5b94c]" aria-hidden="true" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  );
}
