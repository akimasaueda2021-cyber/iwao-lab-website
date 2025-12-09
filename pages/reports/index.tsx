import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useMemo, useState } from "react";
import Layout from "../../components/Layout";
import SectionTitle from "../../components/SectionTitle";
import ArticleCard from "../../components/ArticleCard";
import FilterBar from "../../components/FilterBar";
import { getAllReports, getCategories, getYears } from "../../lib/reports";
import { Report } from "../../components/data/reports";

type Props = {
  reports: Report[];
  categories: string[];
  years: string[];
};

const ReportsIndex: NextPage<Props> = ({ reports, categories, years }) => {
  const [category, setCategory] = useState("");
  const [year, setYear] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 10;

  const filtered = useMemo(() => {
    return reports.filter((r) => {
      const date = new Date(r.publishedAt);
      const y = date.getFullYear().toString();

      const matchCategory = category ? r.category === category : true;
      const matchYear = year ? y === year : true;
      const lowerQuery = query.toLowerCase();
      const matchQuery = lowerQuery
        ? r.title.toLowerCase().includes(lowerQuery) ||
          r.summary.toLowerCase().includes(lowerQuery)
        : true;

      return matchCategory && matchYear && matchQuery;
    });
  }, [category, year, query, reports]);

  const totalPages = Math.ceil(filtered.length / perPage) || 1;
  const pageSafe = Math.min(page, totalPages);
  const start = (pageSafe - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setPage(1);
  };

  const handleYearChange = (value: string) => {
    setYear(value);
    setPage(1);
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  return (
    <>
      <Head>
        <title>活動報告 | 岩尾俊兵研究会</title>
        <meta
          name="description"
          content="岩尾俊兵研究会の活動報告。イベント・研究発表・メディア掲載などの活動を、プレスリリース形式でお届けします。"
        />
        <meta property="og:title" content="活動報告 | 岩尾俊兵研究会" />
        <meta
          property="og:description"
          content="イベント・研究発表・メディア掲載などの活動を、プレスリリース形式でお届けします。"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://iwao-lab-website.vercel.app/reports" />
      </Head>
      <Layout>
      <section className="section section-dark">
        <SectionTitle
          title="活動報告"
          subtitle="イベント・研究発表・メディア掲載などの活動を、プレスリリース形式でお届けします。"
        />

        <FilterBar
          category={category}
          year={year}
          query={query}
          categories={categories}
          years={years}
          onCategoryChange={handleCategoryChange}
          onYearChange={handleYearChange}
          onQueryChange={handleQueryChange}
        />

        {paginated.length === 0 ? (
          <p>条件に一致する活動報告が見つかりませんでした。</p>
        ) : (
          <div className="card-grid">
            {paginated.map((r) => (
              <ArticleCard key={r.id} report={r} />
            ))}
          </div>
        )}

        <div className="pagination">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={pageSafe <= 1}
          >
            前へ
          </button>
          <span style={{ alignSelf: "center", fontSize: "0.85rem" }}>
            {pageSafe} / {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={pageSafe >= totalPages}
          >
            次へ
          </button>
        </div>
      </section>
    </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const reports = getAllReports().map(r => {
    const { thumbnailUrl, ...rest } = r;
    return {
      ...rest,
      ...(thumbnailUrl !== undefined ? { thumbnailUrl: thumbnailUrl ?? null } : {}),
    };
  });
  const categories = getCategories();
  const years = getYears();

  return {
    props: {
      reports,
      categories,
      years,
    },
  };
};

export default ReportsIndex;
