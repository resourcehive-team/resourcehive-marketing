import type { Metadata } from "next";

import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How ResourceHive handles information used by the platform.",
  openGraph: {
    title: "Privacy | ResourceHive",
    description: "How ResourceHive handles information used by the platform.",
  },
  twitter: {
    title: "Privacy | ResourceHive",
    description: "How ResourceHive handles information used by the platform.",
  },
};

export default function PrivacyPage() {
  return (
    <ContentPage
      eyebrow="Privacy"
      title="Privacy notice"
      introduction="This notice explains the information ResourceHive uses to operate the platform and support trusted resource sharing within university communities."
    >
      <p className="notice">Initial service notice · Updated 17 August 2026</p>

      <h2>Information the service uses</h2>
      <p>
        ResourceHive processes account details, email verification state, organization membership requests and roles, resource records, bookings, point balances, and service notifications. Technical records may also be retained to keep accounts secure and diagnose errors.
      </p>

      <h2>Why that information is needed</h2>
      <p>
        This information is used to authenticate users, enforce organization access, show eligible resources, create and manage bookings, deliver service updates, and protect the platform from misuse.
      </p>

      <h2>Organization visibility</h2>
      <p>
        Membership and resource access are scoped to the relevant university organization. ResourceHive does not make private organization data public through this marketing website.
      </p>

      <h2>Data sharing and retention</h2>
      <p>
        Information is shared only with service providers needed to operate ResourceHive and with authorized members or administrators where the product workflow requires it. Records are retained only for as long as they are needed for the service, security, and applicable obligations.
      </p>

      <h2>Your choices</h2>
      <p>
        Users may request corrections to their account information or ask the ResourceHive team about access and deletion. Some records may need to be retained where they are required for security, booking history, or legal obligations.
      </p>

      <p className="notice">
        This is an initial product notice and should receive legal review before ResourceHive becomes generally available.
      </p>
    </ContentPage>
  );
}
