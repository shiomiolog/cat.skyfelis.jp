<template>
  <div class="bg-white min-h-screen pt-44 pb-24 px-6 text-slate-800 animate-fade-in">
    <div class="max-w-5xl mx-auto">
      <div class="mb-12 flex justify-start">
        <NuxtLink to="/"
          class="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-slate-400 hover:text-[#0078B8] transition-colors group">
          <i
            class="fa-solid fa-arrow-left text-[10px] transition-transform duration-300 group-hover:-translate-x-1"></i>
          RETURN_TO_TOP
        </NuxtLink>
      </div>

      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-sans font-black text-[#002058] tracking-[0.2em] uppercase">
          News
        </h1>
        <p class="text-xs font-sans font-bold text-slate-500 tracking-widest mt-3">
          最新情報
        </p>
      </div>

      <div class="border-t border-slate-300">
        <NuxtLink v-for="item in allNews" :key="item.path" :to="item.path"
          class="border-b border-slate-200 py-6 px-2 flex items-center justify-between gap-8 hover:bg-slate-50/60 transition-all duration-200 group block">
          <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-16 flex-1">
            <span
              class="font-mono text-sm md:text-base font-bold text-slate-500 tracking-wider min-w-[110px] select-none">
              {{ item.year }}.{{ item.date }}
            </span>
            <h2
              class="text-sm md:text-base font-sans font-bold text-slate-800 group-hover:text-[#0078B8] transition-colors flex-1 leading-relaxed">
              {{ item.title }}
            </h2>
          </div>
          <div
            class="text-slate-400 group-hover:text-[#0078B8] transition-all duration-300 group-hover:translate-x-1 pr-2">
            <i class="fa-solid fa-arrow-right-long text-sm"></i>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const description = "汐猫みおの活動、配信、3Dモデルなどに関する最新情報を掲載しています。";

useSeoMeta({
  title: "最新情報 | 汐猫みお Official Site",
  description,
  ogTitle: "最新情報 | 汐猫みお Official Site",
  ogDescription: description,
  ogImage: "/ogp-image.png",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterSite: "@skyfelis",
  twitterCreator: "@skyfelis",
});

const router = useRouter();

// ★【リファクタリング】スキャン対象を '/news/posts/' 以下に限定するロジックに変更
// app/pages/news/index.vue (または該当のインデックスファイル)
const allNews = router
  .getRoutes()
  .filter((r) => r.path.startsWith("/news/posts/") && r.meta.sortKey)
  .map((r) => ({
    path: r.path,
    title: r.meta.title as string,
    year: r.meta.year as string,
    date: r.meta.date as string,
    sortKey: r.meta.sortKey as string,
  }))
  .sort((a, b) => {
    // まずは日付（sortKey）の降順で比較
    const compareSortKey = b.sortKey.localeCompare(a.sortKey);
    if (compareSortKey !== 0) return compareSortKey;

    // ★【回路拡張】日付が同じなら、ファイル名(path)の文字列降順で比較
    // これにより、末尾が "_2" のものが "_1" より先（最新）に来るようになります
    return b.path.localeCompare(a.path);
  });
</script>
