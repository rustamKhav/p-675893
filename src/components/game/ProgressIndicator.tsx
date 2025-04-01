import React from "react";

interface ProgressIndicatorProps {
  currentRound: number;
  totalRounds: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentRound,
  totalRounds,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-[#8791AF] text-base font-medium leading-6 mb-6">
        Runde {currentRound}/{totalRounds}
      </div>
      <div className="flex gap-2 mb-10">
        {Array.from({ length: totalRounds }).map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-[30px] ${
              index < currentRound ? "bg-[#EDB244]" : "bg-[#233142]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
