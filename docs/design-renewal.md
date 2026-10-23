# 汐猫みお 公式サイト デザイン改修

## 調査と維持するもの

Nuxt 4 / Vue 3 / Tailwind CSS / @nuxt/image を継続する。ニュース4記事、規約・運営者ページ、お問い合わせGoogleフォーム、プロフィール画像切替、三面図切替、素材クレジット、ファンキット、外部リンク、ミニキャラ、ページ先頭へ戻る操作を維持する。

ヘッダーは既存の固定・フローティング切替とモバイルダイアログ、フッターは既存の濃色と複数カラムをベースにする。ロゴを提供PNGに差し替え、VIDEOS導線を追加する。参考 https://noripro.jp/ は日英の情報階層と整理された導線を参考にし、画像・コード・レイアウトは流用しない。公開中 https://shiomiolog.com/ は取得できなかったため、既存リポジトリとローカル画面を調査の基準にした。

改善対象は動画導線の不足、セクション間の過度な影・角丸・装飾のばらつき、過剰なヒーロー背景の動き、IntersectionObserverによる本文の非表示。

## デザインルール

提供PNGの不透明かつ彩度のある画素を8階調で集計。最頻の濃紺 RGB(0,32,88) = #002058、青の主要クラスタ RGB(0,168,255) = #00A8FF を抽出。

|用途|色|基準|
|---|---|---|
|ブランド濃紺|#002058|ロゴから抽出。見出し・主要ボタン|
|ブランド青|#00A8FF|ロゴから抽出。装飾用|
|リンク・補助見出し|#0078B8|可読性を優先した濃い派生色|
|アイスブルー|#EAF7FF|広い面に使う派生色|
|背景|#FFFFFF / #F7FBFE|白とごく淡い青|
|本文|#273D56|落ち着いた濃色|
|罫線|#DCE9F2|セクションとカードの区切り|

日本語は既存BIZ UDPGothic、英字の主要見出しはArial系サンセリフ。本文最大幅1152px、セクション余白88px（モバイル56px）、カード角丸24px、ボタン角丸6px。ヘッダーとフッターは既存表現を維持。円弧・星・控えめな猫耳をアクセントにし、ロゴ内の文字は画像をそのまま使用する。

## 構成

Hero → News → Contents → Profile → Fan Kit → Socials → 3D Model → Goods → Guidance → Guidelines → Contact。

Contentsは既存YouTubeチャンネルへの導線。架空の動画・サムネイル・配信状態は追加しない。装飾内の「LEARNING & GAMING」は活動内容を示す。

## ブランド移行とモデル差替え

移行予定日は2027-01-01、予定URLは https://skyfelis.jp/ 、IDは @skyfelis。追加指示に従い、YouTube・XのリンクとSNSメタデータを @skyfelis に更新し、全ページのcanonical・og:urlを https://skyfelis.jp/ 基準に設定。DNS・リダイレクト・デプロイ構成は変更しない。全アカウントのIDは skyfelis に統一する。GitHubは https://github.com/skyfelis 、BOOTHは https://skyfelis.booth.pm/ 。ブログは https://blog.skyfelis.jp/ 、ポートフォリオは https://portfolio.skyfelis.jp/ に更新。サークルへのリンク・紹介カードは追加指示に従い掲載しない。

ロゴは public/images/logo-skyfelis.png。新モデル未提供のため現行ビジュアルを使用。通常は既存アニメーションWebP、動き停止時とprefers-reduced-motionでは静止画を使用。Hero.vueの画像、ProfileSection.vueのassetList、ModelSpec.vueの三面図・スペックは、新モデルの正式な素材と値が揃った時点で更新する。旧画像は削除しない。

## ローカル確認

- npm run build: 成功。
- NITRO_PRESET=cloudflare_module npm run build: 成功。本番にはデプロイしない。
- 1440px、390px、320px幅のレイアウトを確認。横スクロールなし。
- プロフィール「アップ」、三面図「3Dモデル版」の切替を確認。
- モバイルメニュー開閉、Escapeで閉じて起動ボタンへフォーカス復帰を確認。
- スキップリンク、focus-visible、フォーカストラップ、prefers-reduced-motionを維持。
- ヒーローのゆっくりした動きと一度だけのスクロール演出。動き停止ボタンを提供し、prefers-reduced-motionではアニメーションWebPを取得しない。動画埋込み・追加ライブラリなし。重複したGoogle Fonts読込みを除去。
- 問い合わせの送信、外部SNSの移行、Cloudflare実環境での疎通は対象外。

### 最終調整と確認結果

利用者の追加指示に従い、静的に抑えすぎた表現から、既存の動くキャラクター、ゆっくりした背景、猫耳カード、濃紺セクション、スクロール時の軽い登場演出を持つ構成へ調整した。元のヘッダーとフッターを維持する。

- 最終版のCloudflare moduleビルド成功。Node.js compatibility未設定の警告は既存デプロイ設定に関わるため変更していない。Cloudflare実環境での実行確認は未実施。
- トップ、ニュース一覧、既存ニュース全4件、about、privacy、guideline、customer-harassment、contactの全11ルートでHTTP 200。
- 1024px幅のフローティングヘッダー、1440px・390px・320px幅で横はみ出しなし。
- 動き停止ボタンでCSSアニメーションの停止と静止画への切替を確認。
- ブラウザの警告・エラーログなし。git diff --check成功。
- 着手時から存在したpackage-lock.jsonの変更はそのまま保持。
