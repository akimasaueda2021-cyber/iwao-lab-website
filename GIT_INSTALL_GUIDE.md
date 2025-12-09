# Gitのインストールガイド

## 🎯 最も簡単な方法：GitHub Desktop（推奨）

### インストール手順

1. **GitHub Desktopをダウンロード**
   - [https://desktop.github.com/](https://desktop.github.com/) にアクセス
   - 「Download for Windows」をクリック
   - インストーラーを実行

2. **GitHubアカウントでログイン**
   - GitHub Desktopを起動
   - GitHubアカウントでログイン

3. **プロジェクトを追加**
   - 「File」→「Add Local Repository」
   - 「Choose...」をクリック
   - プロジェクトフォルダを選択：`C:\Users\akima\新しいフォルダー\岩尾研webサイト`
   - 「Add repository」をクリック

4. **GitHubに公開**
   - 「Publish repository」ボタンをクリック
   - リポジトリ名を入力（例：`iwao-lab-website`）
   - 「Public」または「Private」を選択
   - 「Publish repository」をクリック

これで完了です！🎉

---

## 🔧 方法2：Git for Windows（コマンドライン）

### インストール手順

1. **Gitをダウンロード**
   - [https://git-scm.com/download/win](https://git-scm.com/download/win) にアクセス
   - 自動的にダウンロードが開始されます
   - ダウンロードしたインストーラーを実行

2. **インストール設定**
   - 基本的にはデフォルト設定でOK
   - 「Next」をクリックして進める
   - インストールが完了したら「Finish」

3. **PowerShellを再起動**
   - 現在開いているPowerShellを閉じる
   - 新しいPowerShellを開く

4. **インストール確認**
   ```powershell
   git --version
   ```
   バージョンが表示されればOKです。

5. **Gitの初期設定（初回のみ）**
   ```powershell
   git config --global user.name "あなたの名前"
   git config --global user.email "your.email@example.com"
   ```

6. **プロジェクトをGitHubにプッシュ**
   ```powershell
   # プロジェクトフォルダに移動
   cd "C:\Users\akima\新しいフォルダー\岩尾研webサイト"
   
   # Gitリポジトリを初期化
   git init
   
   # すべてのファイルを追加
   git add .
   
   # 初回コミット
   git commit -m "Initial commit: 岩尾研Webサイト"
   
   # メインブランチに名前を変更
   git branch -M main
   
   # GitHubリポジトリを接続（YOUR_USERNAMEとYOUR_REPO_NAMEを置き換え）
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   
   # GitHubにプッシュ
   git push -u origin main
   ```

---

## ✅ どちらを選ぶべきか？

- **GitHub Desktop**: GUIが使いやすく、初心者向け。コマンドを覚える必要がない。
- **Git for Windows**: コマンドラインに慣れている人向け。より細かい制御が可能。

**初心者の方はGitHub Desktopを強く推奨します！**

---

## 🔍 トラブルシューティング

### Gitがインストールされても認識されない場合

1. PowerShellを完全に閉じて再起動
2. それでもダメな場合は、PCを再起動
3. 環境変数PATHにGitが追加されているか確認

### GitHub Desktopでエラーが出る場合

- GitHubアカウントにログインしているか確認
- インターネット接続を確認
- GitHub Desktopを最新版に更新

---

## 📚 参考リンク

- [GitHub Desktop公式サイト](https://desktop.github.com/)
- [Git for Windows公式サイト](https://git-scm.com/download/win)
- [GitHub公式ドキュメント](https://docs.github.com/ja)


