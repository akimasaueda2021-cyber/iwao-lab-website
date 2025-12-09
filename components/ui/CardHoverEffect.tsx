"use client";

import { ReactNode } from "react";

type Item = {
  title: string;
  description: string | ReactNode;
  link?: string;
};

type CardHoverEffectProps = {
  items: Item[];
};

export function CardHoverEffect({ items }: CardHoverEffectProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1.5rem",
        width: "100%",
      }}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="card-hover-item"
          style={{
            position: "relative",
            padding: "1.5rem",
            borderRadius: "0.75rem",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backgroundColor: "#1a1a1a",
            transition: "all 0.3s ease",
            cursor: item.link ? "pointer" : "default",
            overflow: "hidden",
          }}
          onClick={() => {
            if (item.link) {
              window.open(item.link, "_blank");
            }
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.borderColor = "rgba(24, 204, 252, 0.3)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(24, 204, 252, 0.2)";
            const gradient = e.currentTarget.querySelector(".card-hover-gradient") as HTMLElement;
            if (gradient) {
              gradient.style.opacity = "1";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
            e.currentTarget.style.boxShadow = "none";
            const gradient = e.currentTarget.querySelector(".card-hover-gradient") as HTMLElement;
            if (gradient) {
              gradient.style.opacity = "0";
            }
          }}
        >
          <div
            className="card-hover-gradient"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(24, 204, 252, 0.1), rgba(99, 102, 241, 0.1))",
              opacity: 0,
              transition: "opacity 0.3s ease",
              pointerEvents: "none",
            }}
          />
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#ffffff",
              marginBottom: "0.75rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            {item.title}
          </h3>
          {typeof item.description === "string" ? (
            <p
              style={{
                fontSize: "0.95rem",
                color: "#d1d5db",
                lineHeight: "1.6",
                position: "relative",
                zIndex: 1,
              }}
            >
              {item.description}
            </p>
          ) : (
            <div
              style={{
                fontSize: "0.95rem",
                color: "#d1d5db",
                lineHeight: "1.6",
                position: "relative",
                zIndex: 1,
              }}
            >
              {item.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

