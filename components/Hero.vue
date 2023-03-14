<template>
  <div v-for="p in data">
    <div v-if="p.id === 4">
      <div class="hero">
        <div
          class="container mx-auto flex h-[768px] justify-between gap-x-11 bg-cover bg-center bg-no-repeat sm:bg-[url('/assets/images/image-header-mobile.jpg')] lg:bg-[url('/assets/images/HomePageHero.png')]"
        >
          <div
            class="text-white lg:w-1/2 sm:w-full grid grid-cols-1 place-content-center lg:text-left sm:text-center"
          >
            <p class="text-sm tracking-[10px] opacity-[49.64%]">NEW PRODUCT</p>
            <p class="text-[56px] leading-[58px] mb-6 uppercase font-bold my-1">
              {{ p.name }}
            </p>
            <p
              class="text-[15px] w-[349px] sm:mx-auto lg:m-0 opacity-[75%] leading-[25px]"
            >
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <NuxtLink
              :to="`/products/3`"
              class="btn-primary hover:btn-primary-lighten w-[160px] sm:mx-auto lg:m-0 text-center"
            >
              SEE PRODUCT
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import heroImage from "@/assets/images/HomePageHero.png";
import heroImageMobile from "@/assets/images/image-header-mobile.png";
import data from "../data/data.json";
</script>

<style scoped>
.hero {
  top: 0;
  width: 100%;
  background-color: #141414;
  height: 768px;
  z-index: 1;
}
</style>
