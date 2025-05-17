import React from "react";
import { useNavigate } from "react-router-dom";

export default function NoButton ({nextRoute = ''}) {
  let navigate = useNavigate();

  const navigateForward = () => navigate(nextRoute);

  return (
    <section className="pb-9 w-fit">
      <nav className="flex justify-start items-center gap-3 mt-8 ml-auto mr-8 md:mr-16 max-w-[800px]`}">
        <button onClick={navigateForward} className="body-text text-4xl font-semibold button-colour rounded-3xl cursor-pointer h-[79px] text-white w-[185px] max-md:w-40 max-md:text-3xl max-md:h-[70px] max-sm:text-2xl max-sm:h-[60px] max-sm:w-[140px]">
          No
        </button>
      </nav>
    </section>
  );
}