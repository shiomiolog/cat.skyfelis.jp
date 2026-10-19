<template>
  <section id="videos" class="videos-section" :class="{ 'contents-motion-paused': motionPaused }" aria-labelledby="videos-title">
    <div class="section-container">
      <div class="section-heading"><div><p class="eyebrow">LEARN &amp; PLAY</p><h2 id="videos-title">Contents <span>動画・配信</span></h2></div><a class="text-link" href="https://youtube.com/@skyfelis" target="_blank" rel="noopener noreferrer">YouTubeチャンネルへ <span aria-hidden="true">↗</span></a></div>
      <a class="channel-feature" href="https://youtube.com/@skyfelis" target="_blank" rel="noopener noreferrer">
        <div class="channel-art" aria-hidden="true"><span class="channel-play">▶</span><span>SHIONE MIO<br /><strong>LEARNING & GAMING</strong></span><span class="channel-star">✦</span><span class="channel-dot channel-dot-a"></span><span class="channel-dot channel-dot-b"></span></div>
        <div class="channel-copy"><p class="eyebrow">YOUTUBE</p><h3>学ぶ時間も、<br />遊ぶ時間も。</h3><p>情報学・情報セキュリティの教育動画、ゲーム実況、雑談配信。気になるテーマから、みおのチャンネルをのぞいてみてください。</p><span class="text-link">動画・配信アーカイブを見る <span aria-hidden="true">↗</span></span></div>
      </a>
      <button class="motion-control contents-motion-control" type="button" :aria-pressed="motionPaused" @click="motionPaused = !motionPaused">
        {{ motionPaused ? 'Contentsの動きを再開' : 'Contentsの動きを止める' }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const motionPaused = ref(false);
</script>

<style scoped>
.channel-art > span:not(.channel-star):not(.channel-dot) {
  position: relative;
  z-index: 1;
}
.channel-art::after {
  pointer-events: none;
}
.channel-dot {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  background: #8edbfa;
}
.channel-dot-a {
  width: 12px;
  height: 12px;
  right: 28%;
  top: 24%;
  opacity: .7;
}
.channel-dot-b {
  width: 6px;
  height: 6px;
  right: 12%;
  bottom: 22%;
  opacity: .5;
}
.contents-motion-control {
  display: block;
  margin: 16px 0 0 auto;
}
@media (prefers-reduced-motion: no-preference) {
  .channel-art::after {
    animation: contents-orbit 18s ease-in-out infinite;
  }
  .channel-star {
    animation: contents-star 7s ease-in-out infinite;
  }
  .channel-dot-a {
    animation: contents-drift 9s ease-in-out infinite;
  }
  .channel-dot-b {
    animation: contents-drift 12s ease-in-out -4s infinite reverse;
  }
  .contents-motion-paused .channel-art::after,
  .contents-motion-paused .channel-star,
  .contents-motion-paused .channel-dot {
    animation-play-state: paused;
  }
}
@keyframes contents-orbit {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-20px, 12px) scale(1.08); }
}
@keyframes contents-star {
  0%, 100% { transform: translateY(0) rotate(-6deg); opacity: .7; }
  50% { transform: translateY(-10px) rotate(8deg); opacity: 1; }
}
@keyframes contents-drift {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(12px, -16px); }
}
</style>
