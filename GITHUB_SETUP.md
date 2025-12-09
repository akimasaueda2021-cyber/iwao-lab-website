# GitHubにプロジェクトをアップロードする手順

## 📋 前提条件

### 1. Gitのインストール

Gitがインストールされていない場合、以下の手順でインストールしてください：

1. [Git公式サイト](https://git-scm.com/download/win)にアクセス
2. Windows用のインストーラーをダウンロード
3. インストーラーを実行（デフォルト設定でOK）
4. インストール後、PowerShellを再起動

**確認方法：**
```powershell
git --version
```
バージョンが表示されればOKです。

### 2. GitHubアカウントの作成

1. [GitHub](https://github.com)にアクセス
2. 「Sign up」でアカウントを作成

---

## 🚀 手順

### ステップ1: GitHubでリポジトリを作成

1. GitHubにログイン
2. 右上の「+」→「New repository」をクリック
3. リポジトリ名を入力（例：`iwao-lab-website`）
4. **Public**または**Private**を選択
5. **「Initialize this repository with a README」のチェックを外す**（重要）
6. 「Create repository」をクリック

### ステップ2: ローカルでGitリポジトリを初期化

プロジェクトフォルダで以下のコマンドを実行：

```powershell
# プロジェクトフォルダに移動（既にいる場合は不要）
cd "C:\Users\akima\新しいフォルダー\岩尾研webサイト"

# Gitリポジトリを初期化
git init

# すべてのファイルをステージング
git add .

# 初回コミット
git commit -m "Initial commit: 岩尾研Webサイト"
```

### ステップ3: GitHubリポジトリと接続

GitHubで作成したリポジトリのページに表示されているURLを使用します。

**HTTPS方式（推奨）：**
```powershell
# YOUR_USERNAMEとYOUR_REPO_NAMEを実際の値に置き換えてください
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# メインブランチに名前を変更
git branch -M main

# GitHubにプッシュ
git push -u origin main
```

**SSH方式（SSHキーを設定している場合）：**
```powershell
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### ステップ4: 認証

初回プッシュ時、GitHubの認証が求められます：

- **Personal Access Token（PAT）を使用**（推奨）
  1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
  2. 「Generate new token (classic)」をクリック
  3. スコープで「repo」にチェック
  4. トークンを生成してコピー
  5. パスワード入力時にトークンを貼り付け

---

## 📝 完全なコマンド例

以下を順番に実行してください（`YOUR_USERNAME`と`YOUR_REPO_NAME`を置き換えてください）：

```powershell
# 1. Gitリポジトリを初期化
git init

# 2. すべてのファイルを追加
git add .

# 3. 初回コミット
git commit -m "Initial commit: 岩尾研Webサイト"

# 4. メインブランチに名前を変更
git branch -M main

# 5. GitHubリポジトリをリモートとして追加
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 6. GitHubにプッシュ
git push -u origin main
```

---

## ✅ 確認方法

GitHubのリポジトリページを開いて、ファイルがアップロードされているか確認してください。

---

## 🔄 今後の更新方法

ファイルを変更した後、GitHubに反映するには：

```powershell
# 変更をステージング
git add .

# コミット
git commit -m "変更内容の説明"

# GitHubにプッシュ
git push
```

---

## ⚠️ トラブルシューティング

### エラー: "remote origin already exists"

既にリモートが設定されている場合：
```powershell
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

### エラー: "failed to push some refs"

リモートに既にファイルがある場合：
```powershell
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### 認証エラー

Personal Access Tokenを使用しているか確認してください。

---

## 📚 参考リンク

- [Git公式ドキュメント](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [Personal Access Tokenの作成方法](https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)


