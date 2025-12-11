"use client";

import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";
import { CardHoverEffect } from "../components/ui/CardHoverEffect";

const About: NextPage = () => {
  const items = [
    {
      title: "研究テーマ",
      description: (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{ marginBottom: "0.5rem" }}>・オペレーションズマネジメントとイノベーション</li>
          <li style={{ marginBottom: "0.5rem" }}>・事業戦略の策定・実装と検証</li>
          <li style={{ marginBottom: "0.5rem" }}>・企業再生と組織変革プロジェクト</li>
          <li style={{ marginBottom: "0.5rem" }}>・コンピューターシミュレーション・AI活用</li>
          <li style={{ marginBottom: "0.5rem" }}>・Business Model Creation / Entrepreneur / Intrapreneur</li>
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
    <>
      <Head>
        <title>岩尾ゼミとは — 内容と研究テーマ | 岩尾俊兵研究会</title>
        <meta
          name="description"
          content="慶應義塾大学商学部 岩尾ゼミの内容と研究テーマを詳しく紹介。研究テーマ、活動スタイル、得られる力、卒業後進路など。"
        />
        <meta name="keywords" content="岩尾ゼミ 内容,岩尾ゼミ 研究テーマ,慶應 商学部 ゼミ 比較,岩尾ゼミ 特徴" />
        <meta property="og:title" content="岩尾ゼミとは — 内容と研究テーマ | 岩尾俊兵研究会" />
        <meta
          property="og:description"
          content="慶應義塾大学商学部 岩尾ゼミの内容と研究テーマを詳しく紹介。研究テーマ、活動スタイル、得られる力、卒業後進路など。"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://iwao-lab-website.vercel.app/about" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "岩尾俊兵研究会",
              "description": "実践プロジェクトと理論研究を両輪で実装するゼミ",
              "provider": {
                "@type": "Organization",
                "name": "慶應義塾大学商学部",
              },
            }),
          }}
        />
      </Head>
      <Layout>
      <section className="section section-dark">
        <SectionTitle
          title="ゼミ紹介"
          subtitle="研究テーマ・活動スタイル・参加イメージを紹介します。"
        />
        
        <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", marginTop: "2rem" }}>
            ゼミ概要
          </h2>
          <p style={{ color: "#d1d5db", marginBottom: "2rem", lineHeight: "1.8" }}>
            岩尾俊兵研究会は、実践プロジェクトと理論研究を両輪で実装するゼミです。
            アカデミアと実践を往復しながら、価値創造に挑みます。
            全国トップレベルの実務経験を積みたい学生を募集しています。
          </p>

          <CardHoverEffect items={items} />
        </div>

        <div style={{ maxWidth: "80rem", margin: "3rem auto 0", padding: "0 2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem" }}>
            卒業後の進路
          </h2>
          <p style={{ color: "#d1d5db", marginBottom: "1rem", lineHeight: "1.8" }}>
            本ゼミで培った実践力と研究力を活かし、以下のような進路に進む卒業生が多数います。
          </p>
          <ul style={{ color: "#d1d5db", lineHeight: "1.8", paddingLeft: "1.5rem" }}>
            <li>コンサルティングファーム</li>
            <li>投資銀行・証券会社</li>
            <li>大手企業の経営企画・事業開発部門</li>
            <li>ベンチャー企業・スタートアップ</li>
            <li>大学院進学（研究職を目指す場合）</li>
          </ul>
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
          <p style={{ color: "#d1d5db", marginBottom: "1.5rem", fontSize: "1rem" }}>
            入ゼミを検討されている方は、ぜひ説明会・見学にご参加ください
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="/entry"
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
              見学を予約する
            </a>
            <a
              href="/entry"
              style={{
                display: "inline-block",
                padding: "0.75rem 2rem",
                backgroundColor: "transparent",
                color: "#18CCFC",
                borderRadius: "999px",
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid #18CCFC",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(24, 204, 252, 0.1)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              説明会に申し込む
            </a>
            <a
              href="https://pando.life/keioiwao/form/1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "0.75rem 2rem",
                backgroundColor: "transparent",
                color: "#18CCFC",
                borderRadius: "999px",
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid #18CCFC",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(24, 204, 252, 0.1)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              詳細情報を見る
            </a>
          </div>
        </div>
      </section>
    </Layout>
    </>
  );
};

export default About;
