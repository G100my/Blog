<template>
  <div class="home flex">
    <div class="flex-1 flex flex-col lg:flex-row">
      <div class="flex-[10] pt-12 lg:pt-0 flex justify-center items-center relative">
        <img class="fixed inset-0 lg:absolute lg:inset-auto h-full w-full blur-xl brightness-125 opacity-70" src="../assets/20161225.jpg" alt="" />
        <img class="relative h-full w-full max-h-[300px] max-w-[300px] lg:max-h-[400px] lg:max-w-[400px] rounded-lg brightness-125" src="../assets/G100.jpg" alt="" />
      </div>
      <div class="flex-[11] relative">
        <div class="h-full mx-auto flex flex-col justify-center max-w-lg">
          <article class="text-lg text-right space-y-3">
            <p>需要大量感官刺激才不覺得人生無聊，</p>
            <p>卯起來闖進新世界，接收新事物，嘗試新挑戰，</p>
            <p>這樣有趣多了。</p>
          </article>
          <h2 class="my-0 font-extrabold text-8xl">G100, Lo</h2>
          <div class="mt-4">
            <ul class="space-y-3 mx-auto pl-0 list-none max-w-sm">
              <li>Front-end Developer.</li>
              <li>鄉下環境長大的台灣人，微台。</li>
            </ul>
            <div class="my-10 mx-auto flex flex-col gap-y-5 max-w-sm">
              <button class="_btn bg-[#ffd2f4] text-color" type="button">
                <a href="https://g100my.gitlab.io/Space-Radio/#/" target="_blank">Space Radio</a>
              </button>
              <button class="_btn bg-gray-100" type="button">
                <a href="https://www.cakeresume.com/s--hCYv4B1OJUn_Goo97IKMzA--/g100my" target="_blank">Cake Resume</a>
              </button>
            </div>
            <ul class="flex justify-center gap-x-8 pl-0 list-none">
              <li>
                <a href="https://www.instagram.com/">
                  <IconIG class="h-10 w-10" />
                </a>
              </li>
              <li>
                <a href="https://github.com/G100my">
                  <IconGithub class="h-10 w-10" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import IconIG from '../assets/instagram-brands.svg'
import IconGithub from '../assets/github.svg'
</script>
<style lang="postcss" scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

a {
  @apply no-underline;
  color: inherit;
}

@layer components {
  ._btn {
    @apply bg-gray-100 text-gray-500 font-bold p-1 text-lg border-none rounded-sm ring-2 ring-blue-200 ring-offset-1 hover:ring-4;
  }
}
</style>
