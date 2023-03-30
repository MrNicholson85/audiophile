<template>
  <div
    v-show="modalActive"
    class="h-screen bg-black absolute w-full top-0 right-0 bg-opacity-50"
    @click="$emit('close-modal')"
  >
    <div class="flex justify-center items-center pt-[190px]">
      <div class="rounded-xl bg-white w-[540px] h-[581px] p-[48px]">
        <div class="mb-[33px]"><img :src="CheckMark" /></div>
        <h4
          class="mb-4 text-[32px] font-bold uppercase leading-[36px] tracking-[1.14px]"
        >
          Tank You <br />
          For Your Order
        </h4>
        <p class="text-black opacity-50 mb-[33px]">
          You will receive an email confirmation shortly.
        </p>
        <div
          class="bg-[#F2F2F2] h-[140px] overflow-hidde rounded-xl flex justify-between mb-12"
        >
          <div class="p-6 flex">
            <div class="flex w-[198px] items-center justify-between">
              <img :src="checkoutImage" />
              <div>
                <div class="font-bold uppercase text-[15px] leading-6">
                  XX99 MK II
                </div>
                <div class="text-black opacity-50 font-bold">$ 2,999</div>
              </div>
              <div class="text-black opacity-50 font-bold">X1</div>
            </div>
          </div>
          <div class="bg-black text-white rounded-r-lg w-[198px] p-[41px_32px]">
            <div class="uppercase text-white opacity-50 mb-[8px]">
              Grand Total
            </div>
            <div class="text-lg leading-[24px] font-bold">$5,446</div>
          </div>
        </div>
        <button
          class="w-full btn-secondary hover:btn-primary-lighten uppercase font-bold text-[13px]"
        >
          Back to Home
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import CheckMark from "~~/assets/images/shared/completeCheck.svg";
import checkoutImage from "~~/assets/images/checkoutImage.png";
defineEmits(["close-modal"]);
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped></style>
