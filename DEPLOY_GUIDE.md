# 🚀 岩尾研Webサイト デプロイ完全ガイド

このガイドでは、GitHubへのアップロードからVercelでのデプロイまで、すべての手順を説明します。

## ✅ 完了済みの作業

- ✅ Gitリポジトリの初期化
- ✅ ファイルのステージングと初回コミット

---

## 📋 ステップ1: GitHubでリポジトリを作成

### 1-1. GitHubにアクセス

1. [GitHub](https://github.com)にアクセス
2. アカウントにログイン（まだの場合は「Sign up」でアカウント作成）

### 1-2. 新しいリポジトリを作成

1. 右上の「**+**」ボタンをクリック
2. 「**New repository**」を選択
3. リポジトリ情報を入力：
   - **Repository name**: `iwao-lab-website`（お好みの名前でOK）
   - **Description**: 「岩尾研Webサイト」（任意）
   - **Public** または **Private** を選択
   - ⚠️ **重要**: 「**Initialize this repository with a README**」のチェックを**外す**
4. 「**Create repository**」をクリック

### 1-3. リポジトリURLをコピー

作成後、表示されるページで以下のようなURLが表示されます：
- **HTTPS**: `https://github.com/YOUR_USERNAME/iwao-lab-website.git`
- **SSH**: `git@github.com:YOUR_USERNAME/iwao-lab-website.git`

このURLをコピーしておいてください。

---

## 📤 ステップ2: GitHubにプッシュ

### 2-1. リモートリポジトリを追加

PowerShellで以下のコマンドを実行してください（`YOUR_USERNAME`と`iwao-lab-website`を実際の値に置き換えてください）：

```powershell
# メインブランチに名前を変更
git branch -M main

# GitHubリポジトリをリモートとして追加
git remote add origin https://github.com/YOUR_USERNAME/iwao-lab-website.git

# GitHubにプッシュ
git push -u origin main
```

### 2-2. 認証

初回プッシュ時に認証が求められます。以下のいずれかの方法で認証してください：

#### 方法A: Personal Access Token（推奨）

1. GitHub → 右上のアイコン → **Settings**
2. 左メニュー → **Developer settings**
3. **Personal access tokens** → **Tokens (classic)**
4. **Generate new token (classic)** をクリック
5. 設定：
   - **Note**: 「岩尾研Webサイト用」など
   - **Expiration**: お好みで設定（90日、1年など）
   - **Select scopes**: `repo` にチェック
6. **Generate token** をクリック
7. 表示されたトークンを**すぐにコピー**（後で見られません）
8. パスワード入力時に、このトークンを貼り付け

#### 方法B: GitHub CLI（簡単）

```powershell
# GitHub CLIをインストール（まだの場合）
winget install --id GitHub.cli

# ログイン
gh auth login

# その後、通常通りプッシュ
git push -u origin main
```

### 2-3. 確認

GitHubのリポジトリページを開いて、ファイルがアップロードされているか確認してください。

---

## 🌐 ステップ3: Vercelでデプロイ（推奨）

VercelはNext.jsの開発元が提供するホスティングサービスで、**無料**で使用でき、**自動デプロイ**が可能です。

### 3-1. Vercelにアカウント作成

1. [Vercel](https://vercel.com)にアクセス
2. 「**Sign Up**」をクリック
3. 「**Continue with GitHub**」を選択（GitHubアカウントでログイン）

### 3-2. プロジェクトをインポート

1. ダッシュボードで「**Add New Project**」をクリック
2. 作成したGitHubリポジトリ（`iwao-lab-website`）を選択
3. 「**Import**」をクリック

### 3-3. プロジェクト設定

設定は自動検出されるはずですが、確認してください：

- **Framework Preset**: `Next.js` ✅
- **Root Directory**: `./` ✅
- **Build Command**: `npm run build` ✅
- **Output Directory**: `.next` ✅
- **Install Command**: `npm install` ✅

### 3-4. デプロイ実行

1. 「**Deploy**」をクリック
2. 数分待つとデプロイが完了します
3. 完了後、自動的にURLが発行されます（例：`iwao-lab-website.vercel.app`）

### 3-5. 自動デプロイの確認

今後、GitHubにプッシュするたびに、自動的にVercelでデプロイが実行されます。

---

## 🔄 今後の更新方法

### ファイルを変更した場合

```powershell
# 変更をステージング
git add .

# コミット
git commit -m "変更内容の説明"

# GitHubにプッシュ（自動的にVercelでデプロイされます）
git push
```

---

## 🌍 カスタムドメインの設定（オプション）

独自のドメイン（例：`iwao-lab.example.com`）を使用したい場合：

1. Vercelのプロジェクト設定ページに移動
2. 「**Domains**」タブを開く
3. ドメイン名を入力して追加
4. DNS設定の指示に従ってドメインを設定

---

## ⚠️ トラブルシューティング

### エラー: "remote origin already exists"

既にリモートが設定されている場合：

```powershell
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/iwao-lab-website.git
```

### エラー: "failed to push some refs"

リモートに既にファイルがある場合：

```powershell
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### 認証エラー

Personal Access Tokenを使用しているか確認してください。トークンには`repo`スコープが必要です。

### ビルドエラー

Vercelでビルドエラーが発生した場合：

1. ローカルでビルドを確認：
   ```powershell
   npm run build
   ```
2. エラーがあれば修正
3. 再度コミット・プッシュ

---

## 📚 参考リンク

- [Git公式ドキュメント](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)

---

## ✅ チェックリスト

デプロイまでの確認事項：

- [ ] GitHubアカウントを作成
- [ ] GitHubでリポジトリを作成
- [ ] リモートリポジトリを追加
- [ ] GitHubにプッシュ
- [ ] Vercelアカウントを作成
- [ ] Vercelでプロジェクトをインポート
- [ ] デプロイが成功
- [ ] サイトが正常に表示される

---

**🎉 デプロイが完了したら、URLを共有してWebサイトを公開できます！**


