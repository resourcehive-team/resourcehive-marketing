import {
  Building2,
  CalendarCheck2,
  Check,
  Coins,
  PackageSearch,
  UsersRound,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: PackageSearch,
    name: "A catalogue your community can actually use",
    description:
      "Browse equipment, rooms, and shared materials with ownership, access, and point cost made clear.",
    href: "#how-it-works",
    cta: "See the workflow",
    className: "col-span-3 lg:col-span-2",
    background: <ResourceCataloguePreview />,
  },
  {
    Icon: UsersRound,
    name: "Access follows membership",
    description:
      "Approved organization memberships determine what each person can discover and book.",
    href: "#for-organizations",
    cta: "For organizations",
    className: "col-span-3 lg:col-span-1",
    background: <MembershipPreview />,
  },
  {
    Icon: CalendarCheck2,
    name: "Bookings stay visible",
    description:
      "Keep upcoming reservations, availability, and resource costs in one shared view.",
    href: "#how-it-works",
    cta: "How it works",
    className: "col-span-3",
    background: <BookingPreview />,
  },
];

export function FeatureShowcase() {
  return (
    <BentoGrid className="auto-rows-[25rem] lg:grid-cols-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}

function ResourceCataloguePreview() {
  const resources = [
    { name: "Portable projector", owner: "Media Unit", points: 12 },
    { name: "DSLR camera", owner: "Design Society", points: 18 },
  ];

  return (
    <div className="absolute inset-x-5 top-5 grid gap-2 transition-transform duration-300 group-hover:-translate-y-1 sm:grid-cols-2">
      {resources.map((resource) => (
        <div key={resource.name} className="rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur-sm">
          <div className="flex items-start justify-between gap-4">
            <span className="text-sm font-medium text-white">{resource.name}</span>
            <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] font-medium text-emerald-300">
              Available
            </span>
          </div>
          <p className="mt-2 text-xs text-white/45">Shared by {resource.owner}</p>
          <div className="mt-5 flex items-center gap-1.5 text-xs text-primary">
            <Coins className="size-3.5" aria-hidden="true" />
            {resource.points} points
          </div>
        </div>
      ))}
    </div>
  );
}

function MembershipPreview() {
  return (
    <div className="absolute inset-x-5 top-5 rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1">
      <div className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-lg bg-primary/15 text-primary">
          <Building2 className="size-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-medium text-white">Faculty of Engineering</p>
          <p className="text-xs text-white/45">Organization membership</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-emerald-300">
        <Check className="size-3.5" aria-hidden="true" />
        Approved access
      </div>
    </div>
  );
}

function BookingPreview() {
  return (
    <div className="absolute inset-x-5 top-5 flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-1 sm:inset-x-8 sm:p-5">
      <div className="flex min-w-0 items-center gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-black">
          <CalendarCheck2 className="size-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-white">Audio equipment kit</p>
          <p className="mt-1 text-xs text-white/45">Tuesday · 10:00–12:00 · Media Unit</p>
        </div>
      </div>
      <span className="hidden rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary sm:block">
        Confirmed
      </span>
    </div>
  );
}
