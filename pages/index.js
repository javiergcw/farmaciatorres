import { Inter } from "@next/font/google";
import Footer from "../components/Footer/Footer";
import Offerts from "../components/Index/Offerts";
import WhyBuyWithFT from "../components/Index/WhyBuyWithFT";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Offerts />
      <WhyBuyWithFT />
      <Footer />
    </>
  );
}
