<template>
  <div
    class="lg:container lg:pl-[117px] gap[32px] md:gap-16 lg:gap-[138px] grid lg:flex overflow-hidden bg-[#d87d4a] rounded-lg mx-6 relative py-14 lg:pb-0"
  >
    <div class="lg:w-[410px] w-full">
      <div class="bg-[url('/assets/images/ovalsEffect.svg')]"></div>
      <img
        class="md:p-3 lg:p-0 lg:bottom-[-27px] relative w-[172px] md:w-[197px] lg:w-full mx-auto mb-2"
        :src="zx9Speaker"
      />
    </div>
    <div
      class="grid text-center lg:text-left lg:align-middle lg:self-center w-[280px] md:w-[349px] mx-auto lg:m-0"
    >
      <h3
        class="md:text-[56px] text-4xl text-white w-[261px] md:leading-[58px] uppercase px-8 md:px-0 font-bold mb-6 mx-auto lg:mx-0"
      >
        ZX9 Speaker
      </h3>
      <p
        class="block mb-6 md:mb-[40px] md:w-[349px] text-[15px] text-white leading-4"
      >
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <div>
        <button
          class="bg-black w-[160px] text-[13px] text-white px-8 py-3 uppercase"
        >
          see product
        </button>
      </div>
    </div>
  </div>
  <div
    class="w-full md:container h-[320px] mt-12 rounded-lg bg-[url('/assets/images/image-speaker-zx7.jpg')]"
  >
    <div
      class="grid gap-8 w-[204px] h-[320px] align-middle place-content-cente ml-24 top-[50%]"
    >
      <h3 class="font-bold text-[28px]">ZX7 Speaker</h3>
      <button
        class="w-[160px] text-[13px] font-bold border-black border-[1px] py-[15px] uppercase"
      >
        see product
      </button>
    </div>
  </div>
</template>

<script setup>
import zx9Speaker from "~~/assets/images/image-speaker-zx9.png";
</script>

<style scoped></style>
