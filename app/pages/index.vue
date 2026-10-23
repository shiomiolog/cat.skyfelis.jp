<template>
  <div ref="home" class="brand-home">
    <SectionsHero />
    <SectionsNews />
    <SectionsVideos />
    <SectionsProfileSection />
    <SectionsFanKit />
    <SectionsSocialsSection />
    <SectionsModelSpec />
    <SectionsGoods />
    <SectionsBusinessGuidance />
    <SectionsGuidelinesSection />
    <SectionsContactSection />
  </div>
</template>

<script setup lang="ts">
const home = ref<HTMLElement | null>(null);
let revealObserver: IntersectionObserver | undefined;
onMounted(() => {
  if (!home.value || !('IntersectionObserver' in window)) return;
  revealObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-arrived');
        revealObserver?.unobserve(entry.target);
      }
    }
  }, { threshold: 0.08 });
  home.value.querySelectorAll('section:not(.brand-hero)').forEach(section => revealObserver?.observe(section));
});
onBeforeUnmount(() => revealObserver?.disconnect());

useSeoMeta({
  title: "汐猫みお Official Site",
  ogTitle: "汐猫みお Official Site",
  description:
    "情報セキュリティと情報法を学びながら、プログラミング、ゲーム、旅行などの話題を気ままに発信する、青い世界の猫Virtual YouTuber「汐猫みお」の公式サイトです。",
  ogDescription:
    "情報セキュリティと情報法を学びながら、プログラミング、ゲーム、旅行などの話題を気ままに発信する、青い世界の猫 Virtual YouTuber「汐猫みお」の公式ポータルサイトです。",
  ogImage: "https://skyfelis.jp/ogp-v4.jpg",
  twitterCard: "summary_large_image",
  twitterSite: "@skyfelis",
  twitterCreator: "@skyfelis",
});
</script>
