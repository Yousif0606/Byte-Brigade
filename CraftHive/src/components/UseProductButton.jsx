import React from "react";
import { useNavigate } from "react-router-dom";

export default function UseProductButton({nextRoute = ''}) {
  let navigate = useNavigate();

  const navigateForward = () => navigate(nextRoute);

  return (
    <section className="pb-9 w-fit">
      <nav className="flex justify-end gap-3 mt-8 ml-9 mr-8 md:mr-16">
        <button onClick={navigateForward} className="body-text text-3xl font-semibold button-colour rounded-2xl cursor-pointer  text-white w-[500px] h-[100] max-md:w-40 max-md:text-2xl max-md:h-[90px] max-sm:text-2xl max-sm:h-[80px] max-sm:w-fit">
          <span className="p-10">Use Selected Product</span>
        </button>
      </nav>
    </section>
  );
}