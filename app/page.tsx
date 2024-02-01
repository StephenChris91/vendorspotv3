import Image from "next/image";
import Nav from "@/components/nav";
import Header from "@/components/header";
import FeatureSlider from '@/components/feature-slide'
import ProductDisplay from "@/components/product-display";

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col justify-between p-24 bg-[url('/header-bg.svg')] bg-no-repeat object-contain">
    <Header />
      {/* <Nav /> */}
      {/* <h1 className="text-4xl text-red-600">Landing Page</h1> */}
    </main>
    <FeatureSlider />
    <ProductDisplay />
    </>
  );
}
