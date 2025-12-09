// data/reports.ts
export type Report = {
    id: string;
    slug: string;
    title: string;
    publishedAt: string; // ISO
    category: string;
    tags: string[];
    summary: string;
    thumbnailUrl?: string | null;
    body: string; // HTML 文字列にしておく
  };
  
  export const reports: Report[] = [
    {
      id: "1",
      slug: "SHIFT GROWTH CAPITAL CEO GUEST SPEECH",
      title: "東京大学情報理工大学院との共同開催にてSHIFT GROWTH CAPITAL CEOのゲスト講演を実施しました",
      publishedAt: "2025-12-05T10:00:00+09:00",
      category: "イベント",
      tags: ["ゲストスピーカー", "東京大学情報理工大学院"],
      summary:
        "東京大学情報理工大学院との共同開催にてSHIFT GROWTH CAPITAL CEOのゲスト講演を実施しました",
      body: `
        <p>2025年12月05日、東京大学情報理工大学院との共同開催プロジェクトにおいてM&AのスペシャリストであるSHIFT GROWTH CAPITAL CEOのゲスト講演を実施しました。</p>
        <p>小島秀穀様には、M&Aの経験や成功事例について、具体的な事例を交えながら詳しくご説明いただきました。</p>
        <h2>講演のポイント</h2>
        <ul>
          <li>M&Aから検討するキャリア</li>
          <li>SHIFT流のM&AのエグゼキューションとPMI</li>
          <li>ケーススタディ</li>
        </ul>
        <p>当日は学生の方々からも多くの質問をいただき、今後の共同研究の可能性についても議論を深めることができました。</p>
      `,
    },
    {
      id: "2",
      slug: "入ゼミ課題",
      title: "2025年度岩尾俊兵研究会入ゼミ課題を公開しました。",
      publishedAt: "2025-11-20T10:00:00+09:00",
      category: "選考",
      tags: ["ゼミ選考", "ゼミ課題"],
      summary:
        "2025年度岩尾俊兵研究会入ゼミ課題を公開しました。",
      body: `
        <p>詳細はこちらのリンクからhttps://pando.life/keioiwao/article/2980962</p>
       
      `,
    },
    {
      id: "3",
      slug: "2024-media-coverage",
      title: "研究会の取り組みが◯◯新聞に掲載されました",
      publishedAt: "2024-12-20T10:00:00+09:00",
      category: "メディア掲載",
      tags: ["メディア", "地域連携"],
      summary:
        "本研究会が地域企業と実施したリサーチプロジェクトの結果が、◯◯新聞の特集記事として掲載されました。",
      body: `
        <p>2024年12月20日付の◯◯新聞にて、本研究会と地域企業による共同プロジェクトが紹介されました。</p>
        <p>記事では、インタビュー調査を通じて明らかになった中小企業の人材・DX課題と、それに対する学生からの提案内容が取り上げられています。</p>
        <p>今後も、アカデミアと地域企業の橋渡し役として、研究と実務の両面から価値提供していきます。</p>
      `,
    },
  ];
  
  // ヘルパー関数（カテゴリや年度一覧の生成）
  export const getCategories = (): string[] => {
    const set = new Set<string>();
    reports.forEach((r) => set.add(r.category));
    return Array.from(set).sort();
  };
  
  export const getYears = (): string[] => {
    const set = new Set<string>();
    reports.forEach((r) => {
      const year = new Date(r.publishedAt).getFullYear().toString();
      set.add(year);
    });
    return Array.from(set).sort((a, b) => Number(b) - Number(a));
  };


