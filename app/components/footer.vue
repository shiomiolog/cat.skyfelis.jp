<template>
  <footer class="bg-[#0B0F19] text-white border-t border-white/10 pt-16 pb-12 font-sans antialiased">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12">
        <div class="md:col-span-5 space-y-6">
          <NuxtLink to="/" class="inline-block">
            <NuxtImg src="/images/logo-skyfelis.png" format="webp" alt="汐猫みお 公式ロゴ" loading="lazy"
              class="w-44 brightness-0 invert opacity-90 transition-opacity hover:opacity-100" />
          </NuxtLink>

          <p class="text-xs text-slate-400 leading-relaxed tracking-wide max-w-sm">
            本業である研究活動の傍ら、プログラミングやセキュリティ、<br />大好きなゲームや旅行のログを気ままに発信する、青い世界の猫 Virtual YouTuber「汐猫みお」の公式ポータルサイトです。
          </p>

          <div class="space-y-2.5 pt-2">
            <a v-for="item in socialNavigation" :key="item.href" :href="item.href" target="_blank" rel="noopener noreferrer"
              class="flex items-center gap-2.5 text-xs text-slate-400 hover:text-[#00CCFF] transition-colors">
              <i :class="item.icon" class="text-sm w-4 text-center" aria-hidden="true"></i>
              <span class="font-bold tracking-wider">{{ item.label }} / @skyfelis</span>
              <span class="sr-only">（新しいタブ）</span>
            </a>
          </div>
        </div>

        <nav class="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 md:pl-8" aria-label="フッターナビゲーション">
          <div v-for="group in footerNavigation" :key="group.label" class="space-y-4">
            <h2 class="text-xs font-mono font-bold tracking-[0.2em] text-[#00CCFF] uppercase">
              // {{ group.label }}
            </h2>
            <ul class="space-y-3 text-sm font-medium text-slate-300">
              <li v-for="item in group.links" :key="item.to">
                <NuxtLink :to="item.to" :title="item.description"
                  :target="item.to.startsWith('https://') ? '_blank' : undefined"
                  :rel="item.to.startsWith('https://') ? 'noopener noreferrer' : undefined"
                  class="hover:text-white transition-colors">
                  {{ item.label }}<span v-if="item.to.startsWith('https://')" aria-hidden="true"> ↗</span>
                  <span v-if="item.to.startsWith('https://')" class="sr-only">（新しいタブ）</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div
        class="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 select-none">
        <div
          class="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2 text-xs font-bold text-slate-400">
          <NuxtLink to="/privacy" class="hover:text-white transition-colors tracking-wider">
            プライバシーポリシー
          </NuxtLink>

          <span class="hidden text-white/10 sm:inline">|</span>

          <NuxtLink to="/customer-harassment" class="hover:text-white transition-colors tracking-wider">
            カスタマーハラスメント等への対応方針
          </NuxtLink>

        </div>

        <div class="text-xs font-mono text-slate-500 tracking-wider">
          &copy; 2026 Shione Mio
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { footerNavigation, socialNavigation } from "~/utils/navigation";
</script>
