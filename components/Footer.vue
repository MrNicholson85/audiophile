<template>
  <LastCall />
  <div class="bg-black text-white pt-12 pb-6">
    <div
      class="md:container md:px-[39px] lg:p-0 grid gap-12 lg:block justify-center md:justify-start"
    >
      <div class="footerEffect -translate-y-12"></div>
      <div class="flex justify-between lg:mb-12">
        <img :src="Logo" class="mx-auto md:m-0" />
        <div class="hidden lg:flex">
          <ul
            class="text-center md:text-left md:flex grid md:gap-[34px] gap-4 uppercase text-[13px] tracking-[2px] text-bold"
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
        </div>
      </div>
      <div class="block lg:hidden">
        <ul
          class="text-center md:text-left md:flex grid md:gap-[34px] gap-4 uppercase text-[13px] tracking-[2px] text-bold"
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
      </div>
      <div class="flex justify-between lg:mb-14">
        <div class="lg:w-[540px]">
          <p class="text-center md:text-left px-6 md:p-0 opacity-50">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div class="hidden lg:flex w-[104px] justify-between self-end">
          <img :src="iconFB" class="w-6 h-6" />
          <img :src="iconTW" class="w-6 h-6" />
          <img :src="iconIG" class="w-6 h-6" />
        </div>
      </div>

      <div class="block md:flex lg:block justify-between">
        <div class="text-center md:text-left opacity-50">
          Copyright 2021. All Rights Reserved
        </div>
        <div
          class="hidden md:flex lg:hidden w-[104px] justify-between self-end"
        >
          <img :src="iconFB" class="w-6 h-6" />
          <img :src="iconTW" class="w-6 h-6" />
          <img :src="iconIG" class="w-6 h-6" />
        </div>
      </div>
      <div class="flex md:hidden w-[104px] mx-auto justify-between">
        <img :src="iconFB" />
        <img :src="iconTW" />
        <img :src="iconIG" />
      </div>
    </div>
  </div>
</template>

<script setup>
import LastCall from "~~/components/LastCall.vue";
import Logo from "~~/assets/images/audiophile-logo.svg";
import iconFB from "~~/assets/images/icon-facebook.svg";
import iconTW from "~~/assets/images/icon-twitter.svg";
import iconIG from "~~/assets/images/icon-instagram.svg";
</script>

<style scoped></style>
