<template>
  <section id="activity"
    class="bg-[#002058] py-24 px-6 transition-all duration-[1000ms] ease-out transform font-sans antialiased relative z-35">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        <div class="lg:col-span-4 flex flex-col items-start select-none">
          <div class="w-12 h-1 bg-gradient-to-r from-[#0078B8] to-white/10 rounded-full mb-4"></div>

          <h2 class="text-4xl md:text-5xl font-sans font-bold tracking-wider text-white leading-none">
            News
          </h2>

          <p class="text-xs font-sans font-bold text-[#0078B8] tracking-widest pt-3">
            最新情報
          </p>
        </div>

        <div class="lg:col-span-8 divide-y divide-slate-700/50">
          <NuxtLink v-for="item in latestNews" :key="item.id" :to="item.path"
            class="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12 group cursor-pointer block">
            <div class="flex items-baseline font-mono text-white select-none min-w-[140px]">
              <span class="text-xs opacity-60 font-medium mr-1">{{ item.year }}.</span>
              <span class="text-2xl md:text-3xl font-black tracking-tight">{{
                item.date
                }}</span>
            </div>

            <div class="flex-1">
              <h3
                class="text-sm md:text-base font-sans font-medium text-slate-200 group-hover:text-[#0078B8] transition-colors duration-300 leading-relaxed">
                {{ item.title }}
              </h3>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="mt-16 flex justify-center">
        <NuxtLink to="/news"
          class="bg-white text-[#002058] hover:bg-[#0078B8] hover:text-[#002058] px-10 py-3.5 rounded-full font-sans font-bold text-xs tracking-widest transition-all duration-300 shadow-lg flex items-center gap-3 group">
          最新情報一覧
          <i
            class="fa-solid fa-arrow-right text-[10px] transition-transform duration-300 group-hover:translate-x-1"></i>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

import { useRouter } from "vue-router";

const router = useRouter();

// app/components/News.vue (または該当のコンポーネントファイル)
const latestNews = router
  .getRoutes()
  .filter((r) => r.path.startsWith("/news/posts/") && r.meta.sortKey)
  .map((r) => ({
    id: r.path,
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

    // ★【回路拡張】同じ日付の場合はファイル名の降順で決着をつける
    return b.path.localeCompare(a.path);
  })
  .slice(0, 2); // 最新の2件を安全にスライス


</script>
