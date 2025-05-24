"use client";
import React from "react";
import HomepageButtons from "../components/HomepageButtons";


const Homepage = () => {
  return (
      <main className="flex flex-col items-center">
        <h2 className="header-text pt-25 items-centre text-5xl font-semibold max-md:text-5xl max-sm:text-4xl purple-text-dark">
          Welcome to craft
          <span className="gold-text-dark">
            hive!
          </span>
        </h2>
        <h1 className="header-text my-4 text-7xl font-semibold text-black max-md:text-8xl max-sm:text-7xl">
          What can I do for you?
        </h1>

        <div className="pt-20">
          <HomepageButtons />
        </div>
      </main>
  );
}

//We need to include the lines below to export the React component if we declare it as a const function above -Nate
export {Homepage};