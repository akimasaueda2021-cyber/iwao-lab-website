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
          <p className="hero-pill">実装×研究で未来を切り拓くゼミ</p>
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <div className="hero-actions">
            <Link href="/entry">
              <button className="btn-primary">入ゼミを検討している方へ</button>
            </Link>
            <Link href="/entry">
              <button className="btn-secondary">説明会・見学予約</button>
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
