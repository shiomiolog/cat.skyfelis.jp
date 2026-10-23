<template>
  <div
    class="relative w-full min-h-screen bg-slate-50/30 overflow-hidden font-sans"
  >
    <div
      class="fixed top-0 right-0 w-[500px] h-[500px] bg-[#0078B8]/10 blur-[120px] rounded-full pointer-events-none z-0"
    ></div>
    <div
      class="fixed bottom-0 left-0 w-[500px] h-[500px] bg-[#002058]/5 blur-[120px] rounded-full pointer-events-none z-0"
    ></div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
      <header class="mb-16 flex flex-col items-start select-none">
        <div class="w-10 h-[2px] bg-[#002058] mb-4"></div>
        <h1
          class="text-4xl md:text-5xl font-sans font-bold tracking-widest uppercase leading-none text-[#002058]"
        >
          Contact
        </h1>
        <p
          class="text-xs font-sans font-bold text-slate-400 tracking-widest pt-3"
        >
          お問い合わせ
        </p>
      </header>

      <div class="mb-12 space-y-4 max-w-2xl mx-auto text-center">
        <p
          class="text-[15px] text-slate-600 font-medium leading-loose tracking-wide"
        >
          お仕事のご依頼、コラボレーションのご相談などは下記のフォームよりお送りください。
        </p>
        <p class="text-xs font-sans font-bold text-slate-400 tracking-widest">
          ※送信前に
          <NuxtLink
            to="/privacy"
            class="text-[#0078B8] hover:text-[#002058] underline underline-offset-4 font-bold transition-colors"
            >プライバシーポリシー</NuxtLink
          >
          をご確認ください。
        </p>
      </div>

      <div
        class="bg-white border border-slate-100 rounded-[2.5rem] shadow-xl shadow-blue-900/5 overflow-hidden backdrop-blur-md max-w-4xl mx-auto"
      >
        <div class="relative w-full flex justify-center py-8 px-4">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd7lp04oQ4OMzpNU8ahxrolROdLhPpqtr8JChwwp_MPbCge7g/viewform?embedded=true"
            title="汐猫みお お問い合わせフォーム"
            width="100%"
            height="1600"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            class="max-w-[640px] rounded-xl"
          >
            読み込んでいます…
          </iframe>
        </div>
      </div>

      <div class="mt-16 text-center">
        <NuxtLink
          to="/"
          class="group inline-flex items-center gap-3 bg-[#002058] text-white hover:bg-[#0078B8] hover:text-[#002058] px-12 py-4 rounded-full font-mono font-bold text-xs tracking-widest transition-all duration-300 shadow-[0_15px_30px_rgba(8,28,68,0.1)] hover:shadow-[0_20px_40px_rgba(0,204,255,0.2)] hover:-translate-y-0.5 uppercase"
        >
          <span>Return to Home</span>
          <i
            class="fa-solid fa-arrow-right-long text-[10px] transition-transform duration-300 group-hover:translate-x-1.5"
          ></i>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const description =
  "汐猫みおへのお仕事のご依頼、コラボレーションのご相談、その他お問い合わせを受け付けています。";

useSeoMeta({
  title: "お問い合わせ | 汐猫みお Official Site",
  description,
  ogTitle: "お問い合わせ | 汐猫みお Official Site",
  ogDescription: description,
  ogImage: "https://skyfelis.jp/ogp-v4.jpg",
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterSite: "@skyfelis",
  twitterCreator: "@skyfelis",
});
</script>
