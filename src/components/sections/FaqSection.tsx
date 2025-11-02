'use client';

import { useState } from "react";
import { Container } from "@/components/layout/Container";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "How do I join Pakistan Sports Club Australia?",
    answer:
      "Submit a membership enquiry via our contact form or visit a weekly training hub in Sydney, Melbourne, or Perth. Our coordinators will align you with the right squad or social program.",
  },
  {
    question: "Do you run women’s and youth programs?",
    answer:
      "Yes. We run women’s futsal, girls cricket development pathways, and youth academies for multiple age groups with accredited coaches and safe facilities.",
  },
  {
    question: "Can regional teams partner with PSCA competitions?",
    answer:
      "Regional clubs can affiliate with PSCA to enter national tournaments, access fixtures, and gain administrative support for travel and scheduling.",
  },
  {
    question: "What support do players receive on match day?",
    answer:
      "Players access physiotherapy partnerships, halal catering, prayer spaces, and community volunteers to manage logistics for every major event.",
  },
  {
    question: "How are training fees structured?",
    answer:
      "Membership packages can be paid monthly or annually and include discounts for families and students. Visiting teams can access tailored event packages.",
  },
];

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-primary">FAQs</div>
          <h2 className="mt-3 text-4xl font-medium text-neutral-800 md:text-5xl">Frequently asked questions</h2>
          <p className="mx-auto mt-3 max-w-2xl text-para-md text-muted-foreground">
            Everything you need to know about Pakistan Sports Club Australia membership, fixtures, and community support.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={faq.question}
                className="rounded-[28px] border border-neutral-200/70 bg-neutral-100/40 shadow-sm transition"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-lg font-semibold text-neutral-700 sm:px-8"
                >
                  {faq.question}
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full border ${
                      isActive ? "border-primary bg-primary text-white" : "border-secondary-200 bg-secondary-200 text-primary"
                    }`}
                  >
                    {isActive ? "−" : "+"}
                  </span>
                </button>
                <div className={`${isActive ? "block" : "hidden"} px-6 pb-6 text-sm text-muted-foreground sm:px-8`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
