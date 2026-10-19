<template>
  <section
    id="guidance"

    class="bg-[#002058] py-24 px-6 relative z-10 transition-all duration-[1000ms] ease-out transform font-sans antialiased text-white"
  >
    <div class="max-w-6xl mx-auto">
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start border-b border-white/10 pb-12"
      >
        <div class="lg:col-span-5 flex flex-col items-start select-none">
          <div class="w-12 h-1 bg-gradient-to-r from-[#0078B8] to-white/10 rounded-full mb-4"></div>

          <h2
            class="text-4xl md:text-5xl font-sans font-bold tracking-wider text-white leading-none"
          >
            Guidance
          </h2>

          <p
            class="text-xs font-sans font-bold text-[#0078B8] tracking-widest pt-3"
          >
            ご依頼について
          </p>
        </div>

        <div class="lg:col-span-7 lg:pt-8">
          <p
            class="text-sm md:text-base text-slate-100 font-medium leading-loose"
          >
            各種技術系カンファレンスへの登壇やイベント出演、プログラム開発・セキュリティ・AI活用などの技術相談、ガジェット等のPR案件といったご依頼を承っております。お仕事のご相談は、下部にあるお問い合わせフォームより必要事項を明記の上、お気軽にお送りください。
          </p>
        </div>
      </div>

      <div
        class="mt-12 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 space-y-6"
      >
        <h3 class="text-sm font-bold text-[#0078B8] font-mono tracking-wider">
          // BUSINESS_LOG: CHECK_LIST
        </h3>

        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed font-medium"
        >
          <div class="space-y-3">
            <p
              class="text-white font-bold flex items-center gap-2 text-sm md:text-base"
            >
              <i class="fa-solid fa-circle-check text-[#0078B8] text-xs"></i>
              受付している主なジャンル
            </p>
            <ul class="space-y-2.5 pl-5 list-disc text-sm text-slate-300/90">
              <li>各種カンファレンス・イベント・生放送への出演相談</li>
              <li>プログラム作成、セキュリティ相談、AI生成支援等</li>
              <li>ゲームやガジェットなどのタイアップ・PR案件</li>
            </ul>
          </div>

          <div class="space-y-3">
            <p
              class="text-white font-bold flex items-center gap-2 text-sm md:text-base"
            >
              <i
                class="fa-solid fa-triangle-exclamation text-[#0078B8] text-xs"
              ></i>
              検討時のお願い
            </p>
            <ul class="space-y-2.5 pl-5 list-disc text-sm text-slate-300/90">
              <li>ご予算感、スケジュール（納期）を必ず明記してください。</li>
              <li>現在、個人の方からの有償依頼は受け付けておりません。</li>
              <li>ファンレターやメッセージへの個別返信は行っておりません。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
