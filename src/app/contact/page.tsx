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
      <div className="not-prose mt-12 grid border-l border-t border-line sm:grid-cols-2">
        <div className="flex min-h-72 flex-col border-b border-r border-line p-6">
          <Building2 className="size-6 stroke-[1.3]" aria-hidden="true" />
          <h2 className="font-serif mt-10 text-3xl tracking-[-0.03em]">Organization onboarding</h2>
          <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
            Tell the project team about your university organization, the resources you manage, and who needs access.
          </p>
          <Link
            href="https://github.com/resourcehive-team/resourcehive/issues"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "mt-6 h-10 rounded-none !border-ink !bg-transparent !text-ink hover:!bg-ink hover:!text-paper focus-visible:!bg-ink focus-visible:!text-paper",
            )}
          >
            Contact the project team
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>

        <div className="flex min-h-72 flex-col border-b border-r border-line bg-[#e5b94c] p-6">
          <UserRoundPlus className="size-6 stroke-[1.3]" aria-hidden="true" />
          <h2 className="font-serif mt-10 text-3xl tracking-[-0.03em]">Individual access</h2>
          <p className="mt-3 flex-1 text-sm leading-6 text-ink/65">
            Create an account, then request membership in the organizations that already use ResourceHive.
          </p>
          <Link
            href={appPath("/signup")}
            className={cn(buttonVariants({ size: "lg" }), "mt-6 h-10 rounded-none bg-ink text-paper hover:bg-ink/80")}
          >
            Create an account
          </Link>
        </div>
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        The public contact workflow is still being prepared. Project enquiries currently go through the ResourceHive repository so they remain visible to the team.
      </p>
    </ContentPage>
  );
}
