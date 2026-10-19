<template>
  <section
    id="guidelines"

    class="bg-white py-24 px-6 relative z-10 border-t border-slate-100 transition-all duration-[1000ms] ease-out transform font-sans antialiased text-slate-800"
  >
    <div class="max-w-6xl mx-auto">
      <div class="mb-16 flex flex-col items-start select-none">
        <div
          class="w-12 h-1 bg-gradient-to-r from-[#0078B8] to-[#002058] rounded-full mb-4"
        ></div>
        <h2
          class="text-4xl md:text-5xl font-sans font-bold tracking-wider text-[#002058] leading-none"
        >
          Guidelines
        </h2>
        <p
          class="text-xs font-sans font-bold text-slate-500 tracking-widest pt-3"
        >
          ガイドライン・規約
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          class="cat-ear-card bg-slate-50/60 border border-slate-100 p-8 rounded-2xl flex flex-col justify-between items-start space-y-6 hover:border-[#0078B8]/20 transition-all group"
        >
          <div class="space-y-3">
            <h3
              class="text-lg font-black text-[#002058] flex items-center gap-2"
            >
              <i class="fa-solid fa-palette text-[#0078B8] text-sm"></i>
              二次創作ガイドライン
            </h3>
            <p
              class="text-xs md:text-sm text-slate-500 leading-loose font-medium"
            >
              ファンアートの投稿や同人活動、切り抜き動画の作成など、汐猫みおの二次創作活動を楽しんでいただくための共通ルールとお願いです。
            </p>
          </div>
          <NuxtLink
            to="/guideline"
            class="inline-flex items-center gap-2 text-xs font-bold text-[#002058] hover:text-[#0078B8] transition-colors tracking-wider font-sans group-hover:translate-x-1 transition-transform"
          >
            詳しく見る
            <i class="fa-solid fa-arrow-right-long text-[10px]"></i>
          </NuxtLink>
        </div>

        <div
          class="cat-ear-card bg-slate-50/60 border border-slate-100 p-8 rounded-2xl flex flex-col justify-between items-start space-y-6 hover:border-[#0078B8]/20 transition-all group"
        >
          <div class="space-y-3">
            <h3
              class="text-lg font-black text-[#002058] flex items-center gap-2"
            >
              <i class="fa-solid fa-shield-halved text-[#0078B8] text-sm"></i>
              プライバシーポリシー
            </h3>
            <p
              class="text-xs md:text-sm text-slate-500 leading-loose font-medium"
            >
              公式ポータルサイトおよび各種お問い合わせフォーム等における、個人情報の取り扱いに関するポリシーです。
            </p>
          </div>
          <NuxtLink
            to="/privacy"
            class="inline-flex items-center gap-2 text-xs font-bold text-[#002058] hover:text-[#0078B8] transition-colors tracking-wider font-sans group-hover:translate-x-1 transition-transform"
          >
            詳しく見る
            <i class="fa-solid fa-arrow-right-long text-[10px]"></i>
          </NuxtLink>
        </div>

        <div
          class="cat-ear-card bg-gradient-to-br from-[#F3FBFF] to-[#F7F8FF] border border-[#0078B8]/15 p-8 rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:col-span-2 hover:border-[#0078B8]/30 transition-all group"
        >
          <div class="space-y-3 max-w-3xl">
            <h3 class="text-lg font-black text-[#002058] flex items-center gap-2">
              <i class="fa-solid fa-user-shield text-[#0078B8] text-sm" aria-hidden="true"></i>
              カスタマーハラスメント等への対応方針
            </h3>
            <p class="text-xs md:text-sm text-slate-500 leading-loose font-medium">
              誹謗中傷、過度な要求、つきまといその他の迷惑行為から、安全で安心できる活動・交流環境を守るための考え方と対応を掲載しています。
            </p>
          </div>
          <NuxtLink
            to="/customer-harassment"
            class="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#002058] px-6 py-3 text-xs font-bold text-white hover:bg-[#0078B8] hover:text-[#002058] transition-colors tracking-wider font-sans"
          >
            方針を見る
            <i class="fa-solid fa-arrow-right-long text-[10px]" aria-hidden="true"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
