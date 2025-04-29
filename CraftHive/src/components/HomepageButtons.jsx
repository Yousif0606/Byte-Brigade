"use client";
import React from "react";
import {BadgeDollarSign} from 'lucide-react';

function HomepageButtons() {
  return (
    <section className="items-center">
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
            <div className="col-span-2">
                <article className="px-20 py-9 button-colour rounded-[30px] max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                    <figure>
                        <BadgeDollarSign color="white" size={120} />
                    </figure>
                    <div className="ml-5 max-md:ml-0 max-md:w-full">
                    <h2 className="self-stretch my-auto align-middle text-3xl body-text font-semibold text-black max-md:mt-10">
                        Suggest <br />
                        product pricing
                    </h2>
                    </div>
                </div>
                </article>
            </div>
            <div className="row-start-2">2</div>
            <div className="row-start-2">3</div>
        </div>
    </section>
  );
}

export default HomepageButtons;

/* <section classNameName="flex "
      <div classNameName="w-full rounded-[30px] bg-[rgba(255,179,67,1)] px-20 py-9 md:px-20 md:py-9 max-md:px-5 max-md:py-9">
        <div classNameName="flex gap-5 max-md:flex-col max-md:gap-0">
          <div classNameName="flex w-[34%] flex-col items-stretch max-md:w-full max-md:ml-0">
          </div>
          <div classNameName="flex w-[66%] flex-col items-stretch ml-5 max-md:w-full max-md:ml-0">
            <div classNameName="text-black text-[30px] font-bold font-['Quicksand',_-apple-system,_Roboto,_Helvetica,_sans-serif] my-auto self-stretch max-md:mt-10">
              Suggest <br />
              product pricing
            </div>
          </div>
        </div>
  </div>*/