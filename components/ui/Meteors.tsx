"use client";

import { useEffect, useState } from "react";

type Meteor = {
  id: number;
  left: string;
  animationDelay: string;
  animationDuration: string;
  size: string;
};

export function Meteors({ number = 20 }: { number?: number }) {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    const newMeteors = Array.from({ length: number }, (_, i) => ({
      id: i,
      left: `${Math.floor(Math.random() * (400 - -400) + -400)}px`,
      animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
      animationDuration: `${Math.random() * (6 - 2) + 2}s`,
      size: `${Math.random() * (1 - 0.5) + 0.5}px`,
    }));
    setMeteors(newMeteors);
  }, [number]);

  return (
    <>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="meteor"
          style={{
            position: "absolute",
            top: 0,
            left: meteor.left,
            width: meteor.size,
            height: meteor.size,
            background: "linear-gradient(to bottom, #8b5cf6, #ec4899)",
            borderRadius: "50%",
            boxShadow: `0 0 ${meteor.size} #8b5cf6`,
            animation: `meteor ${meteor.animationDuration} linear ${meteor.animationDelay} infinite`,
          }}
        />
      ))}
    </>
  );
}

