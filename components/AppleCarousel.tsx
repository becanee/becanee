"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-0">
      {/* <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your iSad.
      </h2> */}
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Framework",
    title: "Next Js",
    src: "https://netlify-eleventy-api-img.netlify.app/https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fo0o2tn5x%2Fproduction%2Fac77c3fd1d2b79690380ca6709898f717d5272c5-1200x630.png/jpeg/1200/",
    content: <DummyContent />,
  },
  {
    category: "Framework",
    title: "React Js",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn-cFSey590sOmeyKCmOVA_9Kayrow-TcQlQ&s",
    content: <DummyContent />,
  },
  {
    category: "Framework",
    title: "Laravel",
    src: "https://img-c.udemycdn.com/course/750x422/4823160_f7d1.jpg",
    content: <DummyContent />,
  },

  {
    category: "Programing Language",
    title: "Javascript",
    src: "https://wallpapercave.com/wp/wp12454874.jpg",
    content: <DummyContent />,
  },
  {
    category: "Programing Language",
    title: "PHP",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c1/PHP_Logo.png",
    content: <DummyContent />,
  },
  {
    category: "CSS Framework",
    title: "Bootstrap",
    src: "https://say-hi.me/wp-content/uploads/2016/02/bootstrap4-1280x720.jpg",
    content: <DummyContent />,
  },
  {
    category: "CSS Framework",
    title: "Tailwind",
    src: "https://t4.ftcdn.net/jpg/07/25/82/37/360_F_725823794_MVTKUOBdL1MPaurcvKzelxFad4dZPa4d.jpg",
    content: <DummyContent />,
  },
  {
    category: "CSS Framework",
    title: "Next UI",
    src: "https://nextui.org/nextui-banner.png",
    content: <DummyContent />,
  },
  {
    category: "UI Framework",
    title: "Ant Design",
    src: "https://joshuaavalon.io/static/b9ed8524d4fc3d0e0879cbd4d21419ea/bb8ee/cover.png",
    content: <DummyContent />,
  },
  {
    category: "CSS Framework",
    title: "Chakra UI",
    src: "https://mavs-wp-media-server.s3.ap-northeast-1.amazonaws.com/2022/09/26154553/ChakraUI-t.png",
    content: <DummyContent />,
  },
];
