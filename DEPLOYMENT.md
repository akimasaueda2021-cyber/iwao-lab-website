# デプロイメントガイド

このWebサイトを外部に公開する方法を説明します。

## 🚀 推奨方法：Vercel（最も簡単）

VercelはNext.jsの開発元が提供するホスティングサービスで、Next.jsプロジェクトに最適化されています。

### 手順

#### 1. GitHubにリポジトリを作成（推奨）

1. [GitHub](https://github.com)にアカウントを作成（まだの場合）
2. 新しいリポジトリを作成
3. 以下のコマンドでプロジェクトをGitHubにプッシュ：

```bash
# Gitリポジトリを初期化（まだの場合）
git init

# すべてのファイルをステージング
git add .

# 初回コミット
git commit -m "Initial commit"

# GitHubリポジトリをリモートとして追加（YOUR_USERNAMEとYOUR_REPO_NAMEを置き換え）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# メインブランチにプッシュ
git branch -M main
git push -u origin main
```

#### 2. Vercelにデプロイ

1. [Vercel](https://vercel.com)にアクセス
2. 「Sign Up」でアカウントを作成（GitHubアカウントでログイン可能）
3. 「Add New Project」をクリック
4. GitHubリポジトリを選択
5. プロジェクト設定：
   - **Framework Preset**: Next.js（自動検出されるはず）
   - **Root Directory**: `./`（そのまま）
   - **Build Command**: `npm run build`（自動設定されるはず）
   - **Output Directory**: `.next`（自動設定されるはず）
6. 「Deploy」をクリック
7. 数分待つと、デプロイが完了します
8. 自動的にURLが発行されます（例：`your-project-name.vercel.app`）

#### 3. カスタムドメインの設定（オプション）

1. Vercelのプロジェクト設定ページに移動
2. 「Domains」タブを開く
3. ドメイン名を入力して追加
4. DNS設定の指示に従ってドメインを設定

---

## 🌐 その他のデプロイ方法

### Netlify

1. [Netlify](https://www.netlify.com)にアカウントを作成
2. 「Add new site」→「Import an existing project」
3. GitHubリポジトリを選択
4. ビルド設定：
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. 「Deploy site」をクリック

**注意**: NetlifyでNext.jsを使用する場合、`next.config.js`に設定を追加する必要がある場合があります。

### 自前のサーバー（VPS/クラウド）

#### ビルドとデプロイ

```bash
# プロジェクトをビルド
npm run build

# 本番サーバーで起動
npm start
```

#### 必要な環境

- Node.js 18以上
- npmまたはyarn

#### 推奨サービス

- **AWS EC2**
- **Google Cloud Platform**
- **Microsoft Azure**
- **DigitalOcean**
- **Linode**

#### 本番環境での実行

```bash
# PM2を使用したプロセス管理（推奨）
npm install -g pm2
pm2 start npm --name "seminar-lab-website" -- start
pm2 save
pm2 startup
```

---

## ✅ デプロイ前の確認事項

### 1. ビルドが成功するか確認

```bash
npm run build
```

エラーがないことを確認してください。

### 2. 環境変数の確認

環境変数を使用している場合、Vercelのプロジェクト設定で環境変数を設定してください。

### 3. パブリックファイルの確認

`public`フォルダ内のファイルは自動的に公開されます。

### 4. パフォーマンス最適化

- 画像の最適化（Next.jsの`Image`コンポーネントを使用）
- コード分割（自動で行われます）
- 静的生成の活用（可能なページは静的生成）

---

## 🔄 継続的なデプロイ（CI/CD）

### Vercelの場合

- GitHubにプッシュするたびに自動的にデプロイされます
- プルリクエストごとにプレビューURLが生成されます

### 手動デプロイ

Vercel CLIを使用：

```bash
# Vercel CLIをインストール
npm i -g vercel

# デプロイ
vercel

# 本番環境にデプロイ
vercel --prod
```

---

## 📝 トラブルシューティング

### ビルドエラー

- `npm run build`をローカルで実行してエラーを確認
- 依存関係を再インストール：`rm -rf node_modules package-lock.json && npm install`

### 404エラー

- 動的ルーティング（`[slug].tsx`など）が正しく設定されているか確認
- `getStaticPaths`と`getStaticProps`が正しく実装されているか確認

### パフォーマンス問題

- Vercelのダッシュボードでパフォーマンス分析を確認
- 画像の最適化を確認
- 不要な依存関係を削除

---

## 🎯 次のステップ

1. ✅ デプロイが完了したら、URLを共有
2. ✅ SEO設定（`next/head`を使用）
3. ✅ Google Analyticsの追加（必要に応じて）
4. ✅ カスタムドメインの設定
5. ✅ SSL証明書の確認（Vercelは自動で設定されます）

---

## 📞 サポート

問題が発生した場合：
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)


