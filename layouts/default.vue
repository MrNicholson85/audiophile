<template>
  <div>
    <header class="container mx-auto bg-[#101010]">
      <nav
        class="flex justify-between content-container mx-auto py-9 text-white devider"
      >
        <NuxtLink to="/" class="font-bold">Audiophile</NuxtLink>
        <ul class="flex justify-between gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/products/earphones">Earphones</NuxtLink></li>
          <li><NuxtLink to="/products/headphones">Headphones</NuxtLink></li>
          <li><NuxtLink to="/products/speakers">Speakers</NuxtLink></li>
        </ul>
        <div>Cart Btn</div>
      </nav>
    </header>
    <!-- Page Content-->
    <div class="container mx-auto">
      <slot />
    </div>
  </div>
</template>
