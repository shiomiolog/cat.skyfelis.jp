<template>
  <div class="bg-white min-h-screen">
    <NuxtLayout>
      <div class="bg-[#FAFCFE]">
        <NuxtPage />
      </div>
    </NuxtLayout>
    <PeekChibi />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const canonicalUrl = computed(() => `https://skyfelis.jp${route.path}`);
useHead(() => ({
  link: [{ rel: "canonical", href: canonicalUrl.value }],
}));
useSeoMeta({
  ogUrl: () => canonicalUrl.value,
  ogSiteName: "汐猫みお Official Site",
  ogLocale: "ja_JP",
  ogImage: "https://skyfelis.jp/ogp-v4.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: "image/jpeg",
  ogImageAlt: "汐猫みお公式サイト：新ロゴと紺色スーツ姿のVersion 4アバター",
  twitterCard: "summary_large_image",
  twitterImage: "https://skyfelis.jp/ogp-v4.jpg",
  twitterImageAlt: "汐猫みお公式サイト：新ロゴと紺色スーツ姿のVersion 4アバター",
  twitterSite: "@skyfelis",
  twitterCreator: "@skyfelis",
});
</script>

<style>


body {
  font-family: "BIZ UDPGothic", sans-serif;
  letter-spacing: 0.03em;
}

p {
  font-size: 16px;
  line-height: 1.75;
  color: #334155;
}

.skip-link {
  position: fixed;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 9999;
  transform: translateY(-160%);
  border-radius: 9999px;
  background: #081c44;
  color: #ffffff;
  padding: 0.75rem 1.25rem;
  font-weight: 700;
  transition: transform 0.2s ease;
}

.skip-link:focus {
  transform: translateY(0);
}

:where(a, button, input, textarea, select, [tabindex]):focus-visible {
  outline: 3px solid #00ccff;
  outline-offset: 4px;
}

#main-content:focus {
  outline: none;
}

.cat-ear-card {
  --cat-ear-color: #dff6ff;
  position: relative;
}

.cat-ear-card::before,
.cat-ear-card::after {
  content: "";
  position: absolute;
  top: -13px;
  z-index: 0;
  width: 30px;
  height: 24px;
  background: var(--cat-ear-color);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  filter: drop-shadow(0 -1px 0 rgb(0 204 255 / 0.18));
  opacity: 0.85;
  pointer-events: none;
}

.cat-ear-card::before {
  left: 2rem;
  transform: rotate(-6deg);
}

.cat-ear-card::after {
  right: 2rem;
  transform: rotate(6deg);
}

@media (max-width: 640px) {
  .cat-ear-card::before,
  .cat-ear-card::after {
    top: -10px;
    width: 24px;
    height: 19px;
  }

  .cat-ear-card::before {
    left: 1.5rem;
  }

  .cat-ear-card::after {
    right: 1.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto !important;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>
