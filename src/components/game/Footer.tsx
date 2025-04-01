import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[rgba(0,0,0,0.40)] backdrop-blur-[[20px]] flex justify-between items-center text-xs font-medium mt-auto px-[147px] py-[15px] max-md:px-10 max-sm:flex-col max-sm:gap-2.5 max-sm:px-5">
      <div className="text-[#758BA4]">
        Made with ❤️ by
        <span className="text-white ml-1">kaleidos:code GmbH</span>
      </div>
      <nav className="flex gap-[18px] text-white">
        <a href="#" className="hover:underline">
          Impressum
        </a>
        <a href="#" className="hover:underline">
          Datenschutzerklärung
        </a>
        <a href="#" className="hover:underline">
          AGB
        </a>
      </nav>
    </footer>
  );
};
