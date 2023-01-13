import { Inter } from "@next/font/google";
import Footer from "../components/Footer/Footer";
import Offerts from "../components/Index/Offerts";
import WhyBuyWithFT from "../components/Index/WhyBuyWithFT";
import Title from "../components/Index/Title"
import Important from "../components/Index/Important";
import ProductsOffers from "../components/Index/Products/ProductsOffers";
import Marks from "../components/Index/Marks";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="px-14">

        <Title title="Marcas destacadas" subtitle="Ver todas" src="#" />
        <Marks />
        <br />

        <Title title="Productos con ofertas y descuentos" subtitle="Ver todos" src="#" />
        <ProductsOffers />
        <br />

        <Important />
        <br />

        <Title title="Las mejores ofertas de salud y belleza" subtitle="Ver todas" src="#" />
        <Offerts />
        <br />
      </div>
      <WhyBuyWithFT className="px-0" />
      <Footer /></>

  );
}
