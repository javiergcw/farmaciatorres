import React from "react";

import {
  FaHandHoldingUsd,
  FaAngleRight,
  FaRegUserCircle,
  FaDiaspora,
} from "react-icons/fa";

const WhyBuyWithFT = () => {
  return (
    <div className="bg-[#EDF2FF]">
      <div>
        <h1 className="text-[#0F51FA] text-4xl font-bold flex justify-center pb-14 pt-6">
          ¿Por qué comprar con Farmacia Torres?
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 text-white gap-x-8  gap-y-8 px-10">
          <div className="bg-[#0F51FA] flex flex-row p-11 rounded-lg gap-x-2">
            <FaHandHoldingUsd className="text-4xl" />
            <p>Acumula puntos por tus compras y ahorra</p>
            <FaAngleRight className="text-3xl" />
          </div>

          <div className="bg-[#0F51FA] flex flex-row p-11 rounded-lg gap-x-2">
            <FaRegUserCircle className="text-4xl" />
            <p>Crea tu cuenta y compra en pocos clics.</p>
            <FaAngleRight className="text-3xl" />
          </div>

          <div className="bg-[#0F51FA] flex flex-row p-11 rounded-lg gap-x-2">
            <FaDiaspora className="text-4xl" />
            <p>Descuentos en tus marcas favoritas.</p>
            <FaAngleRight className=" text-3xl" />
          </div>
          <br/>
          <br/>
        </div>
      </div>
    </div>
  );
};

export default WhyBuyWithFT;
