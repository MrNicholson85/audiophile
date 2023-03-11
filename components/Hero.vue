<template>
  <div v-for="p in data">
    <div v-if="p.id === 4">
      <div class="hero" :style="{ backgroundImage: `url(${heroImage})` }">
        <div class="container mx-auto flex h-[768px] justify-between gap-x-11">
          <div
            class="text-white w-1/2 grid grid-cols-1 gap-4 place-content-center"
          >
            <p class="text-sm tracking-[10px] opacity-[49.64%]">NEW PRODUCT</p>
            <p class="text-[56px] leading-[58px] uppercase font-bold my-1">
              {{ p.name }}
            </p>
            <p class="text-[15px] w-[349px] mt-6 opacity-[75%] leading-[25px]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <NuxtLink
              :to="`/products/3`"
              class="btn-primary hover:btn-primary-lighten w-[160px] text-center"
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
import data from "../data/data.json";
</script>

<style scoped>
.hero {
  top: 0;
  width: 100%;
  background-color: #141414;
  background-position: right;
  background-repeat: no-repeat;
  background-position: 198px 0;
  height: 768px;
  z-index: 1;
}
</style>
