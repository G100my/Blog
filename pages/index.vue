<script setup lang="ts">
const { t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const { locale } = useI18n()

const displayEmail = 'g100@lubn.com'
const myName = computed(() => {
  if (locale.value === 'zh') return ['羅', 'Lo']
  else return [t('me'), '羅']
})

const showTip = ref(false)
let showTipTimer: ReturnType<typeof setTimeout> | null = null
function handleCopyEmail() {
  copy2clipboard(displayEmail)
  showTip.value = true
  if (showTipTimer) clearTimeout(showTipTimer)
  showTipTimer = setTimeout(() => {
    showTip.value = false
  }, 2000)
}
// todo: show tip animation
</script>
<template>
  <main class="mx-auto text-white">
    <section
      class="mx-10 flex h-screen flex-col justify-around pb-[10%] pt-[14%]"
    >
      <h2 class="-mx-10 bg-blue-900/50 px-10 py-4 text-5xl">WEB DEVELOPER</h2>

      <div class="flex flex-1 flex-col justify-center">
        <div class="flex h-2/3 flex-col justify-between text-xl">
          <h1 class="w-full space-x-3 pl-5 text-5xl">
            <span>{{ myName[0] }}</span>
            <span class="align-text-bottom text-3xl">{{ myName[1] }}</span>
          </h1>

          <section class="space-y-1.5 text-right tracking-widest">
            <a class="text-2xl" target="_blank" href="https://lubn.com/">{{
              t('me.company_of_employment')
            }}</a>
            <p class="text-xl">{{ t('me.title') }}</p>
            <address
              class="relative ml-auto w-fit cursor-pointer"
              @click="handleCopyEmail"
            >
              <span>{{ displayEmail }}</span>
              <span v-if="showTip" class="arrow_box">Copied!</span>
            </address>
          </section>

          <hr />

          <nav class="flex items-center justify-around gap-4">
            <a :href="'mailto:' + displayEmail">
              <i class="ri-mail-line text-4xl" />
              <span class="sr-only">Email</span>
            </a>

            <a target="_blank" href="https://www.instagram.com/lo_ol.g100/">
              <i class="ri-instagram-line text-4xl" />
              <span class="sr-only">Instagram</span>
            </a>

            <a target="_blank" href="https://github.com/G100my">
              <i class="ri-github-line text-4xl" />
              <span class="sr-only">Github</span>
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/g100lo/">
              <i class="ri-linkedin-line text-4xl"></i>
              <span class="sr-only">Linkedin</span>
            </a>
          </nav>
        </div>
      </div>
    </section>

    <div class="fixed bottom-1 left-1">
      <NuxtLink :to="switchLocalePath(locale === 'zh' ? 'en' : 'zh')">
        <i class="ri-translate-2 text-xl" />
      </NuxtLink>
    </div>
  </main>
</template>
<style>
/* https://cssarrowplease.com/ */
.arrow_box {
  @apply absolute right-full -translate-x-3 p-1 text-xs;
  background: #4b5563;
  border: 2px solid #f3f4f6;
}
.arrow_box:after,
.arrow_box:before {
  left: 100%;
  top: 50%;
  border: solid transparent;
  content: '';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.arrow_box:after {
  border-color: rgba(75, 85, 99, 0);
  border-left-color: #4b5563;
  border-width: 6px;
  margin-top: -6px;
}
.arrow_box:before {
  border-color: rgba(243, 244, 246, 0);
  border-left-color: #f3f4f6;
  border-width: 9px;
  margin-top: -9px;
}
</style>
