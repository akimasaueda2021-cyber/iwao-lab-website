// components/ArticleCard.tsx
import Link from "next/link";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { Report } from "./data/reports";

type ArticleCardProps = {
  report: Report;
};

const ArticleCard = ({ report }: ArticleCardProps) => {
  const date = format(new Date(report.publishedAt), "yyyy年M月d日", { locale: ja });

  return (
    <Link href={`/reports/${report.slug}`}>
      <article className="card">
        {report.thumbnailUrl && (
          <div className="card-image">
            <img src={report.thumbnailUrl} alt={report.title} />
          </div>
        )}
        <div className="card-meta">
          <span>{report.category}</span>・<span>{date}</span>
        </div>
        <h3 className="card-title">{report.title}</h3>
        <p className="card-summary">{report.summary}</p>
        {report.tags && report.tags.length > 0 && (
          <div className="card-tags">
            {report.tags.map((tag, idx) => (
              <Link
                key={idx}
                href={`/reports?tag=${encodeURIComponent(tag)}`}
                onClick={(e) => e.stopPropagation()}
                className="card-tag"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}
        <span
          style={{
            marginTop: "0.3rem",
            fontSize: "0.8rem",
            color: "#18CCFC",
            fontWeight: 500,
          }}
        >
          詳細を見る →
        </span>
      </article>
    </Link>
  );
};

export default ArticleCard;


