"use client";

import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import SectionTitle from "../components/SectionTitle";

const Entry: NextPage = () => {
  return (
    <>
      <Head>
        <title>岩尾ゼミ 入ゼミ情報 | 説明会・見学申込 | 岩尾俊兵研究会</title>
        <meta
          name="description"
          content="慶應義塾大学商学部 岩尾ゼミの入ゼミ情報。説明会スケジュール、見学申込、募集要項、よくある質問（FAQ）を掲載。"
        />
        <meta name="keywords" content="岩尾ゼミ 説明会,慶應 ゼミ 見学申込,慶應 商学部 ゼミ 募集,岩尾ゼミ 入ゼミ" />
        <meta property="og:title" content="岩尾ゼミ 入ゼミ情報 | 説明会・見学申込 | 岩尾俊兵研究会" />
        <meta
          property="og:description"
          content="慶應義塾大学商学部 岩尾ゼミの入ゼミ情報。説明会スケジュール、見学申込、募集要項、よくある質問（FAQ）を掲載。"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://iwao-lab-website.vercel.app/entry" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "岩尾ゼミ 説明会",
              "description": "慶應義塾大学商学部 岩尾ゼミの説明会",
              "organizer": {
                "@type": "Organization",
                "name": "岩尾俊兵研究会",
              },
            }),
          }}
        />
      </Head>
      <Layout>
        <section className="section section-dark">
          <SectionTitle
            title="入ゼミ情報"
            subtitle="説明会・見学申込・募集要項・よくある質問"
          />

          <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 2rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem", marginTop: "2rem" }}>
              募集要項
            </h2>
            <div style={{ backgroundColor: "#1a1a1a", padding: "1.5rem", borderRadius: "0.9rem", border: "1px solid rgba(255, 255, 255, 0.1)", marginBottom: "2rem" }}>
              <ul style={{ color: "#d1d5db", lineHeight: "1.8", paddingLeft: "1.5rem" }}>
                <li>対象：慶應義塾大学商学部 2年生・3年生</li>
                <li>選考方法：入ゼミ課題の提出と面接</li>
                <li>募集時期：年度により異なります（詳細は説明会でご案内）</li>
                <li>詳細情報：<a href="https://pando.life/keioiwao/article/2980962" target="_blank" rel="noopener noreferrer" style={{ color: "#18CCFC" }}>こちら</a>から</li>
              </ul>
            </div>

            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem" }}>
              説明会スケジュール
            </h2>
            <div style={{ backgroundColor: "#1a1a1a", padding: "1.5rem", borderRadius: "0.9rem", border: "1px solid rgba(255, 255, 255, 0.1)", marginBottom: "2rem" }}>
              <p style={{ color: "#d1d5db", marginBottom: "1rem" }}>
                説明会の日程は、年度により異なります。最新の情報は以下のフォームからお問い合わせください。
              </p>
              <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
                ※ 説明会では、ゼミの活動内容、研究テーマ、選考方法などを詳しくご説明します。
              </p>
            </div>

            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem" }}>
              見学申込フォーム
            </h2>
            <div style={{ backgroundColor: "#1a1a1a", padding: "1.5rem", borderRadius: "0.9rem", border: "1px solid rgba(255, 255, 255, 0.1)", marginBottom: "2rem" }}>
              <p style={{ color: "#d1d5db", marginBottom: "1.5rem" }}>
                ゼミの見学を希望される方は、以下のフォームからお申し込みください。
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
                見学を予約する →
              </a>
            </div>

            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", marginBottom: "1.5rem" }}>
              よくある質問（FAQ）
            </h2>
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ backgroundColor: "#1a1a1a", padding: "1.5rem", borderRadius: "0.9rem", border: "1px solid rgba(255, 255, 255, 0.1)", marginBottom: "1rem" }}>
                <h3 style={{ color: "#ffffff", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem" }}>
                  Q. ゼミの活動頻度はどのくらいですか？
                </h3>
                <p style={{ color: "#d1d5db", lineHeight: "1.8" }}>
                  A. 週1回のゼミ活動を基本とし、プロジェクトによっては追加のミーティングやフィールドワークが発生します。
                </p>
              </div>

              <div style={{ backgroundColor: "#1a1a1a", padding: "1.5rem", borderRadius: "0.9rem", border: "1px solid rgba(255, 255, 255, 0.1)", marginBottom: "1rem" }}>
                <h3 style={{ color: "#ffffff", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem" }}>
                  Q. プログラミングの経験は必要ですか？
                </h3>
                <p style={{ color: "#d1d5db", lineHeight: "1.8" }}>
                  A. 必須ではありませんが、コンピューターシミュレーション解析を行うため、基本的なプログラミングスキルがあると有利です。ゼミ内で学習する機会もあります。
                </p>
              </div>

              <div style={{ backgroundColor: "#1a1a1a", padding: "1.5rem", borderRadius: "0.9rem", border: "1px solid rgba(255, 255, 255, 0.1)", marginBottom: "1rem" }}>
                <h3 style={{ color: "#ffffff", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem" }}>
                  Q. 企業との共同研究はどのようなものがありますか？
                </h3>
                <p style={{ color: "#d1d5db", lineHeight: "1.8" }}>
                  A. 企業再生プロジェクト、事業戦略の策定・実装、組織変革プロジェクトなど、実践的な課題に取り組みます。過去の実績については<Link href="/reports" style={{ color: "#18CCFC" }}>活動報告</Link>をご覧ください。
                </p>
              </div>

              <div style={{ backgroundColor: "#1a1a1a", padding: "1.5rem", borderRadius: "0.9rem", border: "1px solid rgba(255, 255, 255, 0.1)", marginBottom: "1rem" }}>
                <h3 style={{ color: "#ffffff", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem" }}>
                  Q. 入ゼミ課題はどのような内容ですか？
                </h3>
                <p style={{ color: "#d1d5db", lineHeight: "1.8" }}>
                  A. 年度により異なりますが、研究テーマに関連する課題が出題されます。詳細は<Link href="https://pando.life/keioiwao/article/2980962" target="_blank" rel="noopener noreferrer" style={{ color: "#18CCFC" }}>こちら</Link>をご確認ください。
                </p>
              </div>

              <div style={{ backgroundColor: "#1a1a1a", padding: "1.5rem", borderRadius: "0.9rem", border: "1px solid rgba(255, 255, 255, 0.1)", marginBottom: "1rem" }}>
                <h3 style={{ color: "#ffffff", fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.75rem" }}>
                  Q. 見学はいつでも可能ですか？
                </h3>
                <p style={{ color: "#d1d5db", lineHeight: "1.8" }}>
                  A. はい、見学はいつでも歓迎します。事前に<Link href="/contact" style={{ color: "#18CCFC" }}>お問い合わせフォーム</Link>からご連絡ください。24時間以内に返信いたします。
                </p>
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
              <p style={{ color: "#d1d5db", marginBottom: "1.5rem" }}>
                その他のご質問は、お気軽にお問い合わせください
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/contact">
                  <button className="btn-primary">質問する（24h以内返信）</button>
                </Link>
                <Link href="/about">
                  <button className="btn-secondary">ゼミ紹介を見る</button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Entry;

