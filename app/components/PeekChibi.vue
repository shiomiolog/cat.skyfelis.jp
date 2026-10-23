<template>
  <Transition name="chibi-peek">
    <div v-if="isReady && isEnabled && isPeeking" class="peek-chibi">
      <NuxtImg
        src="/images/chibi-v4.png"
        format="webp"
        quality="82"
        alt=""
        width="1254"
        height="1254"
        loading="lazy"
        decoding="async"
      />

      <p class="chibi-message" role="status" aria-live="polite">
        {{ currentMessage }}
      </p>
    </div>
  </Transition>

  <div class="peek-control" @mouseenter="startPeeking" @mouseleave="stopPeeking">
    <span id="peek-chibi-tooltip" class="peek-tooltip" role="tooltip">
      {{ isEnabled ? "ミニキャラをOFFにする" : "ミニキャラをONにする" }}
    </span>

    <button
      type="button"
      class="peek-toggle"
      :class="{ 'peek-toggle--off': !isEnabled }"
      :aria-label="isEnabled ? 'ミニキャラを非表示にする' : 'ミニキャラを表示する'"
      :aria-pressed="isEnabled"
      aria-describedby="peek-chibi-tooltip"
      @focus="startPeeking"
      @blur="stopPeeking"
      @click="toggleChibi"
    >
      <i class="fa-solid fa-paw" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const storageKey = "peek-chibi-enabled";
const messages = [
  "呼んだ？",
  "今日もいいログが取れそう！",
  "ちょっと休憩しよ？",
  "その操作、観測してます🐾",
  "無理せずゆっくり見ていってね",
  "エラーが出ても、だいじょうぶ！",
] as const;

const isEnabled = ref(true);
const isReady = ref(false);
const isPeeking = ref(false);
const currentMessage = ref<string>(messages[0]);
let hideTimer: ReturnType<typeof setTimeout> | null = null;

onMounted(() => {
  isEnabled.value = localStorage.getItem(storageKey) !== "false";
  isReady.value = true;
});

const toggleChibi = () => {
  clearHideTimer();
  isEnabled.value = !isEnabled.value;
  isPeeking.value = isEnabled.value;
  if (isEnabled.value) pickMessage();
  localStorage.setItem(storageKey, String(isEnabled.value));
};

const startPeeking = () => {
  clearHideTimer();
  if (!isEnabled.value || isPeeking.value) return;
  pickMessage();
  isPeeking.value = true;
};

const stopPeeking = () => {
  clearHideTimer();
  hideTimer = setTimeout(() => {
    isPeeking.value = false;
    hideTimer = null;
  }, 5000);
};

const clearHideTimer = () => {
  if (!hideTimer) return;
  clearTimeout(hideTimer);
  hideTimer = null;
};

const pickMessage = () => {
  const candidates = messages.filter((message) => message !== currentMessage.value);
  const nextMessage = candidates[Math.floor(Math.random() * candidates.length)];
  currentMessage.value = nextMessage ?? messages[0];
};

onBeforeUnmount(clearHideTimer);
</script>

<style scoped>
.peek-chibi {
  position: fixed;
  bottom: -1.25rem;
  left: clamp(0.5rem, 2vw, 1.75rem);
  z-index: 45;
  width: clamp(9rem, 15vw, 14rem);
  opacity: 1;
  pointer-events: none;
  transform: translateY(0) rotate(1deg);
  transform-origin: bottom center;
  filter: drop-shadow(0 12px 18px rgb(8 28 68 / 0.16));
}

.peek-chibi img {
  display: block;
  width: 100%;
  height: auto;
}

.chibi-message {
  position: absolute;
  top: 7%;
  left: calc(100% - 0.75rem);
  width: max-content;
  max-width: min(14rem, calc(100vw - 11rem));
  margin: 0;
  padding: 0.7rem 0.9rem;
  border: 1px solid rgb(0 204 255 / 0.25);
  border-radius: 1rem;
  background: rgb(255 255 255 / 0.96);
  color: #081c44;
  box-shadow: 0 10px 28px rgb(8 28 68 / 0.14);
  font-size: clamp(0.7rem, 1.5vw, 0.82rem);
  font-weight: 700;
  line-height: 1.55;
  letter-spacing: 0.02em;
}

.chibi-message::before {
  content: "";
  position: absolute;
  top: 1.15rem;
  left: -0.42rem;
  width: 0.75rem;
  height: 0.75rem;
  border-bottom: 1px solid rgb(0 204 255 / 0.25);
  border-left: 1px solid rgb(0 204 255 / 0.25);
  background: white;
  transform: rotate(45deg);
}

.peek-control {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  z-index: 46;
}

.peek-tooltip {
  position: absolute;
  bottom: calc(100% + 0.7rem);
  left: 0;
  width: max-content;
  max-width: min(15rem, calc(100vw - 2rem));
  padding: 0.55rem 0.8rem;
  border: 1px solid rgb(0 204 255 / 0.2);
  border-radius: 0.8rem;
  background: rgb(255 255 255 / 0.96);
  color: #081c44;
  box-shadow: 0 8px 24px rgb(8 28 68 / 0.12);
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.4;
  opacity: 0;
  pointer-events: none;
  transform: translateY(0.35rem);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.peek-tooltip::after {
  content: "";
  position: absolute;
  bottom: -0.4rem;
  left: 1rem;
  width: 0.75rem;
  height: 0.75rem;
  border-right: 1px solid rgb(0 204 255 / 0.2);
  border-bottom: 1px solid rgb(0 204 255 / 0.2);
  background: white;
  transform: rotate(45deg);
}

.peek-control:hover .peek-tooltip,
.peek-control:focus-within .peek-tooltip {
  opacity: 1;
  transform: translateY(0);
}

.peek-toggle {
  display: grid;
  width: 2.75rem;
  height: 2.75rem;
  place-items: center;
  border: 1px solid rgb(0 204 255 / 0.25);
  border-radius: 9999px;
  background: rgb(255 255 255 / 0.92);
  color: #081c44;
  box-shadow: 0 8px 24px rgb(8 28 68 / 0.14);
  backdrop-filter: blur(8px);
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;
}

.peek-toggle:hover {
  color: #007fa3;
  background: #e9faff;
  transform: translateY(-2px);
}

.peek-toggle--off {
  color: #94a3b8;
  background: rgb(248 250 252 / 0.92);
}

@keyframes chibi-peek-in {
  0% {
    opacity: 0;
    transform: translateY(108%) rotate(-5deg);
  }

  70% {
    opacity: 1;
    transform: translateY(-3%) rotate(3deg);
  }

  100% {
    opacity: 1;
    transform: translateY(0) rotate(1deg);
  }
}

@keyframes chibi-peek-out {
  0% {
    opacity: 1;
    transform: translateY(0) rotate(1deg);
  }

  100% {
    opacity: 0;
    transform: translateY(108%) rotate(4deg);
  }
}

.chibi-peek-enter-active {
  animation: chibi-peek-in 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;
}

.chibi-peek-leave-active {
  animation: chibi-peek-out 0.35s ease-in both;
}

@media (max-width: 640px) {
  .peek-chibi {
    width: 9rem;
  }

  .chibi-message {
    top: 2%;
    left: calc(100% - 0.5rem);
    max-width: calc(100vw - 10rem);
    padding: 0.55rem 0.7rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .chibi-peek-enter-active,
  .chibi-peek-leave-active {
    animation: none;
  }

  .peek-toggle,
  .peek-tooltip {
    transition: none;
  }
}
</style>
