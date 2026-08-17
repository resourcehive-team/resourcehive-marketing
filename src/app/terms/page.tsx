import type { Metadata } from "next";

import { ContentPage } from "@/components/content-page";

export const metadata: Metadata = {
  title: "Terms",
  description: "Initial terms for using the ResourceHive platform.",
  openGraph: {
    title: "Terms | ResourceHive",
    description: "Initial terms for using the ResourceHive platform.",
  },
  twitter: {
    title: "Terms | ResourceHive",
    description: "Initial terms for using the ResourceHive platform.",
  },
};

export default function TermsPage() {
  return (
    <ContentPage
      eyebrow="Terms"
      title="Terms of use"
      introduction="These initial terms set the basic expectations for people and organizations using ResourceHive."
    >
      <p className="notice">Initial service terms · Updated 17 August 2026</p>

      <h2>Using ResourceHive</h2>
      <p>
        You may use ResourceHive only through an account you are authorized to access. You are responsible for keeping your sign-in details secure and for providing accurate account and membership information.
      </p>

      <h2>Organization access</h2>
      <p>
        Access to organizations and their resources depends on approved memberships and assigned roles. Organization administrators are responsible for reviewing memberships and managing the resources under their control.
      </p>

      <h2>Bookings and shared resources</h2>
      <p>
        Users must follow the owner organization’s rules, respect confirmed booking times, and return shared resources in the agreed condition. A ResourceHive booking records access; it does not replace local safety, supervision, or equipment policies.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Do not misuse the service, attempt to bypass organization access, interfere with other users, submit unlawful content, or use ResourceHive in a way that could damage the platform or university community.
      </p>

      <h2>Service availability</h2>
      <p>
        ResourceHive is under active development. Features may change, and access may occasionally be interrupted for maintenance, security, or product improvements.
      </p>

      <p className="notice">
        These initial terms are provided for the first product draft and should receive legal review before general availability.
      </p>
    </ContentPage>
  );
}
