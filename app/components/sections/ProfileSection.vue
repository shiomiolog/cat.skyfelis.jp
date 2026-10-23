<template>
  <section id="profile" class="py-12 md:py-20 px-6 relative z-45">
    <div class="max-w-6xl mx-auto">
      <div class="mb-16 flex flex-col items-start select-none">
        <div class="w-12 h-1 bg-gradient-to-r from-[#0078B8] to-[#002058] rounded-full mb-4"></div>

        <h2 class="text-4xl md:text-5xl font-sans font-bold tracking-wider text-[#002058] leading-none">
          Profile
        </h2>

        <p class="text-xs font-sans font-bold text-slate-500 tracking-widest pt-3">
          プロフィール
        </p>
      </div>

      <div
        class="cat-ear-card bg-white rounded-2xl border border-slate-100 p-8 md:p-12 lg:p-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-7 space-y-8">
            <div class="text-center lg:text-left">
              <h3 class="text-3xl md:text-4xl font-sans font-black text-[#002058] tracking-wide mb-1">
                汐猫 みお
              </h3>
              <p class="text-xs font-mono font-bold text-[#0078B8] tracking-widest uppercase">
                Shione Mio
              </p>
            </div>

            <p class="text-slate-600 leading-relaxed text-sm text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              情報セキュリティと情報法を学びながら活動しているVirtual YouTuber。<br />
              インターネットの世界を、かわいらしい肉球でペタペタ歩いている。<br />
              技術と法律の両面から、セキュリティやプライバシーに関する話題を発信することも。<br />
              おいしいものと、かわいいものと、猫が大好き。
            </p>

            <div class="pt-4 border-t border-slate-100 space-y-1">
              <div v-for="item in profileItems" :key="item.label"
                class="flex py-3 border-b border-slate-100 text-sm items-baseline">
                <div class="w-24 md:w-32 text-slate-500 font-mono text-xs font-bold uppercase tracking-wider">
                  {{ item.label }}
                </div>
                <div class="flex-1 text-[#002058] font-sans font-semibold pl-4" v-html="item.value"></div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[520px]">
            <div
              class="absolute w-[280px] h-[280px] md:w-[320px] md:h-[320px] bg-[#0078B8]/10 rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            </div>

            <div class="w-full h-[440px] flex items-center justify-center overflow-hidden mb-6">
              <NuxtImg :src="activeImage" format="webp" quality="82" width="720" height="1080" loading="lazy"
                decoding="async" :alt="`汐猫みお ${activeLabel}`"
                class="max-h-full max-w-full object-contain transition-all duration-300" />
            </div>

            <div v-if="assetList.length > 1" class="flex gap-3 justify-center items-center">
              <button v-for="img in assetList" :key="img.src" type="button" @click="activeImage = img.src"
                class="w-12 h-12 rounded-full overflow-hidden border-2 bg-white transition-all shadow-sm relative group"
                :aria-label="`${img.label}の画像を表示`" :aria-pressed="activeImage === img.src"
                :class="activeImage === img.src
                  ? 'border-[#0078B8] scale-110 shadow-md ring-2 ring-[#0078B8]/20'
                  : 'border-slate-200 opacity-60 hover:opacity-100'
                  " :title="img.label">
                <NuxtImg :src="img.src" format="webp" quality="72" width="96" height="96" alt=""
                  class="w-full h-full object-cover object-top" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const activeImage = ref("/images/hero-v4.png");

const assetList = [
  { src: "/images/hero-v4.png", label: "Version 4・スーツ" },
  { src: "/images/profile-relax-v4.png", label: "リラックス" },
  { src: "/images/profile-close-v4.png", label: "アップ" },
];

const activeLabel = computed(
  () => assetList.find((image) => image.src === activeImage.value)?.label ?? "プロフィール画像",
);

const profileItems = [
  {
    label: "年齢",
    value: "20代？",
  },
  {
    label: "誕生日",
    value: "5月14日（syslog・ログ集約の日）",
  },
  {
    label: "身長",
    value: "173cm",
  },
  {
    label: "活動分野",
    value:
      "情報セキュリティ、情報法、プログラミング、配信・動画制作",
  },
  {
    label: "関心分野",
    value:
      "セキュリティ法制、プライバシー、AI、システム監査",
  },
  {
    label: "好きな言語",
    value: "Rust、C++、Python、TypeScript",
  },
  {
    label: "資格",
    value:
      "ITパスポート試験、情報セキュリティマネジメント試験",
  },
  {
    label: "好きなもの",
    value:
      "Linuxカーネル、技術書・専門書、猫、紅茶、ミルクレープ、かわいいもの",
  },
  {
    label: "苦手なもの",
    value:
      "勝手に再起動するWindows、セロリ、うなぎ、虫全般",
  },
  {
    label: "趣味",
    value:
      "プログラミング、読書、自作キーボード、旅行、裁判傍聴<br />博物館・美術館・動物園巡り、おいしいものを食べること",
  },
];
</script>
