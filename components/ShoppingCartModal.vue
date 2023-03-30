<template>
  <div
    v-show="modalActive"
    class="h-screen bg-black absolute w-full top-0 right-0 bg-opacity-50"
    @click="$emit('close-modal')"
  >
    <div
      v-if="modalActive"
      class="shoppingCartModal mt-[119px] px-[33px] py-[31px] rounded-xl z-10 bg-white text-black w-[327px] md:w-[377px] absolute left-[24px] lg:left-0 lg:right-[290px]"
    >
      <div class="flex justify-between">
        <div class="uppercase text-black text-lg font-bold">Cart (3)</div>
        <div class="text-black opacity-50 underline">Remove all</div>
      </div>
      <div class="mt-[29px] mb-6">
        <div class="flex justify-between items-center mb-6">
          <div class="flex items-center align-middle">
            <img
              src="../assets/images/cart/image-xx99-mark-two-headphones.jpg"
              class="block w-16 h-16 rounded-xl"
            />
            <div class="grid ml-4 place-content-center">
              <span class="font-bold text-[15px] uppercase">XX99 MK II</span>
              <span class="text-black opacity-50 font-bold">$ 2,999</span>
            </div>
          </div>
          <div
            class="flex bg-[#f1f1f1] w-[96px] justify-around items-center h-8"
          >
            <div>-</div>
            <div>1</div>
            <div>+</div>
          </div>
        </div>
        <div class="flex justify-between items-center mb-6">
          <div class="flex items-center align-middle">
            <img
              src="../assets/images/cart/image-xx59-headphones.jpg"
              class="block w-16 h-16 rounded-xl"
            />
            <div class="grid ml-4 place-content-center">
              <span class="font-bold text-[15px] uppercase">XX59</span>
              <span class="text-black opacity-50 font-bold">$ 899</span>
            </div>
          </div>
          <div
            class="flex bg-[#f1f1f1] w-[96px] justify-around items-center h-8"
          >
            <div>-</div>
            <div>1</div>
            <div>+</div>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex items-center align-middle">
            <img
              src="../assets/images/cart/image-yx1-earphones.jpg"
              class="block w-16 h-16 rounded-xl"
            />
            <div class="grid ml-4 place-content-center">
              <span class="font-bold text-[15px] uppercase">YX1</span>
              <span class="text-black opacity-50 font-bold">$ 599</span>
            </div>
          </div>
          <div
            class="flex bg-[#f1f1f1] w-[96px] justify-around items-center h-8"
          >
            <div>-</div>
            <div>1</div>
            <div>+</div>
          </div>
        </div>
      </div>
      <div class="flex justify-between mb-6">
        <div class="text-black opacity-50 uppercase text-[15px]">Total</div>
        <div class="text-black font-bold text-[18px]">$ 5,396</div>
      </div>
      <NuxtLink
        :to="`/products/checkout`"
        class="btn-secondary hover:btn-primary-lighten text-center uppercase font-bold text-[13px] flex justify-center"
        >checkout</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
defineEmits(["close-modal"]);
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped></style>
