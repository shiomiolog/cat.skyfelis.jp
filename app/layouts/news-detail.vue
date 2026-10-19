<template>
  <div
    class="bg-white min-h-screen text-slate-800 animate-fade-in font-sans antialiased flex flex-col"
  >
    <a href="#main-content" class="skip-link">本文へスキップ</a>
    <Header />

    <main id="main-content" tabindex="-1"
      class="max-w-[1440px] mx-auto pt-44 pb-32 px-6 md:px-12 w-full flex flex-col items-center flex-1"
    >
      <div class="w-full max-w-4xl">
        <div class="text-center mb-8 select-none">
          <span
            class="text-xs font-mono font-bold tracking-[0.2em] text-slate-400 block"
            >// NEWS_LOG</span
          >
        </div>

        <div class="flex items-center gap-3 text-sm font-mono mb-5">
          <span class="text-[#002058]/50 font-bold select-none">
            {{ route.meta.year }}/{{
              String(route.meta.date ?? "").replace(".", "/")
            }}
          </span>
          <span
            class="bg-gradient-to-r from-[#0078B8] to-[#002058] text-white text-[10px] font-sans font-bold px-3 py-0.5 rounded-full shadow-sm"
          >
            {{ route.meta.category || "お知らせ" }}
          </span>
        </div>

        <h1
          class="text-xl md:text-2xl font-sans font-black text-[#002058] leading-relaxed pb-6 border-b border-slate-200"
        >
          {{ route.meta.title }}
        </h1>

        <div
          class="py-10 text-sm md:text-base text-slate-600 leading-loose space-y-6 font-medium border-b border-slate-100"
        >
          <slot />
        </div>

        <div class="mt-16 flex justify-center">
          <NuxtLink
            to="/news"
            class="bg-gradient-to-r from-[#0078B8]/90 to-[#002058]/90 hover:from-[#0078B8] hover:to-[#002058] text-white px-12 py-3.5 rounded-2xl font-sans font-bold text-xs tracking-widest transition-all duration-300 shadow-[0_10px_25px_rgba(8,28,68,0.12)] hover:shadow-[0_15px_30px_rgba(8,28,68,0.22)] hover:-translate-y-0.5 flex items-center justify-between min-w-[240px] group"
          >
            <i
              class="fa-solid fa-paw text-sm opacity-80 group-hover:rotate-[15deg] transition-transform"
            ></i>
            <span>一覧へ戻る</span>
            <i class="fa-solid fa-code text-xs opacity-80"></i>
          </NuxtLink>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
