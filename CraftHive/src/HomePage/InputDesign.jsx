import React from "react";
import { Header } from "./Header";
import { WelcomeSection } from "./WelcomeSection";
import { FeatureGrid } from "./FeatureGrid";

const InputDesign = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;600;700&display=swap"
        rel="stylesheet"
      />
      <main className="min-h-screen bg-violet-50">
        <Header />
        <section className="px-24 py-10 max-md:p-8 max-sm:p-5">
          <WelcomeSection />
          <FeatureGrid />
        </section>
      </main>
    </>
  );
};

export default InputDesign;
