<template>
  <div class="container categories flex gap-[30px] py-36">
    <NuxtLink to="/products/headphones" class="relative">
      <div
        class="absolute cat-bg w-[350px] h-[204px] rounded-lg bottom-0"
      ></div>
      <div
        class="relative text-center w-[350px] grid justify-center gap-y-4 top-[-40px]"
      >
        <div class="h-[200px]">
          <img class="relative top-[20px]" :src="catHeadphoneImage" />
        </div>
        <h3 class="font-bold">HEADPHONES</h3>
        <p
          class="font-bold text-[13px] text-['#000000'] opacity-50 flex justify-center align-middle"
        >
          SHOP<img class="pl-[13px]" :src="ctaArrow" alt="cat arrow" />
        </p>
      </div>
    </NuxtLink>
    <NuxtLink to="/products/speakers" class="relative">
      <div
        class="absolute cat-bg w-[350px] h-[204px] rounded-lg bottom-0"
      ></div>
      <div
        class="relative text-center w-[350px] grid justify-center gap-y-4 top-[-40px]"
      >
        <div class="h-[200px]">
          <img class="relative top-[30px]" :src="catSpeakerImage" />
        </div>
        <h3 class="font-bold uppercase">Speakers</h3>
        <p
          class="font-bold text-[13px] text-['#000000'] opacity-50 flex justify-center align-middle"
        >
          SHOP<img class="pl-[13px]" :src="ctaArrow" alt="cat arrow" />
        </p>
      </div>
    </NuxtLink>
    <NuxtLink to="/products/earphones" class="relative">
      <div
        class="absolute cat-bg w-[350px] h-[204px] rounded-lg bottom-0"
      ></div>
      <div
        class="relative text-center w-[350px] grid justify-center gap-y-4 top-[-40px]"
      >
        <div class="h-[200px]">
          <img class="relative top-[40px]" :src="catEarphoneImage" />
        </div>
        <h3 class="font-bold uppercase">earphones</h3>
        <p
          class="font-bold text-[13px] text-['#000000'] opacity-50 flex justify-center align-middle"
        >
          SHOP<img class="pl-[13px]" :src="ctaArrow" alt="cat arrow" />
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import catHeadphoneImage from "../assets/images/cat-headphone.png";
import catSpeakerImage from "../assets/images/cat-speakers.png";
import catEarphoneImage from "../assets/images/cat-earphones.png";
import ctaArrow from "../assets/images/cta-arrow.svg";
</script>

<style scoped></style>
