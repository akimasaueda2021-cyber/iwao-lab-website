import type { GetStaticProps, NextPage } from "next";
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
    <Layout>
      <HeroWithGemini
        title="岩尾俊兵研究会 / SHUMPEI IWAO Seminar Lab"
        subtitle="アカデミアと実践を往復しながら、価値創造に挑む"
      />

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
      </section>

      <section className="section section-dark">
        <SectionTitle
          title="参加を検討されている方へ"
          subtitle="ともに知の探索を楽しむ仲間を募集しています"
        />
        <p>
          フィールドワーク・企業連携・論文執筆など、実践と研究を往復する活動スタイルです。
          見学・相談はいつでも歓迎します。
        </p>
        <p style={{ marginTop: "0.8rem" }}>
          詳細は「ゼミ紹介」ページをご覧ください。
        </p>
      </section>
    </Layout>
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
