"use client";

import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>お問い合わせ | 岩尾俊兵研究会</title>
        <meta
          name="description"
          content="慶應義塾大学商学部 岩尾俊兵研究会へのお問い合わせ。質問・資料請求・見学申込など、24時間以内に返信いたします。"
        />
        <meta name="keywords" content="岩尾ゼミ 問い合わせ,岩尾ゼミ 質問,慶應 ゼミ 資料請求" />
        <meta property="og:title" content="お問い合わせ | 岩尾俊兵研究会" />
        <meta
          property="og:description"
          content="慶應義塾大学商学部 岩尾俊兵研究会へのお問い合わせ。質問・資料請求・見学申込など、24時間以内に返信いたします。"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://iwao-lab-website.vercel.app/contact" />
      </Head>
      <Layout>
        <section className="section section-dark">
          <SectionTitle
            title="お問い合わせ"
            subtitle="質問・資料請求・見学申込など、お気軽にご連絡ください"
          />

          <div style={{ maxWidth: "60rem", margin: "0 auto", padding: "0 2rem" }}>
            <div style={{ backgroundColor: "#1a1a1a", padding: "2rem", borderRadius: "0.9rem", border: "1px solid rgba(255, 255, 255, 0.1)", marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
                フォームから送信する
              </h2>
              <p style={{ color: "#d1d5db", marginBottom: "1.5rem", lineHeight: "1.8" }}>
                以下のフォームから、お問い合わせ・質問・資料請求・見学申込などを受け付けています。
                24時間以内に返信いたします。
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
                フォームから送信する →
              </a>
            </div>

            <div style={{ backgroundColor: "#1a1a1a", padding: "2rem", borderRadius: "0.9rem", border: "1px solid rgba(255, 255, 255, 0.1)", marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#ffffff", marginBottom: "1rem" }}>
                よくある質問
              </h2>
              <p style={{ color: "#d1d5db", marginBottom: "1rem", lineHeight: "1.8" }}>
                よくある質問については、<Link href="/entry" style={{ color: "#18CCFC" }}>入ゼミ情報ページ</Link>のFAQセクションをご覧ください。
              </p>
            </div>

            <div style={{ textAlign: "center", marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
              <p style={{ color: "#d1d5db", marginBottom: "1.5rem" }}>
                その他の情報
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/entry">
                  <button className="btn-secondary">入ゼミ情報を見る</button>
                </Link>
                <Link href="/about">
                  <button className="btn-secondary">ゼミ紹介を見る</button>
                </Link>
                <Link href="/reports">
                  <button className="btn-secondary">活動報告を見る</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;

