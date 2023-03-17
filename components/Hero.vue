<template>
  <div v-for="p in data">
    <div v-if="p.id === 4">
      <div class="hero h-[600px] lg:h-[769px]">
        <div
          class="md:container mx-auto flex h-[600px] lg:h-[768px] justify-between gap-x-11 md:bg-[0_-110px] bg-cover lg:bg-center bg-no-repeat bg-[url('/assets/images/image-header-mobile.jpg')] lg:bg-[url('/assets/images/HomePageHero.png')] md:bg-[url('/assets/images/image-header-tablet.jpg')]"
        >
          <div
            class="text-white lg:w-1/2 sm:w-full grid grid-cols-1 place-content-center lg:text-left text-center"
          >
            <p class="text-sm tracking-[10px] opacity-[49.64%] mb-4 md:mb-6">
              NEW PRODUCT
            </p>
            <p
              class="text-4xl md:text-[56px] md:leading-[58px] mb-6 uppercase font-bold my-1"
            >
              {{ p.name }}
            </p>
            <p
              class="text-[15px] w-[328px] lg:w-[349px] mx-auto lg:m-0 opacity-[75%] leading-[25px] px-2 lg:mb-10"
            >
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <NuxtLink
              :to="`/products/3`"
              class="btn-primary hover:btn-primary-lighten w-[160px] mx-auto lg:m-0 text-center"
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
import data from "../data/data.json";
</script>

<style scoped>
.hero {
  top: 0;
  width: 100%;
  background-color: #141414;
  z-index: 1;
}
</style>
