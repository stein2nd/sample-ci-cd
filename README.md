# 🚀 CI/CDハンズオン教材（SonarCloud + ZAP + GitHub Pages）

このリポジトリは、GitHub Actionsで以下を自動化するハンズオン教材です：

1. ESLint & Jestによるコード品質チェック
2. SonarCloudによる静的解析（SAST）
3. GitHub Pagesへの自動デプロイ
4. OWASP ZAPによる動的解析（DAST）

---

## 📋 事前準備

1. GitHubリポジトリをFork or Clone
2. SonarCloudアカウント作成 → [https://sonarcloud.io](https://sonarcloud.io)
3. 「New Project」で `xxxx/sample-ci-cd-zap-sonar` を選択
4. `SONAR_TOKEN` を GitHub Secrets に登録
5. pushすると GitHub Actions が自動実行され、Pagesにデプロイされます

---

## 🔍 ZAPスキャン

- デプロイ後のURL: `https://stein2nd.github.io/sample-ci-cd/`
- Actionsのzapジョブで自動スキャンされます
- スキャンレポートはログに出力されます

## 📦 GitHub Pages

- デプロイされたサイト: `https://stein2nd.github.io/sample-ci-cd/`
- `main` ブランチにpushすると自動的にデプロイされます

---

## 🧠 学習ポイント

- CI/CDの全体像をクラウドで体験
- 品質・セキュリティ自動化の手順を理解
- DevSecOpsの基本概念を実践的に学習

---

