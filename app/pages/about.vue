<template>
  <div
    class="relative min-h-screen overflow-hidden bg-[#F7FAFF] px-6 pb-28 pt-36 font-sans text-slate-800 antialiased md:pt-44"
  >
    <div
      class="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-[#0078B8]/10 blur-3xl"
    ></div>
    <div
      class="pointer-events-none absolute -left-24 bottom-16 h-72 w-72 rounded-full bg-[#3F6FBA]/10 blur-3xl"
    ></div>

    <div class="relative mx-auto w-full max-w-4xl">
      <header class="mb-14 text-center select-none">
        <span
          class="mb-7 block font-mono text-xs font-bold tracking-[0.2em] text-slate-400"
        >
          // ABOUT_OPERATOR: loaded
        </span>
        <h1
          class="text-3xl font-black leading-relaxed text-[#002058] md:text-4xl"
        >
          運営者について
        </h1>
        <p class="mt-3 text-xs font-bold tracking-wider text-slate-400">
          PROFILE &amp; ACTIVITIES
        </p>
      </header>

      <section
        class="rounded-[2.5rem] border border-white bg-white/90 p-7 shadow-[0_24px_70px_rgba(58,111,181,0.11)] backdrop-blur-sm sm:p-10 md:p-14"
      >
        <div class="mx-auto max-w-2xl text-center">
          <div
            class="mx-auto mb-7 h-1 w-12 rounded-full bg-gradient-to-r from-[#0078B8] to-[#79A9F3]"
          ></div>
          <p class="text-sm font-medium leading-loose text-slate-600 md:text-base">
            汐猫みおの運営者に関するプロフィール、制作実績、研究活動などは、以下の各サイトでご覧いただけます。
          </p>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          <a
            href="https://portfolio.skyfelis.jp/"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex min-h-52 flex-col justify-between rounded-3xl border border-slate-100 bg-[#F8FCFF] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#0078B8]/40 hover:shadow-[0_18px_40px_rgba(0,204,255,0.12)]"
          >
            <div>
              <div
                class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0078B8]/10 text-[#3F6FBA] transition-colors group-hover:bg-[#0078B8] group-hover:text-[#002058]"
              >
                <i class="fa-solid fa-address-card"></i>
              </div>
              <h2 class="text-xl font-black tracking-wide text-[#002058]">
                Portfolio
              </h2>
              <p class="mt-2 text-sm font-medium text-slate-500">
                プロフィール・制作実績
              </p>
            </div>
            <div
              class="mt-7 flex items-center justify-between font-mono text-[11px] font-bold tracking-wide text-slate-400"
            >
              <span>portfolio.skyfelis.jp</span>
              <i
                class="fa-solid fa-arrow-up-right-from-square transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              ></i>
            </div>
          </a>

          <a
            href="https://mayu2664.jp/"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex min-h-52 flex-col justify-between rounded-3xl border border-slate-100 bg-[#F8FCFF] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#0078B8]/40 hover:shadow-[0_18px_40px_rgba(0,204,255,0.12)]"
          >
            <div>
              <div
                class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0078B8]/10 text-[#3F6FBA] transition-colors group-hover:bg-[#0078B8] group-hover:text-[#002058]"
              >
                <i class="fa-solid fa-flask"></i>
              </div>
              <h2 class="text-xl font-black tracking-wide text-[#002058]">
                Research &amp; Personal Site
              </h2>
              <p class="mt-2 text-sm font-medium text-slate-500">
                研究活動・個人サイト
              </p>
            </div>
            <div
              class="mt-7 flex items-center justify-between font-mono text-[11px] font-bold tracking-wide text-slate-400"
            >
              <span>mayu2664.jp</span>
              <i
                class="fa-solid fa-arrow-up-right-from-square transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              ></i>
            </div>
          </a>
        </div>
      </section>

      <div class="mt-12 text-center">
        <NuxtLink
          to="/"
          class="group inline-flex items-center gap-3 rounded-full bg-[#002058] px-10 py-4 font-mono text-xs font-bold uppercase tracking-widest text-white shadow-[0_15px_30px_rgba(8,28,68,0.1)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0078B8] hover:text-[#002058]"
        >
          <i
            class="fa-solid fa-arrow-left-long text-[10px] transition-transform duration-300 group-hover:-translate-x-1"
          ></i>
          <span>Return to Home</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "運営者について | 汐猫みお Official",
  description:
    "汐猫みおの運営者に関するプロフィール、制作実績、研究活動をご案内します。",
});
</script>
