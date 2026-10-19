<template>
  <transition name="fade">
    <button
      v-show="showButton"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#0B0F19] text-[#0078B8] border border-[#0078B8]/30 flex items-center justify-center shadow-[0_10px_30px_rgba(0,204,255,0.15)] hover:bg-[#0078B8] hover:text-[#002058] hover:border-[#0078B8] transition-all duration-300 group focus:outline-none"
      aria-label="トップへ戻る"
    >
      <i
        class="fa-solid fa-paw text-lg transition-transform duration-300 group-hover:rotate-[15deg]"
      ></i>
    </button>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.9);
}
</style>
