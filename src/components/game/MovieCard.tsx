import React from "react";

interface MovieCardProps {
  imageUrl: string;
  altText: string;
  title: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  imageUrl,
  altText,
  title,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="border bg-[linear-gradient(0deg,#233142_0%,#233142_100%)] p-3 rounded-3xl border-[rgba(255,255,255,0.15)]">
        <img
          src={imageUrl}
          alt={altText}
          className="w-[217px] h-[324px] rounded-[16px] object-cover"
        />
      </div>
      <div className="text-white text-2xl font-black leading-[50px] mt-6">
        {title}
      </div>
    </div>
  );
};
