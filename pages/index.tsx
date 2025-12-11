import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import HeroWithGemini from "../components/HeroWithGemini";
import SectionTitle from "../components/SectionTitle";
import ArticleCard from "../components/ArticleCard";
import { getAllReports } from "../lib/reports";
import { Report } from "../components/data/reports";

type Props = {
  latestReports: Report[];
};

const Home: NextPage<Props> = ({ latestReports }) => {
  return (
    <>
      <Head>
        <title>慶應商学部 岩尾ゼミ — 実践×研究 | 岩尾俊兵研究会</title>
        <meta
          name="description"
          content="慶應義塾大学商学部 岩尾俊兵研究会。実践プロジェクトと理論研究を両輪で実装するゼミ。見学・説明会受付中。"
        />
        <meta name="keywords" content="慶應 商学部 ゼミ 岩尾,岩尾ゼミ,岩尾俊兵 研究会,慶應 経営学 ゼミ,商学部 ゼミ 経営学" />
        <meta property="og:title" content="慶應商学部 岩尾ゼミ — 実践×研究 | 岩尾俊兵研究会" />
        <meta
          property="og:description"
          content="慶應義塾大学商学部 岩尾俊兵研究会。実践プロジェクトと理論研究を両輪で実装するゼミ。見学・説明会受付中。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="岩尾俊兵研究会" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://iwao-lab-website.vercel.app/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "岩尾俊兵研究会",
              "description": "慶應義塾大学商学部 岩尾俊兵研究会。実践プロジェクトと理論研究を両輪で実装するゼミ。",
              "url": "https://iwao-lab-website.vercel.app/",
              "sameAs": [],
            }),
          }}
        />
      </Head>
      <Layout>
      <HeroWithGemini
        title="慶應義塾大学 商学部
岩尾俊兵 研究会 — 実装×研究で未来を切り拓くゼミ"
        subtitle="実践プロジェクトと研究を両輪で。全国トップレベルの実務経験を積みたい学生へ。"
      />

      <section className="section section-dark">
        <SectionTitle
          title="ゼミの魅力"
          subtitle="実践と研究を両輪で進める、全国トップレベルのゼミ"
        />
        <div className="features-grid">
          <div className="feature-card">
            <h3>実践プロジェクト</h3>
            <p>企業との共同研究・フィールドワークを通じて、リアルな課題解決に取り組みます。</p>
          </div>
          <div className="feature-card">
            <h3>理論研究</h3>
            <p>論文読解と議論、コンピューターシミュレーション解析など、アカデミックな研究を深めます。</p>
          </div>
          <div className="feature-card">
            <h3>実務経験</h3>
            <p>全国トップレベルの実務経験を積み、卒業後も活躍できるスキルを身につけます。</p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <SectionTitle
          title="何を得られる？"
          subtitle="このゼミで身につくスキルセット"
        />
        <div className="skills-grid">
          <div className="skill-item">
            <h4>問いを立てる力</h4>
            <p>仮説検証のスキル</p>
          </div>
          <div className="skill-item">
            <h4>現場のリアルな課題</h4>
            <p>実践的な経験</p>
          </div>
          <div className="skill-item">
            <h4>研究成果の言語化</h4>
            <p>プレゼン・論文・レポート作成力</p>
          </div>
          <div className="skill-item">
            <h4>コンピューターシミュレーション解析</h4>
            <p>調査・分析を行う力</p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <SectionTitle
          title="最新の活動報告"
          subtitle="イベント・研究発表・メディア掲載の最新トピックをピックアップ"
        />
        <div className="card-grid">
          {latestReports.map((r) => (
            <ArticleCard key={r.id} report={r} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link href="/reports">
            <button className="btn-secondary">すべての活動報告を見る</button>
          </Link>
        </div>
      </section>

      <section className="section section-dark">
        <SectionTitle
          title="入ゼミを検討されている方へ"
          subtitle="ともに知の探索を楽しむ仲間を募集しています"
        />
        <p style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          フィールドワーク・企業連携・論文執筆など、実践と研究を往復する活動スタイルです。
          見学・相談はいつでも歓迎します。
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/entry">
            <button className="btn-primary">見学を予約する</button>
          </Link>
          <Link href="/entry">
            <button className="btn-secondary">説明会に申し込む</button>
          </Link>
          <Link href="/contact">
            <button className="btn-secondary">質問する（24h以内返信）</button>
          </Link>
        </div>
      </section>
    </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allReports = getAllReports();
  const latestReports = allReports.slice(0, 3).map(r => {
    const { thumbnailUrl, ...rest } = r;
    return {
      ...rest,
      ...(thumbnailUrl !== undefined ? { thumbnailUrl: thumbnailUrl ?? null } : {}),
    };
  });

  return {
    props: {
      latestReports,
    },
  };
};

export default Home;
