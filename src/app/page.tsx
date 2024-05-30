import { AccordionComponent } from "@/components/landing/AccordionComponent";
import Features from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";
import Plans from "@/components/landing/Plans";
import Tecnologies from "@/components/landing/Tecnologies";
import PageWrapper from "@/components/Layout/PageWrapper";

// #region Functions (1)

export default function Home() {
  return (
    <PageWrapper>
      <main className="flex min-h-screen flex-col items-center justify-start gap-24">
        <Hero />
        <Features />
        <Tecnologies />
        <Plans />
        <AccordionComponent />
      </main>
    </PageWrapper>
  );
}

// #endregion Functions (1)
