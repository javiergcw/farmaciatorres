import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegUser, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="text-[#637381] grid lg:grid-cols-2">
        <div>
          <span className="font-semibold">Llama ahora: </span>(605) 3851717
        </div>
        <div>

          <p>
            <span className="font-semibold"><Image src="/images/icons/CarGray.svg" width={22} height={16} /> Envíos gratis</span> por compras
            superiores a $49.900
          </p>
          <Link href="">Ver farmacias</Link>
        </div>
      </div>

      <hr width="100%" />

      <div className="grid lg:grid-cols-3 gap-6 md:w-8/12 md:mx-auto lg:w-full ">
        <Image src="/images/Logo.svg" width={315} height={32} />
        <div>
          <div className="relative w-64">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Digite su correo electronico"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <FaSearch className="text-xl" />
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-2">
          <div>
            <div className="bg-[#0F51FA]">
              <FaRegUser className="text-lg" />
            </div>
            Mi cuenta
          </div>

          <div>
            <div className="bg-[#0F51FA]">
              <Image
                src="/images/icons/ShoppingWhite.svg"
                width={30}
                height={30}
              />
            </div>
            Mi carrito
          </div>
        </div>
      </div>
      <hr width="100%" />
    </>
  );
};

export default Header;
