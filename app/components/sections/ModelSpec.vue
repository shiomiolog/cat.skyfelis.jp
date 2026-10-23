<template>
  <section id="model-spec"
    class="bg-white py-24 px-6 relative border-t border-slate-100 font-sans antialiased">
    <div class="max-w-6xl mx-auto">
      <div class="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div class="w-12 h-1 bg-gradient-to-r from-[#0078B8] to-[#002058] rounded-full mb-4"></div>
          <h2 class="text-4xl md:text-5xl font-bold text-[#002058] leading-none">3D Model</h2>
          <p class="text-xs text-slate-500 tracking-widest pt-3">キャラクターデザイン・3Dモデル</p>
        </div>
        <span class="bg-[#002058] text-white font-mono text-xs px-4 py-2 rounded-full">Version 4</span>
      </div>

      <p class="mb-6 text-sm text-slate-600 leading-loose">
        紺色のスーツに、猫耳と眼鏡。汐猫みおのオリジナルアバターです。
      </p>

      <div class="model-switch" role="group" aria-label="設定画と3Dモデルの表示切り替え">
        <button v-for="view in views" :key="view.id" type="button"
          :aria-pressed="activeView === view.id" aria-controls="model-spec-panel"
          :class="{ 'is-active': activeView === view.id }" @click="activeView = view.id">
          {{ view.label }}
        </button>
      </div>

      <div id="model-spec-panel" class="model-panel" role="region" :aria-label="selectedView.description">
        <Transition name="model-fade" mode="out-in">
          <NuxtImg :key="selectedView.id" :src="selectedView.src" format="webp" quality="88"
            :width="selectedView.width" :height="selectedView.height" sizes="sm:100vw lg:1152px"
            loading="lazy" decoding="async" :alt="selectedView.description"
            class="w-full h-auto" />
        </Transition>
      </div>

      <p class="mt-5 text-xs text-slate-500 leading-relaxed">キャラクター・モデル素材：オリジナル／自作</p>
    </div>
  </section>
</template>

<script setup lang="ts">
const views = [
  {
    id: 'model', label: '3Dモデル', src: '/images/model-v4-views.png', width: 1920, height: 1080,
    description: '汐猫みお Version 4：紺色のスーツを着た3Dモデルの正面・背面・左右側面',
  },
  {
    id: 'design', label: '設定画', src: '/images/model-v4-design.png', width: 1672, height: 941,
    description: '汐猫みお Version 4：猫耳・眼鏡・紺色のスーツのキャラクター設定画',
  },
] as const;
const activeView = ref<'model' | 'design'>('model');
const selectedView = computed(() => views.find(view => view.id === activeView.value) ?? views[0]);
</script>

<style scoped>
.model-switch {
  display: inline-flex;
  gap: 4px;
  padding: 5px;
  margin-bottom: 20px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--paper);
}
.model-switch button {
  min-height: 44px;
  padding: 10px 24px;
  border-radius: 999px;
  color: #526b83;
  font-size: 13px;
  font-weight: 700;
  transition: background-color .2s, color .2s;
}
.model-switch button:hover { color: var(--navy); }
.model-switch button.is-active { background: var(--navy); color: white; }
.model-panel {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: white;
  aspect-ratio: 16 / 9;
}
.model-fade-enter-active, .model-fade-leave-active { transition: opacity .18s ease; }
.model-fade-enter-from, .model-fade-leave-to { opacity: 0; }
@media (prefers-reduced-motion: reduce) {
  .model-switch button, .model-fade-enter-active, .model-fade-leave-active { transition: none; }
}
</style>
