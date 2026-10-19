<template>
  <!-- 高さを確保 (h-16 lg:h-20)。必要に応じてこの数値を調整してください -->
  <div class="relative h-16 lg:h-20">
    <header class="fixed z-50 flex items-center justify-between transition-all" :class="isScrolled
      ? 'top-3 lg:top-5 left-4 right-4 lg:left-1/2 lg:-translate-x-1/2 lg:w-3/4 bg-white/95 backdrop-blur-sm rounded-xl lg:rounded-full shadow-[0_12px_35px_rgba(8,28,68,0.08)] border border-slate-100 py-2 lg:py-0.5 px-4 lg:px-10 duration-300 ease-in-out'
      : 'top-0 left-0 translate-x-0 w-full bg-white border-b border-slate-200/60 py-2.5 lg:py-1.5 px-5 lg:px-16 shadow-none duration-77 ease-out'
      ">
      <div class="flex items-center h-full">
        <NuxtLink to="/" aria-label="汐猫みお ホーム">
          <div>
            <NuxtImg src="/images/logo-skyfelis.png" format="webp" width="2172" height="724" quality="82" alt="汐猫みお"
              class="w-32 lg:w-40 transition-transform duration-300 hover:scale-[1.02]" />
          </div>
        </NuxtLink>
      </div>

      <nav class="hidden lg:flex items-center" aria-label="メインナビゲーション">
        <ul class="flex items-center gap-5 border-l border-slate-200 pl-8 h-5">
          <li v-for="item in primaryNavigation" :key="item.to">
            <NuxtLink :to="item.to" :title="item.description"
              class="text-[13px] font-sans font-extrabold uppercase tracking-widest text-[#081C44] hover:text-[#00CCFF] transition-colors">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="hidden lg:flex items-center gap-6 text-slate-400">
        <a v-for="item in socialNavigation" :key="item.href" :href="item.href" target="_blank" rel="noopener noreferrer"
          class="hover:text-[#00CCFF] transition-colors text-lg" :aria-label="`${item.label}を新しいタブで開く`" :title="item.label">
          <i :class="item.icon" aria-hidden="true"></i>
        </a>
      </div>

      <button ref="menuButton" type="button" @click="openMenu"
        class="lg:hidden flex flex-col justify-center items-center w-8.5 h-8.5 rounded-full bg-slate-50 border border-slate-100 shadow-sm text-[#081C44]"
        aria-label="メニューを開く" :aria-expanded="isMenuOpen" aria-controls="mobile-menu">
        <div class="w-4 h-2.5 flex flex-col justify-between">
          <span class="w-full h-[2px] bg-[#081C44] rounded-full"></span>
          <span class="w-full h-[2px] bg-[#081C44] rounded-full"></span>
          <span class="w-full h-[2px] bg-[#081C44] rounded-full"></span>
        </div>
      </button>
    </header>

    <transition name="drawer">
      <div v-if="isMenuOpen" id="mobile-menu" ref="mobileMenu" role="dialog" aria-modal="true"
        aria-label="モバイルメニュー"
        class="fixed inset-0 bg-white z-[60] lg:hidden flex flex-col h-screen w-screen overflow-hidden">
        <div class="flex items-center justify-between w-full pt-2.5 px-5 shrink-0"
          :class="isScrolled ? 'mt-3 mx-4 w-[calc(100%-2rem)]' : 'mt-0'">
          <NuxtImg src="/images/logo-skyfelis.png" format="webp" width="2172" height="724" quality="82" alt="汐猫みお"
            class="w-32 opacity-90" />

          <button ref="closeMenuButton" type="button" @click="closeMenu"
            class="flex flex-col justify-center items-center w-8.5 h-8.5 rounded-full bg-slate-50 text-[#081C44] border border-slate-100 shadow-sm"
            aria-label="メニューを閉じる">
            <div class="w-4 h-4 relative flex items-center justify-center">
              <span class="absolute w-3.5 h-[2px] bg-[#081C44] rounded-full rotate-45"></span>
              <span class="absolute w-3.5 h-[2px] bg-[#081C44] rounded-full -rotate-45"></span>
            </div>
          </button>
        </div>

        <div class="flex-1 flex flex-col items-center px-8 overflow-y-auto py-8">
          <nav class="w-full text-center my-auto space-y-8" aria-label="モバイルナビゲーション">
            <ul class="space-y-4 text-lg font-sans font-black tracking-[0.2em] text-[#081C44] uppercase">
              <li v-for="item in primaryNavigation" :key="item.to">
                <NuxtLink :to="item.to" :title="item.description" @click="closeMenu"
                  class="hover:text-[#00CCFF] transition-colors block py-1">
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>

            <div class="flex items-center justify-center gap-8 text-slate-400 text-lg pt-4">
              <a v-for="item in socialNavigation" :key="item.href" :href="item.href" target="_blank" rel="noopener noreferrer" @click="closeMenu"
                class="hover:text-[#00CCFF] transition-colors" :aria-label="`${item.label}を新しいタブで開く`">
                <i :class="item.icon" aria-hidden="true"></i>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, onMounted, onUnmounted } from "vue";
import { primaryNavigation, socialNavigation } from "~/utils/navigation";

const isScrolled = ref(false);
const isMenuOpen = ref(false);
const menuButton = ref<HTMLButtonElement | null>(null);
const closeMenuButton = ref<HTMLButtonElement | null>(null);
const mobileMenu = ref<HTMLElement | null>(null);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 80;
};

const openMenu = async () => {
  isMenuOpen.value = true;
  document.body.style.overflow = "hidden";
  await nextTick();
  closeMenuButton.value?.focus();
};

const closeMenu = async () => {
  isMenuOpen.value = false;
  document.body.style.overflow = "";
  await nextTick();
  menuButton.value?.focus();
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape" && isMenuOpen.value) {
    closeMenu();
    return;
  }

  if (event.key !== "Tab" || !isMenuOpen.value || !mobileMenu.value) {
    return;
  }

  const focusableElements = Array.from(
    mobileMenu.value.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements.at(-1);

  if (!firstElement || !lastElement) return;

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>
