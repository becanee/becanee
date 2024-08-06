"use client";

import { Image } from "@nextui-org/react";
import { TypeAnimation } from "react-type-animation";

export default function Homepages() {
  return (
    <>
      <div className="flex flex-col gap-8 items-center">
        <div className="flex gap-0 justify-center items-center">
          <Image
            isBlurred
            width={500}
            src="https://i.giphy.com/L1R1tvI9svkIWwpVYr.webp"
            alt="NextUI Album Cover"
            className="mt-4"
          />
        </div>
        <p className="mt-4 text-2xl lg:text-3xl !leading-tight mx-auto max-w-md text-center">
          <TypeAnimation
            sequence={[
              "Welcome to Bécanee ecosystem this websites used for Personal Branding",
              1500,
              "Welcome to Bécanee ecosystem this websites used for Information",
              1500,
              "Welcome to Bécanee ecosystem this websites used for Share Project`s",
              1500,
              "Welcome to Bécanee ecosystem this websites used for Paid Project`s",
              1500,
            ]}
            speed={75}
            style={{ fontSize: "20px" }}
            repeat={Infinity}
          />
        </p>
        <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
      </div>
    </>
  );
}
