import React from "react";
import Image from "next/image";

const cardData = [
  {
    title: "Men",
    description:
      "Get a glance of our ultimate men's collection to start your shopping day",
  },
  {
    title: "Women",
    description:
      "Get a glance of our ultimate women's collection to start your shopping day",
  },
  {
    title: "Kid",
    description:
      "Get a glance of our ultimate kid's collection to start your shopping day",
  },
  {
    title: "Kid",
    description:
      "Get a glance of our ultimate kid's collection to start your shopping day",
  },
];

const Cards = [
  {
    id: "1",
    src: "/images/offers.svg",
    title: "-60%*",
    category: "Cosmética facial",
  },

  {
    id: "2",
    src: "/images/offers1.svg",
    title: "-50%*",
    category: "Tratamiento anticaida",
  },

  {
    id: "3",
    src: "/images/offers2.svg",
    title: "-30%*",
    category: "Alimentación infantil",
  },

  {
    id: "4",
    src: "/images/offers3.svg",
    title: "-65%*",
    category: "Cremas solares",
  },
];

const Offerts = () => {
  return (
    <div className="relative container m-auto pt-2 lg:pt-10 px-6 text-slate-400 md:px-12">
      <div className="grid lg:grid-cols-4 gap-6 md:w-8/12 md:mx-auto lg:w-full">
        {Cards.map((item, index) => (
          <div className="border-[#D9D9D9] border-2 rounded-lg">
            <Image width={290} height={230} src={item.src} className="w-full" />
            <div className="pl-4 pr-14 pt-4">
              <p className="text-[#0F51FA] text-5xl font-bold">{item.title}</p>
              <p className="text-[#091535] text-3xl font-semibold">
                {item.category}
              </p>
            </div>
            <div className="px-4 py-4">
              <button
                className="bg-[#0F51FA] px text-white font-bold py-3 w-full rounded-lg
             "
              >
                Ver ofertas
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offerts;
