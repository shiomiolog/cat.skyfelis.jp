<script setup lang="ts">


type SocialLink = {
  name: string;
  label: string;
  description: string;
  action: string;
  href: string;
  icon: string;
  iconStyle: string;
  actionStyle: string;
  hoverStyle: string;
  external: boolean;
};



const socialLinks: SocialLink[] = [
  {
    name: "YouTube",
    label: "// MAIN STREAM",
    description:
      "生配信、技術系トーク、日々のアーカイブ、Vlog動画や商品紹介動画を公開しています。チャンネル登録してパケットの受信待機をお願いします！",
    action: "チャンネルを見る",
    href: "https://youtube.com/@skyfelis",
    icon: "fa-brands fa-youtube",
    iconStyle: "bg-red-50 text-red-500",
    actionStyle: "text-red-500",
    hoverStyle: "hover:border-red-500/20 hover:bg-red-50/[0.01]",
    external: true,
  },
  {
    name: "X (Twitter)",
    label: "// INFRA LOG",
    description:
      "日々のつぶやきや、情報通信技術・情報法に関する話題、配信スケジュール、活動のお知らせなどを発信しています。",
    action: "ポストを見る",
    href: "https://x.com/skyfelis",
    icon: "fa-brands fa-x-twitter",
    iconStyle: "bg-slate-900 text-white",
    actionStyle: "text-slate-800",
    hoverStyle: "hover:border-slate-900/20 hover:bg-slate-900/[0.01]",
    external: true,
  },
  {
    name: "GitHub",
    label: "// REPOSITORY",
    description:
      "Webサイトやツールなど、制作・開発しているソフトウェアのソースコードを公開しています。",
    action: "GitHubを見る",
    href: "https://github.com/skyfelis",
    icon: "fa-brands fa-github",
    iconStyle: "bg-slate-800 text-white",
    actionStyle: "text-[#0078B8]",
    hoverStyle: "hover:border-[#0078B8]/20 hover:bg-cyan-50/[0.01]",
    external: true,
  },
  {
    name: "Blog",
    label: "// BLOG",
    description:
      "日々の出来事や活動のお知らせ、学んだこと、イベントへの参加記録などを文章で発信しています。",
    action: "ブログを読む",
    href: "https://blog.skyfelis.jp/",
    icon: "fa-solid fa-book-open",
    iconStyle: "bg-amber-500 text-white",
    actionStyle: "text-amber-600",
    hoverStyle: "hover:border-amber-500/20 hover:bg-amber-50/[0.01]",
    external: false,
  },
];


</script>

<template>
  <section id="socials"
    class="relative z-10 bg-white px-6 py-20 font-sans antialiased transition-all duration-[1000ms] ease-out transform">
    <div class="mx-auto max-w-6xl">
      <div class="mb-12 flex flex-col items-start select-none">
        <div class="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-[#0078B8] to-[#002058]"></div>

        <h2 class="text-4xl font-bold leading-none tracking-wider text-[#002058] md:text-5xl">
          Socials &amp; Links
        </h2>

        <p class="pt-3 text-xs font-bold tracking-widest text-slate-500">
          ソーシャルメディア・関連サイト
        </p>
      </div>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <a v-for="item in socialLinks" :key="item.name" :href="item.href" :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener noreferrer' : undefined"
          class="cat-ear-card group relative flex h-full flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-6 transition-all duration-300 hover:-translate-y-1"
          :class="item.hoverStyle">
          <div class="flex items-start gap-4">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-base"
              :class="item.iconStyle">
              <i :class="item.icon" aria-hidden="true"></i>
            </div>

            <div class="min-w-0 space-y-2">
              <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <h3 class="text-base font-bold text-[#002058]">
                  {{ item.name }}
                </h3>

                <span class="font-mono text-[9px] font-bold uppercase tracking-widest text-slate-500">
                  {{ item.label }}
                </span>
              </div>

              <p class="text-xs font-medium leading-relaxed text-slate-500">
                {{ item.description }}
              </p>
            </div>
          </div>

          <span class="mt-auto inline-flex shrink-0 items-center justify-end gap-2 pt-1 text-[11px] font-bold tracking-wider"
            :class="item.actionStyle">
            {{ item.action }}

            <i class="fa-solid fa-arrow-right-long text-[10px] transition-transform group-hover:translate-x-1"
              aria-hidden="true"></i>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
