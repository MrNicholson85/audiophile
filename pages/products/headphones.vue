<template>
  <div class="internalHero">
    <h1 class="">Headphones</h1>
  </div>

  <div v-for="(p, i) in data.slice().reverse()" class="mx-6 lg:container">
    <div
      v-if="p.category === 'headphones'"
      class="grid lg:grid-cols-2 lg:gap-[125px] mb-[120px] lg:m-0"
    >
      <div class="mb-[52px] hidden lg:block" v-if="p.id % 2 == 0">
        <img
          :src="
            'https://slickslices-gatsby.s3.us-west-2.amazonaws.com/audiophile/product-' +
            p.slug +
            '/desktop/image-category-page-preview.jpg'
          "
          class="hidden lg:block"
        />
        <img
          :src="
            'https://slickslices-gatsby.s3.us-west-2.amazonaws.com/audiophile/product-' +
            p.slug +
            '/tablet/image-category-page-preview.jpg'
          "
          class="hidden md:block lg:hidden"
        />
        <img
          :src="
            'https://slickslices-gatsby.s3.us-west-2.amazonaws.com/audiophile/product-' +
            p.slug +
            '/mobile/image-category-page-preview.jpg'
          "
          class="block md:hidden"
        />
      </div>
      <div class="mb-[52px] block lg:hidden">
        <img
          :src="
            'https://slickslices-gatsby.s3.us-west-2.amazonaws.com/audiophile/product-' +
            p.slug +
            '/desktop/image-category-page-preview.jpg'
          "
          class="hidden lg:block"
        />
        <img
          :src="
            'https://slickslices-gatsby.s3.us-west-2.amazonaws.com/audiophile/product-' +
            p.slug +
            '/tablet/image-category-page-preview.jpg'
          "
          class="hidden md:block lg:hidden"
        />
        <img
          :src="
            'https://slickslices-gatsby.s3.us-west-2.amazonaws.com/audiophile/product-' +
            p.slug +
            '/mobile/image-category-page-preview.jpg'
          "
          class="block md:hidden"
        />
      </div>
      <div
        class="grid lg:place-content-center md:w-[572px] md:mx-auto text-center lg:text-left lg:w-[445px]"
      >
        <span
          class="brandTextOrange text-sm uppercase tracking-[10px] mb-6 md:mb-4"
          v-if="p.new === true"
          >New Product</span
        >
        <h2
          class="md:text-[40px] text-[28px] font-bold uppercase leading-[38px] md:leading-10 lg:mb-8 lg:p-0 md:px-10 mb-8"
        >
          {{ p.name }}
        </h2>
        <p class="opacity-50 lg:text-[15px] lg:mb-[40px] mb-6">
          {{ p.description }}
        </p>
        <button
          class="w-[160px] btn-secondary uppercase mx-auto lg:m-0 text-[13px]"
        >
          <NuxtLink :to="`/products/${p.id}`">See Product</NuxtLink>
        </button>
      </div>
      <div class="hidden lg:block" v-if="p.id % 2 == 1">
        <img
          :src="
            'https://slickslices-gatsby.s3.us-west-2.amazonaws.com/audiophile/product-' +
            p.slug +
            '/desktop/image-category-page-preview.jpg'
          "
          class="hidden lg:block"
        />
        <img
          :src="
            'https://slickslices-gatsby.s3.us-west-2.amazonaws.com/audiophile/product-' +
            p.slug +
            '/tablet/image-category-page-preview.jpg'
          "
          class="hidden md:block lg:hidden"
        />
        <img
          :src="
            'https://slickslices-gatsby.s3.us-west-2.amazonaws.com/audiophile/product-' +
            p.slug +
            '/mobile/image-category-page-preview.jpg'
          "
          class="bloxk md:hidden"
        />
      </div>
    </div>
  </div>
  <catCards />
</template>

<script setup>
import data from "../../data/data.json";
import catCards from "~~/components/CategoryCard.vue";
</script>

<style scoped></style>
