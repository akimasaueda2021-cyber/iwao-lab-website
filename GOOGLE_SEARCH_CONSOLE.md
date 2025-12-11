# 🔍 Google Search Console 登録ガイド

このガイドでは、Google検索にサイトを登録して、検索結果に表示されるようにする手順を説明します。

## 📋 前提条件

- ✅ サイトがVercelでデプロイ済み
- ✅ サイトが公開されている（URLにアクセスできる）

---

## 🚀 ステップ1: Google Search Consoleにアクセス

1. [Google Search Console](https://search.google.com/search-console)にアクセス
2. Googleアカウントでログイン

---

## 📝 ステップ2: プロパティを追加

### 2-1. プロパティタイプを選択

1. 「**プロパティを追加**」をクリック
2. 「**URL プレフィックス**」を選択（推奨）
3. サイトのURLを入力（例：`https://iwao-lab-website.vercel.app`）
4. 「**続行**」をクリック

### 2-2. 所有権の確認

以下のいずれかの方法で所有権を確認します：

#### 方法A: HTMLファイル（推奨）

1. 「**HTMLファイル**」タブを選択
2. 提供されたHTMLファイルをダウンロード
3. ダウンロードしたファイルを`public`フォルダに配置
4. GitHubにコミット・プッシュ：
   ```powershell
   git add public/google*.html
   git commit -m "Add Google Search Console verification file"
   git push
   ```
5. Vercelで自動デプロイが完了するまで待つ（数分）
6. Google Search Consoleで「**確認**」をクリック

#### 方法B: HTMLタグ

1. 「**HTMLタグ**」タブを選択
2. 提供されたメタタグをコピー（例：`<meta name="google-site-verification" content="..." />`）
3. `pages/_app.tsx`に追加：
   ```tsx
   import Head from "next/head";
   
   export default function MyApp({ Component, pageProps }: AppProps) {
     return (
       <>
         <Head>
           <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
         </Head>
         <Component {...pageProps} />
       </>
     );
   }
   ```
4. GitHubにコミット・プッシュ
5. Vercelで自動デプロイが完了するまで待つ
6. Google Search Consoleで「**確認**」をクリック

---

## 📤 ステップ3: サイトマップを送信

1. 左メニューから「**サイトマップ**」を選択
2. 「**新しいサイトマップの追加**」に以下を入力：
   ```
   sitemap.xml
   ```
3. 「**送信**」をクリック

これにより、Googleがサイトのすべてのページをインデックスします。

---

## 🔍 ステップ4: インデックス登録をリクエスト（オプション）

重要なページをすぐにインデックスしたい場合：

1. 左メニューから「**URL検査**」を選択
2. インデックスしたいURLを入力（例：`https://iwao-lab-website.vercel.app/`）
3. 「**Enter**」キーを押す
4. 「**インデックス登録をリクエスト**」をクリック

**注意**: 通常は数日から数週間かかりますが、リクエストすることで早くなる可能性があります。

---

## ⏰ インデックス登録までの時間

- **通常**: 数日から数週間
- **リクエスト後**: 数時間から数日

Googleは定期的にサイトをクロールしてインデックスを更新します。

---

## ✅ 確認方法

### 1. Google検索で確認

以下の検索クエリでサイトが表示されるか確認：

```
site:iwao-lab-website.vercel.app
```

または：

```
岩尾俊兵研究会 site:iwao-lab-website.vercel.app
```

### 2. Google Search Consoleで確認

- 「**カバレッジ**」: インデックスされたページ数を確認
- 「**パフォーマンス**」: 検索結果での表示回数やクリック数を確認

---

## 🔄 継続的な改善

### 1. 定期的にサイトマップを更新

新しいページを追加したら、Google Search Consoleでサイトマップを再送信する必要はありません（自動で更新されます）。

### 2. パフォーマンスを監視

Google Search Consoleの「**パフォーマンス**」タブで：
- どのキーワードで検索されているか
- クリック率（CTR）
- 平均検索順位

などを確認できます。

### 3. エラーの確認

「**カバレッジ**」タブで、インデックスできないページがないか確認します。

---

## 📚 参考リンク

- [Google Search Console ヘルプ](https://support.google.com/webmasters)
- [サイトマップについて](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [検索エンジン最適化（SEO）の基本](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

---

## ⚠️ トラブルシューティング

### 所有権の確認が失敗する

- HTMLファイルが正しく配置されているか確認
- サイトが公開されているか確認（URLにアクセスできるか）
- デプロイが完了しているか確認

### サイトマップが送信できない

- `sitemap.xml`にアクセスできるか確認（`https://iwao-lab-website.vercel.app/sitemap.xml`）
- XML形式が正しいか確認

### インデックスされない

- 数日待つ（通常は時間がかかります）
- 「URL検査」で個別にリクエスト
- サイトマップが正しく送信されているか確認

---

**🎉 登録が完了したら、数日から数週間でGoogle検索に表示されるようになります！**


