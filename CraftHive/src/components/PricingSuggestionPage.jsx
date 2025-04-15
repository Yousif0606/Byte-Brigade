"use client";
import React from "react";
import Header from "./Header";
import RequirementsList from "./RequirementsList";
import NavigationButtons from "./NavigationButtons";


const renatoSayHi = () => alert('hi renato');

const PricingSuggestionPage = () => {
  return (
    <main className="flex flex-col justify-center items-center mx-auto w-full max-w-none h-screen bg-violet-50 max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <Header />
      <section className="flex flex-col items-center">
        <h1 className="mt-12 text-6xl font-medium text-purple-900 max-md:text-5xl max-sm:text-4xl">
          Suggest product pricing
        </h1>
        <h2 className="mx-0 my-5 text-9xl font-bold text-black max-md:text-8xl max-sm:text-7xl">
          Let's get started!!!!!!!
        </h2>
        <RequirementsList />
        <NavigationButtons />
      </section>
    </main>
  );
}


export {PricingSuggestionPage, renatoSayHi};
