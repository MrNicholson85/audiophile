<template>
  <div
    v-if="foo.category === '{{ name }}'"
    class="grid lg:grid-cols-2 lg:gap-[125px]"
  >
    <div class="mb-[52px]">
      <img
        :src="
          '/_nuxt/assets/images/product-' +
          p.slug +
          '/desktop/image-category-page-preview.jpg'
        "
        class="hidden lg:block"
      />
      <img
        :src="
          '/_nuxt/assets/images/product-' +
          p.slug +
          '/tablet/image-category-page-preview.jpg'
        "
        class="hidden md:block lg:hidden"
      />
      <img
        :src="
          '/_nuxt/assets/images/product-' +
          p.slug +
          '/mobile/image-category-page-preview.jpg'
        "
        class="bloxk md:hidden"
      />
    </div>
    <div
      class="grid lg:place-content-center md:w-[572px] md:mx-auto text-center lg:text-left lg:w-[445px]"
    >
      <span
        class="brandTextOrange text-sm uppercase tracking-[10px] mb-6 md:mb-4"
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
  </div>
</template>

<script setup>
import data from "../../data/data.json";

const props = defineProps({
  name: String,
  foo: String,
});
</script>

<style scoped></style>
