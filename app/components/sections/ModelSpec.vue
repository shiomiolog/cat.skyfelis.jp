<template>
  <section id="model-spec"
    class="bg-white py-24 px-6 relative z-20 border-t border-slate-100 transition-all duration-[1000ms] ease-out transform font-sans antialiased">

    <div class="max-w-6xl mx-auto relative z-10">
      <div class="mb-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-end relative z-30 select-none">
        <div class="md:col-span-7 flex flex-col items-start">
          <div class="w-12 h-1 bg-gradient-to-r from-[#0078B8] to-[#002058] rounded-full mb-4"></div>

          <h2 class="text-4xl md:text-5xl font-sans font-bold tracking-wider text-[#002058] leading-none">
            3D Model
          </h2>

          <p class="text-xs font-sans font-bold text-slate-500 tracking-widest pt-3">
            3Dモデル紹介・スペック
          </p>
        </div>

        <div class="md:col-span-5 flex flex-wrap items-center justify-start md:justify-end gap-4">
          <div
            class="bg-[#002058] text-white font-mono text-[11px] font-bold px-4 py-2 rounded-full shadow-lg border-2 border-white flex items-center gap-1.5 select-none">
            <i class="fa-solid fa-heart text-[#0078B8]" aria-hidden="true"></i> Version: 2.0.1
          </div>

          <div
            class="flex items-center gap-2 bg-slate-50 p-1.5 rounded-full border border-slate-100 shadow-inner relative z-10"
            role="group" aria-label="三面図の表示切り替え">
            <button type="button" @click="activeTab = 'illustration'"
              :aria-pressed="activeTab === 'illustration'" aria-controls="model-spec-panel"
              class="px-6 py-2.5 rounded-full text-sm font-black flex items-center gap-2 transition-all duration-300"
              :class="activeTab === 'illustration'
                ? 'bg-gradient-to-r from-[#0078B8] to-[#002058] text-white shadow-md'
                : 'text-slate-500 hover:text-[#002058]'
                ">
              <i class="fa-solid fa-pen-nib text-xs opacity-80" aria-hidden="true"></i> イラスト版
            </button>
            <button type="button" @click="activeTab = 'model'"
              :aria-pressed="activeTab === 'model'" aria-controls="model-spec-panel"
              class="px-6 py-2.5 rounded-full text-sm font-black flex items-center gap-2 transition-all duration-300"
              :class="activeTab === 'model'
                ? 'bg-gradient-to-r from-[#0078B8] to-[#002058] text-white shadow-md'
                : 'text-slate-500 hover:text-[#002058]'
                ">
              <i class="fa-solid fa-cube text-xs opacity-80" aria-hidden="true"></i> 3Dモデル版
            </button>
          </div>
        </div>
      </div>

      <div
        class="mt-12 mb-16 relative bg-white rounded-2xl border-4 border-dashed border-slate-100 group overflow-hidden">
        <div id="model-spec-panel" class="w-full grid grid-cols-1 grid-rows-1 p-0 relative z-10"
          role="region" aria-live="polite" :aria-label="activeTab === 'illustration' ? 'イラスト版の三面図' : '3Dモデル版の三面図'">
          <transition name="fade">
            <NuxtImg v-if="activeTab === 'illustration'" key="illustration" src="/images/blueprint_illustration.png"
              format="webp" alt="汐猫みお 三面図（イラスト版）"
              class="col-start-1 row-start-1 w-full h-auto rounded-[2rem] transition-transform duration-500 group-hover:scale-[1.01]"
              @error="
                (e: any) =>
                (e.target.src =
                  'https://placehold.co/1200x600/FAFCFE/00CCFF?text=私のかわいい三面図（イラスト版）！')
              " />
            <NuxtImg v-else key="model" src="/images/blueprint_model.png" format="webp" alt="汐猫みお 三面図（3Dモデル版）"
              class="col-start-1 row-start-1 w-full h-auto rounded-[2rem] transition-all duration-500 group-hover:scale-[1.01]"
              @error="
                (e: any) =>
                (e.target.src =
                  'https://placehold.co/1200x600/FAFCFE/00CCFF?text=私のかわいい三面図（3Dモデル版）！')
              " />
          </transition>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative z-20">
        <div
          class="cat-ear-card bg-white p-9 rounded-2xl border border-slate-100 space-y-7">
          <div class="flex items-center gap-3 border-b border-slate-100 pb-5">
            <span class="text-xl font-black text-[#002058] flex items-center gap-2.5">
              <i class="fa-solid fa-sparkles text-[#0078B8]"></i> スペック
            </span>
            <span class="text-xs font-bold text-slate-500">ベース: VRoid Studio</span>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-1">
              <span class="text-xs font-extrabold text-slate-500">フォーマット</span>
              <span class="text-base font-bold text-[#002058] block">VRM 1.0</span>
            </div>
            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-1">
              <span class="text-xs font-extrabold text-slate-500">ポリゴン数</span>
              <span class="text-base font-bold text-[#002058] block">55,818 tris</span>
            </div>
            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-1">
              <span class="text-xs font-extrabold text-slate-500">マテリアル数</span>
              <span class="text-base font-bold text-[#002058] block">8</span>
            </div>
            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-1">
              <span class="text-xs font-extrabold text-slate-500">ボーン数</span>
              <span class="text-base font-bold text-[#002058] block">123</span>
            </div>
            <div class="col-span-2 bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-1">
              <span class="text-xs font-extrabold text-slate-500">使用シェーダー</span>
              <span class="text-base font-bold text-[#002058] block">MToon (VRoid標準)</span>
            </div>
          </div>
        </div>

        <div
          class="cat-ear-card bg-white p-9 rounded-2xl border border-slate-100 space-y-7">
          <div class="border-b border-slate-100 pb-5">
            <h3 class="text-xl font-black text-[#002058] flex items-center gap-2.5">
              <i class="fa-solid fa-ribbon text-[#0078B8]"></i> 使用した素材
            </h3>
            <p class="text-xs font-bold text-slate-500 mt-1">
              BOOTHの素敵な素材たちを使わせてもらっています. 感謝！
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1.5 scrollbar-thin">
            <a v-for="asset in assets" :key="asset.item" :href="asset.url" target="_blank" rel="noopener noreferrer"
              class="flex flex-col justify-between p-4 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 hover:border-[#0078B8]/30 transition-all duration-200 group">
              <div>
                <span class="block text-[10px] font-extrabold text-slate-500 tracking-wider truncate mb-1.5">
                  <i class="fa-solid fa-store text-[8px] mr-1"></i>{{ asset.shop }}
                </span>
                <span
                  class="text-sm font-bold text-[#002058] group-hover:text-[#0078B8] transition-colors leading-snug block">
                  {{ asset.item }}
                </span>
              </div>
              <div
                class="flex justify-end items-center mt-3 text-[10px] font-bold text-slate-300 group-hover:text-[#0078B8] transition-colors gap-1.5">
                BOOTH
                <i class="fa-solid fa-up-right-from-square text-[8px]"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const activeTab = ref<"illustration" | "model">("illustration");

interface Asset {
  shop: string;
  item: string;
  url: string;
}

// ★【データパッチ】みおさん提供のリアルな使用素材クレジットデータを完全マウント
const assets: Asset[] = [
  {
    shop: "Team.Aether",
    item: "Skin Texture",
    url: "https://teamaether.booth.pm/items/1247301",
  },
  {
    shop: "しらとりこはね【とりんご】",
    item: "Hair & Face Textures",
    url: "https://shiratori.booth.pm/items/3190732",
  },
  {
    shop: "もねこ屋。",
    item: "【VRoid正式版】病みかわパーカーセットB",
    url: "https://yuzumone.booth.pm/items/4337378",
  },
  {
    shop: "VRoid基本素材-VRoid Basic Presets Store",
    item: "【VRoid】アニメ風髪テクスチャ集３",
    url: "https://vroid-tex.booth.pm/items/3010020",
  },
];

// 画面内にスクロールインした際のスムーズなアニメーション制御を復旧
</script>

<style scoped>
.scrollbar-thin::-webkit-scrollbar {
  width: 5px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #00ccff;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
