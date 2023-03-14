<template>
  <div class="">
    <header class="bg-[#141414] z-10 w-full">
      <nav
        class="flex justify-between container mx-aut py-9 text-white devider"
      >
        <NuxtLink to="/" class="font-bold text-xl">audiophile</NuxtLink>
        <ul
          class="flex justify-between gap-4 uppercase text-[13px] tracking-[2px] text-bold"
        >
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/products/earphones">Earphones</NuxtLink></li>
          <li><NuxtLink to="/products/headphones">Headphones</NuxtLink></li>
          <li><NuxtLink to="/products/speakers">Speakers</NuxtLink></li>
        </ul>
        <div>Cart Btn</div>
      </nav>
    </header>
    <!-- Page Content-->
    <div>
      <slot />
    </div>
  </div>
</template>
<style scoped>
header nav {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
