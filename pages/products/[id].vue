<template>
  <div class="lg:container mx-6">
    <div class="mb-6 mt-8 opacity-50 text-black text-[15px]">
      <NuxtLink :to="`/products/`">Go Back</NuxtLink>
    </div>

    <div v-for="p in data">
      <div v-if="p.id == id">
        <div class="grid md:flex md:justify-between mb-[88px] lg:mb-40">
          <div class="md:w-[281px] lg:w-[540px] product-image mb-8">
            <img
              :src="
                '/_nuxt/assets/images/product-' +
                p.slug +
                '/desktop/image-product.jpg'
              "
              class="hidden lg:block"
            />
            <img
              :src="
                '/_nuxt/assets/images/product-' +
                p.slug +
                '/tablet/image-product.jpg'
              "
              class="hidden md:block lg:hidden"
            />

            <img
              :src="
                '/_nuxt/assets/images/product-' +
                p.slug +
                '/mobile/image-product.jpg'
              "
              class="block md:hidden"
            />
          </div>
          <div
            class="md:w-[339px] lg:w-[445px] grid place-content-center product-content"
          >
            <span
              class="brandTextOrange text-sm uppercase tracking-[10px] mb-6 md:mb-4"
              v-if="p.new === true"
              >New Product</span
            >
            <h2
              class="md:text-[40px] text-[28px] font-bold uppercase leading-[38px] md:leading-10 lg:mb-8 lg:p-0 lg:px-10 mb-8"
            >
              {{ p.name }}
            </h2>
            <p class="opacity-50 lg:text-[15px] lg:mb-[40px] mb-6">
              {{ p.description }}
            </p>
            <div
              class="font-bold text-lg tracking-[1.28571px] mb-[31px] md:mb-8 lg:mb-[47px]"
            >
              $ {{ new Intl.NumberFormat().format(p.price) }}
            </div>
            <div class="flex">
              <div
                class="grid grid-cols-3 text-center place-content-center h-12 w-[120px] bg-[#F1F1F1] justify-around mr-4"
              >
                <span
                  class="text-black opacity-25 hover:text-[#D87D4A] hover:opacity-100 cursor-pointer"
                  >-</span
                >
                <span>1</span>
                <span
                  class="text-black opacity-25 hover:text-[#D87D4A] hover:opacity-100 cursor-pointer"
                  >+</span
                >
              </div>
              <div
                class="bg-[#D87D4A] hover:bg-[#FBAF85] cursor-pointer w-40 h-12 text-center text-white grid place-content-center uppercase text-[13px] font-bold"
              >
                Add To Cart
              </div>
            </div>
          </div>
        </div>
        <div class="grid lg:flex lg:justify-between mb-40">
          <div class="w-full lg:w-[635px] mb-[120px]">
            <h3
              class="font-bold text-[32px] leading-9 tracking-[1.14px] uppercase mb-8"
            >
              Features
            </h3>
            <div class="text-black opacity-50 leading-6">{{ p.features }}</div>
          </div>
          <div
            class="w-full md:w-[549px] lg:w-[350px] grid md:flex lg:block justify-between"
          >
            <h3
              class="font-bold text-[32px] leading-9 tracking-[1.14px] uppercase mb-8"
            >
              In The Box
            </h3>
            <div>
              <div v-for="inc in p.includes" class="flex gap-6 mb-3">
                <div class="text-[#D87D4A] font-bold">{{ inc.quantity }}x</div>
                <div class="text-black opacity-50">{{ inc.item }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid md:flex gallery gap-5 lg:gap-0">
          <div class="w-full md:w-[445px] justify-between lg:mr-[30px]">
            <div class="mb-[20px] lg:mb-[32px]">
              <img
                :src="
                  '/_nuxt/assets/images/product-' +
                  p.slug +
                  '/desktop/image-gallery-1.jpg'
                "
                class="hidden lg:block rounded-xl"
              />
              <img
                :src="
                  '/_nuxt/assets/images/product-' +
                  p.slug +
                  '/tablet/image-gallery-1.jpg'
                "
                class="hidden md:block lg:hidden rounded-xl"
              />
              <img
                :src="
                  '/_nuxt/assets/images/product-' +
                  p.slug +
                  '/mobile/image-gallery-1.jpg'
                "
                class="block md:hidden rounded-xl"
              />
            </div>
            <div class="">
              <img
                :src="
                  '/_nuxt/assets/images/product-' +
                  p.slug +
                  '/desktop/image-gallery-2.jpg'
                "
                class="hidden lg:block rounded-xl"
              />
              <img
                :src="
                  '/_nuxt/assets/images/product-' +
                  p.slug +
                  '/tablet/image-gallery-2.jpg'
                "
                class="hidden md:block lg:hidden rounded-xl"
              />
              <img
                :src="
                  '/_nuxt/assets/images/product-' +
                  p.slug +
                  '/mobile/image-gallery-2.jpg'
                "
                class="block md:hidden rounded-xl"
              />
            </div>
          </div>
          <div class="w-full md:w-[635px]">
            <img
              :src="
                '/_nuxt/assets/images/product-' +
                p.slug +
                '/desktop/image-gallery-3.jpg'
              "
              class="hidden lg:block rounded-xl"
            />
            <img
              :src="
                '/_nuxt/assets/images/product-' +
                p.slug +
                '/tablet/image-gallery-3.jpg'
              "
              class="hidden md:block lg:hidden rounded-xl"
            />
            <img
              :src="
                '/_nuxt/assets/images/product-' +
                p.slug +
                '/mobile/image-gallery-3.jpg'
              "
              class="block md:hidden rounded-xl"
            />
          </div>
        </div>
        <div>
          <div
            class="text-center text-black mt-40 font-bold text-[32px] mb-16 uppercase"
          >
            you may also like
          </div>
          <div class="grid md:gap-11 lg:gap-[30px] md:flex justify-around">
            <div
              v-for="others in p.others"
              class="grid md:w-[233px] lg:w-[350px]"
            >
              <div>
                <img
                  :src="
                    '/_nuxt/assets/images/product-' +
                    others.slug +
                    '/desktop/image-product.jpg'
                  "
                  class="hidden lg:block"
                />

                <img
                  :src="
                    '/_nuxt/assets/images/product-' +
                    others.slug +
                    '/tablet/image-product.jpg'
                  "
                  class="hidden md:block lg:hidden"
                />

                <img
                  :src="
                    '/_nuxt/assets/images/product-' +
                    others.slug +
                    '/mobile/image-product.jpg'
                  "
                  class="block md:hidden"
                />
              </div>
              <div
                class="text-center mt-10 font-bold uppercase text-2xl mb-[32px]"
              >
                {{ others.name }}
              </div>
              <div
                class="btn-secondary hover:btn-primary-lighten cursor-pointer w-40 mx-auto text-[13px] text-center uppercase"
              >
                <NuxtLink :to="`/products/${others.id}`">See Product</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <CategoryCard />
</template>

<script setup>
const { id } = useRoute().params;
import data from "../../data/data.json";
import CategoryCard from "~~/components/CategoryCard.vue";
</script>

<style scoped></style>
