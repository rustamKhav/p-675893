import React from "react";
import { MovieCard } from "./MovieCard";
import { VersusText } from "./VersusText";
import { ProgressIndicator } from "./ProgressIndicator";

export const MovieComparison: React.FC = () => {
  return (
    <main className="flex flex-col items-center mt-[100px] px-5">
      <h1 className="text-[40px] text-white font-black leading-[56px] tracking-[-0.8px] text-center mb-4">
        Welcher Film darf bleiben?
      </h1>

      <ProgressIndicator currentRound={3} totalRounds={15} />

      <div className="flex gap-10 items-center justify-center max-md:flex-col">
        <MovieCard
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/e7756ecbee3e96436f1245ca14d7bda4a26378f8"
          altText="Interstellar movie poster"
          title="Interstellar"
        />

        <VersusText />

        <MovieCard
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/4a2fdb688c2fc66c724ed078d1480768ade01f8d"
          altText="Dune movie poster"
          title="Dune"
        />
      </div>
    </main>
  );
};
