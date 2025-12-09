// components/Hero.tsx
import Link from "next/link";
import { ReactNode } from "react";

type HeroProps = {
  title: string;
  subtitle: string;
  background?: ReactNode;
};

const Hero = ({ title, subtitle, background }: HeroProps) => {
  return (
    <section className="hero hero-gemini">
      <div className="hero-gemini-container">
        {background && (
          <div className="hero-gemini-bg">
            {background}
          </div>
        )}
        <div className="hero-gemini-content">
          <p className="hero-pill">Challenge × Research</p>
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <div className="hero-actions">
            <Link href="/about">
              <button className="btn-primary">ゼミ紹介を見る</button>
            </Link>
            <Link href="/reports">
              <button className="btn-secondary">活動報告を読む</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
