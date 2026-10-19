<template>
  <div
    class="bg-[#0B0F19] min-h-screen text-white font-sans flex flex-col justify-center items-center px-6 antialiased">
    <div
      class="max-w-xl w-full bg-[#002058]/40 border border-[#0078B8]/10 rounded-[3rem] p-8 md:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.4)] space-y-8 relative overflow-hidden text-center">

      <div class="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#0078B8] to-transparent">
      </div>

      <div
        class="flex items-center justify-between text-[#0078B8] text-xs font-mono font-bold tracking-widest border-b border-white/5 pb-4 select-none">
        <span>🐾 SHIO-MIO: SYSTEM_LOG</span>
        <span>STATUS: {{ error?.statusCode || 404 }}</span>
      </div>

      <div class="space-y-4">
        <div
          class="text-6xl text-[#0078B8] drop-shadow-[0_0_15px_#0078B8] animate-bounce duration-1000 select-none my-2">
          <i class="fa-solid fa-paw"></i>
        </div>

        <h1 class="text-3xl md:text-4xl font-black tracking-wide text-white leading-tight font-sans">
          あにゃにゃ？
        </h1>

        <p class="text-xs md:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto font-medium">
          要求されたパケット（URL）のデコードに失敗しました。<br />
          猫ちゃんが配線をお手てで引っ張っちゃったか、データの隙間に隠れてしまったのかも……。
        </p>
      </div>

      <div
        class="bg-[#0B0F19]/80 rounded-2xl p-4 text-[11px] text-[#0078B8]/90 text-left font-mono leading-normal border border-white/5 overflow-x-auto select-all">
        <div>$ shione-mio --find-cat "{{ error?.url || 'unknown' }}"</div>
        <div class="text-slate-500">[INFO] Searching for lost packet...</div>
        <div class="text-amber-400/80">[WARN] Target cat (or page) hidden under the bed.</div>
        <div class="text-emerald-400">[🐾] Meow! Suggesting redirection to cozy place.</div>
      </div>

      <div class="pt-2 flex justify-center">
        <button @click="handleError"
          class="bg-white text-[#002058] hover:bg-[#0078B8] hover:text-[#002058] px-10 py-4 rounded-full font-bold text-xs tracking-widest transition-all duration-300 shadow-[0_10px_30px_rgba(0,204,255,0.15)] flex items-center gap-3 group focus:outline-none">
          <i
            class="fa-solid fa-paw text-xs transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300"></i>
          おうちに帰還する (Home)
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// エラーオブジェクトを受信
defineProps({
  error: Object,
});

// 安全にHOMEへリダイレクトしてキャッシュをクリアする関数
const handleError = () => clearError({ redirect: "/" });
</script>
