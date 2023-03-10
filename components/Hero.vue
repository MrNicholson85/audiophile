<template>
  <div class="hero">
    <div class="content-container mx-auto flex justify-between gap-x-11">
      <div class="text-white w-1/2 grid grid-cols-1 gap-4 place-content-center">
        <p class="text-sm tracking-[10px] opacity-[49.64%]">NEW PRODUCT</p>
        <p class="text-[56px] leading-[58px] uppercase font-bold my-1">
          XX99 Mark II Headphones
        </p>
        <p class="text-[15px] w-[349px] mt-6 opacity-[75%] leading-[25px]">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <NuxtLink
          :to="`/products/3`"
          class="btn-primary hover:btn-primary-lighten w-[160px] text-center"
        >
          SEE PRODUCT
        </NuxtLink>
      </div>
      <div class="w-389 h-398"><img :src="heroImage" /></div>
    </div>
  </div>
</template>

<script setup>
import heroImage from "@/assets/images/home-hero.jpg";
</script>

<style scoped>
.hero {
  background-color: #141414;
}
</style>
