"use client";

import type { NextPage } from "next";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import { ShootingStars } from "../components/ui/ShootingStars";
import { StarsBackground } from "../components/ui/StarsBackground";
import { Meteors } from "../components/ui/Meteors";

const Vision: NextPage = () => {
  return (
    <Layout>
      <div
        style={{
          minHeight: "40rem",
          borderRadius: "0.5rem",
          backgroundColor: "#171717",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          width: "100%",
          padding: "3rem 1rem",
          marginBottom: "2rem",
        }}
      >
        <h2
          style={{
            position: "relative",
            zIndex: 10,
            fontSize: "clamp(1.875rem, 4vw, 3rem)",
            maxWidth: "80rem",
            margin: "0 auto",
            textAlign: "center",
            fontWeight: 500,
            background: "linear-gradient(to bottom, #262626, #ffffff, #ffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span>Vision & Mind</span>
          <span style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}>経営学の力によって価値創造を行い、世の不合理をなくす。</span>
        </h2>
        <ShootingStars />
        <StarsBackground />
      </div>

      <section className="section section-dark">
        <SectionTitle
          title="Vision"
        />

        <p>「研究と実践を往復しながら、日本発の新しい事業創出の土壌を耕す。」</p>
        <p>
          卒業後に起業するか、企業や行政で働くかに関わらず、
          社会に対して新しい価値を生み出し続ける人材を輩出することを目指します。
        </p>

        <div style={{ marginTop: "3rem" }}>
          <h3 style={{ marginBottom: "1.5rem", color: "#ffffff" }}>Mind / Values</h3>
          <div style={{ position: "relative", width: "100%", maxWidth: "36rem", margin: "0 auto" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                height: "100%",
                width: "100%",
                scale: 0.8,
                transform: "scale(0.8)",
                borderRadius: "9999px",
                background: "linear-gradient(to right, #3b82f6, #14b8a6)",
                filter: "blur(60px)",
                opacity: 0.3,
              }}
            />
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                overflow: "hidden",
                borderRadius: "1rem",
                border: "1px solid #1f2937",
                backgroundColor: "#111827",
                padding: "2rem",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div
                style={{
                  marginBottom: "1rem",
                  display: "flex",
                  height: "1.25rem",
                  width: "1.25rem",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "9999px",
                  border: "1px solid #6b7280",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  style={{ height: "0.5rem", width: "0.5rem", color: "#d1d5db" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>

              <h1
                style={{
                  position: "relative",
                  zIndex: 50,
                  marginBottom: "1rem",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                Mind / Values
              </h1>

              <ul
                style={{
                  position: "relative",
                  zIndex: 50,
                  marginBottom: "1rem",
                  listStyle: "none",
                  padding: 0,
                  color: "#94a3b8",
                }}
              >
                <li style={{ marginBottom: "0.75rem" }}>
                  <strong style={{ color: "#ffffff" }}>Question Driven</strong> – 事例からではなく「問い」から出発する
                </li>
                <li style={{ marginBottom: "0.75rem" }}>
                  <strong style={{ color: "#ffffff" }}>Build to Think</strong> – 手を動かしながら考えを深める
                </li>
                <li style={{ marginBottom: "0.75rem" }}>
                  <strong style={{ color: "#ffffff" }}>Open Collaboration</strong> – 学内外の仲間と共創する
                </li>
                <li style={{ marginBottom: "0.75rem" }}>
                  <strong style={{ color: "#ffffff" }}>Respect & Candor</strong> – リスペクトと率直さを両立させる
                </li>
              </ul>

              <Meteors number={20} />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "3rem" }}>
          <h3 style={{ marginBottom: "1rem", color: "#ffffff" }}>期待するマインドセット</h3>
          <p>
            「完璧な準備が整うまで待つ」のではなく、小さく始めて学びながら改善する姿勢を歓迎します。
            研究と実務の両方に好奇心を持ち、自分なりのテーマを深堀りしたい人に向いたゼミです。
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Vision;
