"use client";

import { useEffect, useRef, useState } from "react";
import { MotionValue, useMotionValue, useSpring, useTransform } from "framer-motion";

export const GoogleGeminiEffect = ({
  pathLengths,
  title,
  description,
  href,
}: {
  pathLengths: MotionValue<number>[];
  title?: string;
  description?: string;
  href?: string;
}) => {
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const path3Ref = useRef<SVGPathElement>(null);
  const path4Ref = useRef<SVGPathElement>(null);
  const path5Ref = useRef<SVGPathElement>(null);

  const progress1 = useSpring(pathLengths[0], {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const progress2 = useSpring(pathLengths[1], {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const progress3 = useSpring(pathLengths[2], {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const progress4 = useSpring(pathLengths[3], {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const progress5 = useSpring(pathLengths[4], {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [d1, setD1] = useState("");
  const [d2, setD2] = useState("");
  const [d3, setD3] = useState("");
  const [d4, setD4] = useState("");
  const [d5, setD5] = useState("");

  useEffect(() => {
    progress1.on("change", (latest) => {
      if (path1Ref.current) {
        const pathLength = path1Ref.current.getTotalLength();
        const offset = pathLength - latest * pathLength;
        path1Ref.current.style.strokeDashoffset = offset.toString();
        setD1(path1Ref.current.getAttribute("d") || "");
      }
    });

    progress2.on("change", (latest) => {
      if (path2Ref.current) {
        const pathLength = path2Ref.current.getTotalLength();
        const offset = pathLength - latest * pathLength;
        path2Ref.current.style.strokeDashoffset = offset.toString();
        setD2(path2Ref.current.getAttribute("d") || "");
      }
    });

    progress3.on("change", (latest) => {
      if (path3Ref.current) {
        const pathLength = path3Ref.current.getTotalLength();
        const offset = pathLength - latest * pathLength;
        path3Ref.current.style.strokeDashoffset = offset.toString();
        setD3(path3Ref.current.getAttribute("d") || "");
      }
    });

    progress4.on("change", (latest) => {
      if (path4Ref.current) {
        const pathLength = path4Ref.current.getTotalLength();
        const offset = pathLength - latest * pathLength;
        path4Ref.current.style.strokeDashoffset = offset.toString();
        setD4(path4Ref.current.getAttribute("d") || "");
      }
    });

    progress5.on("change", (latest) => {
      if (path5Ref.current) {
        const pathLength = path5Ref.current.getTotalLength();
        const offset = pathLength - latest * pathLength;
        path5Ref.current.style.strokeDashoffset = offset.toString();
        setD5(path5Ref.current.getAttribute("d") || "");
      }
    });
  }, [progress1, progress2, progress3, progress4, progress5]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
      <div style={{ position: "relative", width: "100%", height: "100%", maxWidth: "1280px" }}>
        {title && description && (
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
            <div style={{ position: "relative", textAlign: "center", padding: "0 1rem" }}>
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
                {title}
              </h2>
              <p style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "#d1d5db", maxWidth: "42rem", margin: "0 auto" }}>
                {description}
              </p>
            </div>
          </div>
        )}

        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1220 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        >
          <path
            d="M0 110C0 110 280 0 610 110C940 220 1220 110 1220 110"
            stroke="url(#gradient1)"
            strokeWidth="2"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            ref={path1Ref}
            style={{ opacity: 0.2 }}
          />
          <path
            d="M0 110C0 110 280 0 610 110C940 220 1220 110 1220 110"
            stroke="url(#gradient2)"
            strokeWidth="2"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            ref={path2Ref}
            style={{ opacity: 0.2 }}
          />
          <path
            d="M0 110C0 110 280 0 610 110C940 220 1220 110 1220 110"
            stroke="url(#gradient3)"
            strokeWidth="2"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            ref={path3Ref}
            style={{ opacity: 0.2 }}
          />
          <path
            d="M0 110C0 110 280 0 610 110C940 220 1220 110 1220 110"
            stroke="url(#gradient4)"
            strokeWidth="2"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            ref={path4Ref}
            style={{ opacity: 0.2 }}
          />
          <path
            d="M0 110C0 110 280 0 610 110C940 220 1220 110 1220 110"
            stroke="url(#gradient5)"
            strokeWidth="2"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            ref={path5Ref}
            style={{ opacity: 0.2 }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#18CCFC" stopOpacity="0" />
              <stop offset="100%" stopColor="#18CCFC" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6344F5" stopOpacity="0" />
              <stop offset="100%" stopColor="#6344F5" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#AE48FF" stopOpacity="0" />
              <stop offset="100%" stopColor="#AE48FF" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#AE48FF" stopOpacity="0" />
              <stop offset="100%" stopColor="#AE48FF" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6344F5" stopOpacity="0" />
              <stop offset="100%" stopColor="#6344F5" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

