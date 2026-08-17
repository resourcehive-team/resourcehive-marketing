import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, CalendarDays, Network } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { appPath } from "@/lib/config";
import { cn } from "@/lib/utils";

const principles = [
  { icon: Box, label: "Find what exists" },
  { icon: CalendarDays, label: "Book what is available" },
  { icon: Network, label: "Share on your terms" },
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
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-none border-paper/30 bg-transparent px-5 text-paper hover:bg-paper hover:text-ink")}
              >
                See how it works
              </Link>
            </div>
          </div>

          <div className="relative min-h-[26rem] overflow-hidden bg-clay lg:min-h-[34rem]">
            <Image
              src="/resourcehive-cover.png"
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
    </main>
  );
}
