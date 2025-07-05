import Web3ContactForm from "@/components/ContactForm/ContactForm";
import PageLayout from "@/components/Layouts/PageLayout";
import {
  EnvelopeIcon,
  PhoneIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Yellow Chilli to enquire about bookings or catering.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <PageLayout>
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 space-y-12">
          <div className="relative ">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Get in touch
              </h2>
              <p className="mt-6 text-lg/8 text-gray-600">
                Proin volutpat consequat porttitor cras nullam gravida at. Orci
                molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
                Arcu sed malesuada et magna.
              </p>
              <dl className="mt-10 space-y-4 text-base/7 text-gray-600">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    72-76 Western Rd
                    <br />
                    Southall UB2 5DZ
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a
                      href="tel:02035185930"
                      className="hover:text-gray-900"
                    >
                      0203 518 5930
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a
                      href="mailto:hello@example.com"
                      className="hover:text-gray-900"
                    >
                      hello@example.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-neutral-dimmed p-4 rounded-md">
            {/* <Web3ContactForm /> */}
          </div>
        </div>
      </PageLayout>
    </section>
  );
}
