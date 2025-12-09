"use client";

import type { NextPage } from "next";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import { CardHoverEffect } from "../components/ui/CardHoverEffect";

const About: NextPage = () => {
  const items = [
    {
      title: "研究テーマ",
      description: (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{ marginBottom: "0.5rem" }}>・Operation Management／Innovation</li>
          <li style={{ marginBottom: "0.5rem" }}>・Business Model Creation・Entreprenuer・Intreprenuer</li>
          <li style={{ marginBottom: "0.5rem" }}>・企業再生・事業再構築</li>
          <li style={{ marginBottom: "0.5rem" }}>・コンピューターシミュレーション・AI活用</li>
        </ul>
      ),
    },
    {
      title: "活動スタイル",
      description: (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{ marginBottom: "0.5rem" }}>・輪読ゼミ（論文の読解と議論）</li>
          <li style={{ marginBottom: "0.5rem" }}>・学生プロジェクト（論文執筆、インタビュー、アンケート分析など）</li>
          <li style={{ marginBottom: "0.5rem" }}>・企業との共同研究・フィールドワーク</li>
          <li style={{ marginBottom: "0.5rem" }}>・東京大学情報理工大学院の学生との共同プロジェクト</li>
          <li style={{ marginBottom: "0.5rem" }}>・コンピューターシミュレーション言語習得、卒業論文執筆</li>
        </ul>
      ),
    },
    {
      title: "このゼミで得られること",
      description: (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{ marginBottom: "0.5rem" }}>・「問いを立てる力」と「仮説検証のスキル」</li>
          <li style={{ marginBottom: "0.5rem" }}>・現場のリアルな課題に触れる経験</li>
          <li style={{ marginBottom: "0.5rem" }}>・研究成果を言語化し、発信する力（プレゼン・論文・レポート）</li>
          <li style={{ marginBottom: "0.5rem" }}>・世の事象をコンピューターシミュレーション解析によって、調査・分析を行う力</li>
        </ul>
      ),
    },
  ];

  return (
    <Layout>
      <section className="section section-dark">
        <SectionTitle
          title="ゼミ紹介"
          subtitle="研究テーマ・活動スタイル・参加イメージを紹介します。"
        />
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>
          <CardHoverEffect items={items} />
        </div>
        
        <div
          style={{
            maxWidth: "80rem",
            margin: "3rem auto 0",
            padding: "2rem",
            textAlign: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "2rem",
          }}
        >
          <p style={{ color: "#d1d5db", marginBottom: "1rem", fontSize: "1rem" }}>
            より詳細な入ゼミ課題などの情報は以下のリンクから
          </p>
          <a
            href="https://pando.life/keioiwao/form/1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "0.75rem 2rem",
              backgroundColor: "#18CCFC",
              color: "#000000",
              borderRadius: "999px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#14b8d4";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(24, 204, 252, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#18CCFC";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            詳細情報を見る →
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default About;
