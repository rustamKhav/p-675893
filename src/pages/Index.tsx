import React from "react";
import { Header } from "@/components/game/Header";
import { Footer } from "@/components/game/Footer";
import { MovieComparison } from "@/components/game/MovieComparison";

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-[#091524] flex flex-col">
      <Header />
      <MovieComparison />
      <Footer />
    </div>
  );
};

export default Index;
