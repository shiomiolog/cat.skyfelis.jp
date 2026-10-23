<template>
  <div
    class="relative min-h-screen overflow-hidden bg-[#F7FAFF] px-6 pb-28 pt-36 font-sans text-slate-800 antialiased md:pt-44"
  >
    <div
      class="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-[#0078B8]/10 blur-3xl"
      aria-hidden="true"
    ></div>
    <div
      class="pointer-events-none absolute -left-24 bottom-16 h-72 w-72 rounded-full bg-[#3F6FBA]/10 blur-3xl"
      aria-hidden="true"
    ></div>

    <div class="relative mx-auto w-full max-w-4xl">
      <header class="mb-14 text-center select-none">
        <span class="mb-7 block font-mono text-xs font-bold tracking-[0.2em] text-slate-400">
          // SAFETY_POLICY: active
        </span>
        <h1 class="text-3xl font-black leading-relaxed text-[#002058] md:text-4xl">
          カスタマーハラスメント等への対応方針
        </h1>
        <p class="mt-3 text-xs font-bold tracking-wider text-slate-400">
          安心して活動と交流を続けるために
        </p>
      </header>

      <article
        class="rounded-[2.5rem] border border-white bg-white/90 p-7 shadow-[0_24px_70px_rgba(58,111,181,0.11)] backdrop-blur-sm sm:p-10 md:p-14"
      >
        <div class="space-y-14 text-sm font-medium leading-loose text-slate-600 md:text-base">
          <section class="space-y-5">
            <h2 class="flex items-center gap-3 text-xl font-black text-[#002058]">
              <span class="block h-7 w-1.5 rounded-full bg-[#0078B8]" aria-hidden="true"></span>
              1. 基本方針
            </h2>
            <p>
              汐猫みおは、皆さまから寄せられる感想、意見、要望や応援の言葉を大切にし、よりよい活動につなげていきます。一方で、活動者、運営協力者、取引先、共演者およびコミュニティ参加者の安全や尊厳を損なう言動には、安心して活動と交流を継続できる環境を守るため、必要な対応を行います。
            </p>
            <div class="rounded-3xl border border-[#0078B8]/20 bg-[#F1FBFF] p-5 text-sm text-[#244A73]">
              本方針は、正当な批評、感想、改善要望、権利の行使または合理的配慮の申し出を一律に制限するものではありません。内容だけでなく、目的、頻度、継続性および手段・態様を踏まえて個別に判断します。
            </div>
          </section>

          <section class="space-y-5">
            <h2 class="flex items-center gap-3 text-xl font-black text-[#002058]">
              <span class="font-mono text-sm text-[#0078B8]" aria-hidden="true">#</span>
              2. 対象範囲と考え方
            </h2>
            <p>
              公式サイト、お問い合わせフォーム、電子メール、SNS、ダイレクトメッセージ、動画・ライブ配信のコメント、イベントその他の活動に関連する場で行われる言動を対象とします。
            </p>
            <p>
              要求または言動の内容に照らして、その手段・態様が社会通念上相当な範囲を超え、活動環境、心身の安全、プライバシーまたは業務の遂行を害するものを、カスタマーハラスメントその他の迷惑行為として取り扱います。
            </p>
          </section>

          <section class="space-y-6">
            <h2 class="flex items-center gap-3 text-xl font-black text-[#002058]">
              <span class="font-mono text-sm text-[#0078B8]" aria-hidden="true">#</span>
              3. 対象となる行為の例
            </h2>
            <p class="text-sm text-slate-500">
              以下は例示であり、対象となる行為をこれらに限定するものではありません。
            </p>

            <div class="grid gap-5 md:grid-cols-2">
              <PolicyCard title="危害・威圧・差別">
                <li>暴力、脅迫、威嚇、危害または加害を予告する言動</li>
                <li>暴言、侮辱、人格否定、差別的または性的な言動</li>
                <li>つきまとい、待ち伏せ、面会や接触の強要</li>
              </PolicyCard>

              <PolicyCard title="オンライン上の攻撃">
                <li>名誉・信用を不当に害する投稿や、虚偽情報の継続的な流布</li>
                <li>個人情報、所在、非公開情報等の探索・公開・拡散</li>
                <li>なりすまし、アカウントへの攻撃、スパムその他の妨害</li>
              </PolicyCard>

              <PolicyCard title="過度・不当な要求">
                <li>回答、謝罪、面会、活動内容の変更等を執拗に要求する行為</li>
                <li>合理的な範囲を超える金品、補償、特別対応等の要求</li>
                <li>同一または類似内容の連続送信、長時間の拘束</li>
              </PolicyCard>

              <PolicyCard title="プライバシー・活動の妨害">
                <li>非公開の連絡、会話、画像、音声等の無断公開</li>
                <li>配信、イベント、取引またはコミュニティ運営を妨げる行為</li>
                <li>関係者や他の参加者に対する攻撃・迷惑行為</li>
              </PolicyCard>
            </div>
          </section>

          <section class="space-y-5">
            <h2 class="flex items-center gap-3 text-xl font-black text-[#002058]">
              <span class="font-mono text-sm text-[#0078B8]" aria-hidden="true">#</span>
              4. 対応
            </h2>
            <ul class="list-disc space-y-3 pl-6 marker:text-[#0078B8]">
              <li>お問い合わせやメッセージへの回答を行わず、以後の連絡をお断りする場合があります。</li>
              <li>コメントの削除、アカウントのミュート・ブロック・通報、オンラインコミュニティからの退出措置、イベント参加やサービス利用の制限を行う場合があります。</li>
              <li>投稿、メッセージ、アクセス記録等を証拠として保存し、プラットフォーム運営者、取引先その他の関係者と必要な情報を共有する場合があります。</li>
              <li>悪質性または緊急性が高いと判断した場合は、弁護士等の専門家や警察その他の公的機関へ相談し、削除請求、発信者情報の開示請求、損害賠償請求、刑事上の手続その他の必要な措置を検討します。</li>
            </ul>
          </section>

          <section class="space-y-5">
            <h2 class="flex items-center gap-3 text-xl font-black text-[#002058]">
              <span class="font-mono text-sm text-[#0078B8]" aria-hidden="true">#</span>
              5. 皆さまへのお願い
            </h2>
            <p>
              問題のある投稿やアカウントを見かけた場合は、相手への直接的な反論や接触、投稿の拡散は避け、各プラットフォームの通報機能をご利用ください。活動への具体的な危害や権利侵害に関する情報をお寄せいただく場合は、対象URL、アカウント名、確認日時、スクリーンショット等を可能な範囲で添えて、お問い合わせフォームからご連絡ください。
            </p>
            <p>
              すべてのご連絡への個別回答や、対応結果の開示をお約束するものではありません。安全確保と二次被害防止のため、ご理解をお願いいたします。
            </p>
          </section>

          <section class="space-y-5">
            <h2 class="flex items-center gap-3 text-xl font-black text-[#002058]">
              <span class="font-mono text-sm text-[#0078B8]" aria-hidden="true">#</span>
              6. 方針の改定
            </h2>
            <p>
              本方針は、法令、活動内容または利用サービスの変更等に応じて、予告なく改定することがあります。改定後の内容は、本ページへの掲載時から適用します。
            </p>
          </section>

          <div class="border-t border-slate-100 pt-8 text-xs text-slate-400">
            <p>制定日：2026年9月17日</p>
            <p class="mt-3">
              参考：
              <a
                href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyoukintou/seisaku06/"
                target="_blank"
                rel="noopener noreferrer"
                class="font-bold text-[#3F6FBA] underline decoration-[#0078B8]/40 underline-offset-4 hover:text-[#0078B8]"
              >厚生労働省「職場におけるハラスメントの防止のために」</a>
            </p>
          </div>
        </div>
      </article>

      <div class="mt-12 flex flex-wrap justify-center gap-4">
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-3 rounded-full bg-[#002058] px-8 py-4 text-xs font-bold tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-[#0078B8] hover:text-[#002058]"
        >
          お問い合わせ
          <i class="fa-solid fa-arrow-right-long text-[10px]" aria-hidden="true"></i>
        </NuxtLink>
        <NuxtLink
          to="/"
          class="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-8 py-4 text-xs font-bold tracking-wider text-[#002058] transition-all hover:-translate-y-0.5 hover:border-[#0078B8]"
        >
          <i class="fa-solid fa-arrow-left-long text-[10px]" aria-hidden="true"></i>
          ホームへ戻る
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const description =
  "汐猫みおの活動におけるカスタマーハラスメント、誹謗中傷その他の迷惑行為への対応方針です。";

useSeoMeta({
  title: "カスタマーハラスメント等への対応方針 | 汐猫みお Official Site",
  description,
  ogTitle: "カスタマーハラスメント等への対応方針 | 汐猫みお Official Site",
  ogDescription: description,
  ogImage: "https://skyfelis.jp/ogp-v4.jpg",
  ogType: "article",
  twitterCard: "summary_large_image",
  twitterSite: "@skyfelis",
  twitterCreator: "@skyfelis",
});
</script>
