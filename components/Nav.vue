<template>
  <div>
    <nav
      class="flex justify-between md:container mx-aut py-9 text-white devider px-6 lg:px-0"
    >
      <div>
        <div class="flex">
          <img
            class="lg:hidden"
            :src="menuBtn"
            @click="navToggler = !navToggler"
          />
          <NuxtLink
            to="/"
            class="pl-[42px] lg:pl-0 hidden md:block font-bold text-xl"
            ><img :src="logo"
          /></NuxtLink>
        </div>
      </div>
      <div>
        <NuxtLink to="/" class="block md:hidden font-bold text-xl"
          ><img :src="logo"
        /></NuxtLink>
        <!-- Desktop Nav -->
        <ul
          class="hidden justify-between lg:flex gap-4 uppercase text-[13px] tracking-[2px] text-bold"
        >
          <li><NuxtLink to="/" class="hover:nav-hover">Home</NuxtLink></li>
          <li>
            <NuxtLink to="/products/earphones" class="hover:nav-hover"
              >Earphones</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/products/headphones" class="hover:nav-hover"
              >Headphones</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/products/speakers" class="hover:nav-hover"
              >Speakers</NuxtLink
            >
          </li>
        </ul>
        <!-- /Desktop Nav -->
      </div>
      <div><img :src="shoppingCart" /></div>
    </nav>
    <ul
      class="grid lg:hidden lg:justify-between gap-4 uppercase lg:text-[13px] tracking-[2px] justify-center text-bold text-center text-white lg:pb-10 text-2xl text-bold"
      :class="[navToggler ? 'show' : 'hide']"
    >
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/products/earphones">Earphones</NuxtLink></li>
      <li><NuxtLink to="/products/headphones">Headphones</NuxtLink></li>
      <li><NuxtLink to="/products/speakers">Speakers</NuxtLink></li>
    </ul>
  </div>
</template>

<script setup>
import logo from "/assets/images/audiophile-logo.svg";
import shoppingCart from "/assets/images/shopping-cart.svg";
import menuBtn from "/assets/images/menuBtn.svg";
</script>

<style scoped>
.hide {
  height: 0;
  overflow: hidden;
}

.show {
  display: block;
}
</style>
