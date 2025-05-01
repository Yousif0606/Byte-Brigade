"use client";
import React from "react";
import Logo from '../assets/no_text.svg';
import HomepageButtons from "../components/HomepageButtons";

const Homepage = () => {
  return (
      <main className="flex flex-col items-center">
        <h2 className="header-text mt-12 -ml-70 text-5xl font-semibold max-md:text-5xl max-sm:text-4xl purple-text-dark">
          Welcome to craft
          <span className="gold-text-dark">
            hive!
          </span>
        </h2>
        <h1 className="header-text  my-4 text-7xl font-semibold text-black max-md:text-8xl max-sm:text-7xl">
          What can I do for you?
        </h1>

        <div>
          <HomepageButtons />
        </div>

        <div className="-mr-96 -mt-64">
          <img src={Logo} alt="CraftHive Logo" width={780} height={780} className="background-icon" />
        </div>
      </main>
  );
}

//We need to include the lines below to export the React component if we declare it as a const function above -Nate
export {Homepage};
