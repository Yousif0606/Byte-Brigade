"use client";
import * as React from "react";

function InputDesign() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <main className="flex flex-col justify-center items-center mx-auto w-full max-w-none h-screen bg-violet-50 max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <header className="flex justify-between p-5 w-full bg-purple-900 max-sm:p-2.5">
          <button className="flex justify-center items-center h-[50px] w-[50px] max-sm:w-10 max-sm:h-10">
            <svg
              width="78"
              height="50"
              viewBox="0 0 78 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 92H128"
                stroke="white"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M50 67H128"
                stroke="white"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M50 42H128"
                stroke="white"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <button className="flex justify-center items-center h-[50px] w-[50px] max-sm:w-10 max-sm:h-10">
            <svg
              width="65"
              height="65"
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="32.5"
                cy="32.5"
                r="29"
                stroke="white"
                strokeWidth="7"
              />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                style={{
                  font: '55px "Myanmar Khyay"',
                  letterSpacing: "0em",
                }}
              >
                ?
              </text>
            </svg>
          </button>
        </header>
        <section className="flex flex-col items-center">
          <h1 className="mt-12 text-6xl font-medium text-purple-900 max-md:text-5xl max-sm:text-4xl">
            Suggest product pricing
          </h1>
          <h2 className="mx-0 my-5 text-9xl font-bold text-black max-md:text-8xl max-sm:text-7xl">
            Let's get started!
          </h2>
          <article className="p-8 w-4/5 rounded-xl bg-white max-w-[800px] shadow-[0_4px_6px_rgba(0,0,0,0.1)]">
            <p className="mb-4 text-xl text-purple-900 max-md:text-lg max-sm:text-base">
              Description and quantity of materials to add to your production
              inventory.
            </p>
            <p className="mb-4 text-xl text-purple-900 max-md:text-lg max-sm:text-base">
              Quantity of materials needed to make one instance of your product.
            </p>
            <p className="mb-4 text-xl text-purple-900 max-md:text-lg max-sm:text-base">
              Work hours required to make one instance of your product.
            </p>
            <p className="mb-4 text-xl text-purple-900 max-md:text-lg max-sm:text-base">
              Administrative hours spent per week on managing your business.
            </p>
            <p className="mb-4 text-xl text-purple-900 max-md:text-lg max-sm:text-base">
              Fair hourly wage for yourself as you work with your business.
            </p>
          </article>
          <nav className="flex justify-between mt-8 w-4/5 max-w-[800px]">
            <button className="flex justify-center items-center text-4xl font-semibold bg-amber-300 rounded-3xl cursor-pointer h-[79px] text-white w-[185px] max-md:w-40 max-md:text-3xl max-md:h-[70px] max-sm:text-2xl max-sm:h-[60px] max-sm:w-[140px]">
              Back
            </button>
            <button className="flex justify-center items-center text-4xl font-semibold bg-amber-300 rounded-3xl cursor-pointer h-[79px] text-white w-[185px] max-md:w-40 max-md:text-3xl max-md:h-[70px] max-sm:text-2xl max-sm:h-[60px] max-sm:w-[140px]">
              Next
            </button>
          </nav>
        </section>
      </main>
    </>
  );
}

export default InputDesign;
