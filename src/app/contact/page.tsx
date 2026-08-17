import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Building2, UserRoundPlus } from "lucide-react";

import { ContentPage } from "@/components/content-page";
import { buttonVariants } from "@/components/ui/button";
import { appPath } from "@/lib/config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to the ResourceHive team about organization onboarding and product access.",
  openGraph: {
    title: "Contact | ResourceHive",
    description: "Talk to the ResourceHive team about organization onboarding and product access.",
  },
  twitter: {
    title: "Contact | ResourceHive",
    description: "Talk to the ResourceHive team about organization onboarding and product access.",
  },
};

export default function ContactPage() {
  return (
    <ContentPage
      eyebrow="Contact"
      title="Bring ResourceHive to your organization."
      introduction="ResourceHive is being built for university departments, clubs, and student communities that want a clearer way to share what they already have."
    >
      <div className="not-prose mt-12 grid gap-4 sm:grid-cols-2">
        <div className="flex min-h-64 flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6">
          <Building2 className="size-6 text-primary" aria-hidden="true" />
          <h2 className="mt-8 text-xl font-medium text-white">Organization onboarding</h2>
          <p className="mt-3 flex-1 text-sm leading-6 text-white/50">
            Tell the project team about your university organization, the resources you manage, and who needs access.
          </p>
          <Link
            href="https://github.com/resourcehive-team/resourcehive/issues"
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-6 h-10 border-white/15 bg-white/5 text-white hover:bg-white/10")}
          >
            Contact the project team
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>

        <div className="flex min-h-64 flex-col rounded-2xl border border-white/10 bg-white/[0.025] p-6">
          <UserRoundPlus className="size-6 text-primary" aria-hidden="true" />
          <h2 className="mt-8 text-xl font-medium text-white">Individual access</h2>
          <p className="mt-3 flex-1 text-sm leading-6 text-white/50">
            Create an account, then request membership in the organizations that already use ResourceHive.
          </p>
          <Link
            href={appPath("/signup")}
            className={cn(buttonVariants({ size: "lg" }), "mt-6 h-10 bg-primary text-black hover:bg-primary/90")}
          >
            Create an account
          </Link>
        </div>
      </div>
      <p className="mt-8 text-sm text-white/35">
        The public contact workflow is still being prepared. Project enquiries currently go through the ResourceHive repository so they remain visible to the team.
      </p>
    </ContentPage>
  );
}
