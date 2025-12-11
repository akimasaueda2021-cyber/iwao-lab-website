import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import Layout from "../../components/Layout";
import SectionTitle from "../../components/SectionTitle";
import { getAllReports, getReportBySlug, getReportBodyAsHtml } from "../../lib/reports";
import { Report } from "../../components/data/reports";

type Props = {
  report: Report;
  allReports: Report[];
};

const ReportDetail: NextPage<Props> = ({ report, allReports }) => {
  const date = format(new Date(report.publishedAt), "yyyy年M月d日", { locale: ja });
  
  const sortedReports = [...allReports].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  
  const currentIndex = sortedReports.findIndex((r) => r.id === report.id);
  const prev = currentIndex > 0 ? sortedReports[currentIndex - 1] : null;
  const next = currentIndex < sortedReports.length - 1 ? sortedReports[currentIndex + 1] : null;

  const related = allReports.filter(
    (r) =>
      r.id !== report.id &&
      (r.category === report.category ||
        r.tags.some((tag) => report.tags.includes(tag)))
  );

  return (
    <>
      <Head>
        <title>{report.title} | 岩尾俊兵研究会</title>
        <meta
          name="description"
          content={report.summary || `${report.title} - 岩尾俊兵研究会の活動報告`}
        />
        <meta name="keywords" content={`${report.tags.join(", ")}, 慶應 ゼミ 活動報告, 岩尾ゼミ`} />
        <meta property="og:title" content={`${report.title} | 岩尾俊兵研究会`} />
        <meta
          property="og:description"
          content={report.summary || `${report.title} - 岩尾俊兵研究会の活動報告`}
        />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={report.publishedAt} />
        <meta property="article:author" content="岩尾俊兵研究会" />
        <meta property="article:section" content={report.category} />
        {report.tags.map((tag, idx) => (
          <meta key={idx} property="article:tag" content={tag} />
        ))}
        {report.thumbnailUrl && (
          <meta property="og:image" content={report.thumbnailUrl} />
        )}
        <link rel="canonical" href={`https://iwao-lab-website.vercel.app/reports/${report.slug}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": report.title,
              "description": report.summary || `${report.title} - 岩尾俊兵研究会の活動報告`,
              "datePublished": report.publishedAt,
              "author": {
                "@type": "Organization",
                "name": "岩尾俊兵研究会",
              },
              "publisher": {
                "@type": "Organization",
                "name": "岩尾俊兵研究会",
              },
              ...(report.thumbnailUrl && {
                "image": report.thumbnailUrl,
              }),
            }),
          }}
        />
      </Head>
      <Layout>
      <section className="section section-dark">
        <SectionTitle title="活動報告" />
        <div className="article-layout">
          {/* メイン本文 */}
          <article>
            <div className="article-header-category">{report.category}</div>
            <h1 className="article-header-title">{report.title}</h1>
            <div className="article-header-meta">{date}</div>

            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: report.body }}
            />

            <hr style={{ margin: "1.5rem 0", borderColor: "rgba(255, 255, 255, 0.1)" }} />

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {prev && (
                <Link href={`/reports/${prev.slug}`} style={{ color: "#18CCFC" }}>
                  ← 前の記事：「{prev.title}」
                </Link>
              )}
              {next && (
                <Link href={`/reports/${next.slug}`} style={{ color: "#18CCFC" }}>
                  次の記事：「{next.title}」 →
                </Link>
              )}
            </div>

            <div style={{ marginTop: "0.75rem" }}>
              <Link href="/reports" style={{ color: "#18CCFC" }}>一覧に戻る</Link>
            </div>

            <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid rgba(255, 255, 255, 0.1)", textAlign: "center" }}>
              <p style={{ color: "#d1d5db", marginBottom: "1.5rem" }}>
                入ゼミを検討されている方は、ぜひ説明会・見学にご参加ください
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/entry">
                  <button className="btn-primary">見学を予約する</button>
                </Link>
                <Link href="/contact">
                  <button className="btn-secondary">質問する（24h以内返信）</button>
                </Link>
              </div>
            </div>
          </article>

          {/* サイドバー */}
          <aside>
            <h3 style={{ fontSize: "0.95rem", marginBottom: "0.4rem", color: "#ffffff" }}>
              Tags
            </h3>
            <div className="tag-list" style={{ marginBottom: "1.2rem" }}>
              {report.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/reports?tag=${encodeURIComponent(tag)}`}
                  className="tag"
                  style={{ textDecoration: "none" }}
                >
                  {tag}
                </Link>
              ))}
            </div>

            {related.length > 0 && (
              <>
                <h3 style={{ fontSize: "0.95rem", marginBottom: "0.4rem", color: "#ffffff" }}>
                  関連記事
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {related.slice(0, 3).map((r) => (
                    <li key={r.id} style={{ marginBottom: "0.5rem" }}>
                      <Link href={`/reports/${r.slug}`} style={{ color: "#18CCFC", fontSize: "0.9rem" }}>
                        {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </aside>
        </div>
      </section>
    </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const reports = getAllReports();
  const paths = reports.map((report) => ({
    params: { slug: report.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const report = await getReportBySlug(params.slug);
  if (!report) {
    return {
      notFound: true,
    };
  }

  const bodyHtml = await getReportBodyAsHtml(report.body);
  const { thumbnailUrl: reportThumbnail, ...reportRest } = report;
  const reportWithHtml = { 
    ...reportRest, 
    body: bodyHtml,
    ...(reportThumbnail !== undefined ? { thumbnailUrl: reportThumbnail ?? null } : {}),
  };

  const allReports = getAllReports().map(r => {
    const { thumbnailUrl, ...rest } = r;
    return {
      ...rest,
      ...(thumbnailUrl !== undefined ? { thumbnailUrl: thumbnailUrl ?? null } : {}),
    };
  });

  return {
    props: {
      report: reportWithHtml,
      allReports,
    },
  };
};

export default ReportDetail;
