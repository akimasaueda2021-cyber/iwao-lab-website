"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import Hero from "./Hero";
import { GoogleGeminiEffect } from "./ui/GoogleGeminiEffect";

type HeroWithGeminiProps = {
  title: string;
  subtitle: string;
};

const HeroWithGemini = ({ title, subtitle }: HeroWithGeminiProps) => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div ref={heroRef}>
      <Hero
        title={title}
        subtitle={subtitle}
        background={
          <GoogleGeminiEffect
            pathLengths={[
              pathLengthFirst,
              pathLengthSecond,
              pathLengthThird,
              pathLengthFourth,
              pathLengthFifth,
            ]}
          />
        }
      />
    </div>
  );
};

export default HeroWithGemini;


