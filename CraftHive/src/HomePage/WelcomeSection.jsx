import React from "react";

const WelcomeSection = () => {
  return (
    <section className="mb-16 max-sm:mb-10">
      <h1 className="mb-5 text-6xl max-sm:text-4xl">
        <span className="font-light">Welcome to </span>
        <span className="font-semibold text-purple-900">CraftHive!</span>
      </h1>
      <h2 className="text-8xl font-bold max-md:text-7xl max-sm:text-5xl">
        What can I do for you?
      </h2>
    </section>
  );
};
export default WelcomeSection;