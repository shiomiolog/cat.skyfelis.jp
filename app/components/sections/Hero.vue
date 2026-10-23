<template>
  <section class="brand-hero" :class="{ 'motion-paused': motionPaused }" aria-labelledby="hero-title">
    <div class="hero-orbit" aria-hidden="true"></div>
    <span class="hero-star" aria-hidden="true">✦</span>
    <div class="hero-inner">
      <div class="hero-copy">
        <p class="eyebrow">SHIONE MIO · OFFICIAL WEBSITE</p>
        <h1 id="hero-title"><img src="/images/logo-skyfelis.png" width="2172" height="724" alt="汐猫みお / SHIONE MIO / @skyfelis" fetchpriority="high" /></h1>
        <p class="hero-tagline">知るって、たのしい。<br />遊ぶって、おもしろい。</p>
        <p class="hero-description">情報学・情報セキュリティから、ゲームと日常まで。<br class="desktop-break" />学びも遊びも一緒に楽しむ、青い世界の猫。</p>
        <p class="hero-role">VTUBER / STREAMER / YOUTUBER</p>
        <div class="hero-actions">
          <a class="brand-button" href="https://youtube.com/@skyfelis" target="_blank" rel="noopener noreferrer">YouTubeを見る <span aria-hidden="true">↗</span></a>
          <a class="hero-social" href="https://x.com/skyfelis" target="_blank" rel="noopener noreferrer" aria-label="Xで活動情報を見る（新しいタブ）">X <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div class="hero-visual">
        <span class="hero-visual-label" aria-hidden="true">HELLO, WORLD.</span>
        <picture class="hero-character">
          <img src="/images/hero-v4.png" alt="紺色のスーツ姿で手を振る汐猫みお Version 4" width="1024" height="1536" fetchpriority="high" decoding="async" />
        </picture>
        <span class="hero-signature" aria-hidden="true">SHIONE MIO <span>01</span></span>
      </div>
    </div>
    <div class="hero-bottom"><span>LEARN. PLAY. CONNECT.</span><button class="motion-control" type="button" @click="motionPaused = !motionPaused" :aria-pressed="motionPaused">{{ motionPaused ? "動きを再開" : "動きを止める" }}</button><a href="#activity">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
  </section>
</template>

<script setup lang="ts">
const motionPaused = ref(false);
</script>
