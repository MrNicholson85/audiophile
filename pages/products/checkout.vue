<template>
  <div class="mx-6 lg:container">
    <div class="mb-6 mt-8 opacity-50 text-black text-[15px]">
      <NuxtLink :to="`/products/`">Go Back</NuxtLink>
    </div>
    <div class="checkout flex pb-[104px] justify-between">
      <div class="w-[730px] p-[54px_48px] bg-white rounded-xl">
        <h3 class="font-bold text-4xl leading-9 uppercase mb-[41px]">
          checkout
        </h3>
        <form>
          <div
            class="brandTextOrange uppercase font-bold text-[13px] leading-6 tracking-[0.928571px] mb-4"
          >
            Billing Details
          </div>
          <div class="form-row flex justify-between mb-6">
            <div class="w-[309px]">
              <label class="font-bold flex mb-[9px]" for="name">Name</label>
              <input
                class="w-full flex border-[#CFCFCF] h-[56px] border-2 rounded-xl p-[18px_24px]"
                type="name"
                placeholder="Alexei Ward"
                required
              />
            </div>
            <div class="w-[309px]">
              <label class="font-bold flex mb-[9px]" for="email"
                >Email Address</label
              >
              <input
                class="w-full flex border-[#CFCFCF] h-[56px] border-2 rounded-xl p-[18px_24px]"
                type="email"
                placeholder="alexei@mail.com"
                required
              />
            </div>
          </div>
          <div class="form-row flex justify-between mb-[53px]">
            <div class="w-[309px]">
              <label class="font-bold flex mb-[9px]" for="name"
                >Phone Number</label
              >
              <input
                class="w-full flex border-[#CFCFCF] h-[56px] border-2 rounded-xl p-[18px_24px]"
                type="name"
                placeholder="+1 202-555-0136"
                required
              />
            </div>
          </div>

          <div
            class="brandTextOrange uppercase font-bold text-[13px] leading-6 tracking-[0.928571px] mb-4"
          >
            Shipping Info
          </div>
          <div class="form-row flex justify-between mb-6">
            <div class="w-full">
              <label class="font-bold flex mb-[9px]" for="address"
                >Adress</label
              >
              <input
                class="w-full flex border-[#CFCFCF] h-[56px] border-2 rounded-xl p-[18px_24px]"
                type="address"
                placeholder="1137 Williams Avenue"
                required
              />
            </div>
          </div>
          <div class="form-row flex justify-between mb-6">
            <div class="w-[309px]">
              <label class="font-bold flex mb-[9px]" for="zip">Zip Code</label>
              <input
                class="w-full flex border-[#CFCFCF] h-[56px] border-2 rounded-xl p-[18px_24px]"
                type="zip"
                placeholder="10001"
                required
              />
            </div>
            <div class="w-[309px]">
              <label class="font-bold flex mb-[9px]" for="city">City</label>
              <input
                class="w-full flex border-[#CFCFCF] h-[56px] border-2 rounded-xl p-[18px_24px]"
                type="city"
                placeholder="New York"
                required
              />
            </div>
          </div>
          <div class="form-row flex justify-between mb-[53px]">
            <div class="w-[309px]">
              <label class="font-bold flex mb-[9px]" for="countr"
                >Country</label
              >
              <input
                class="w-full flex border-[#CFCFCF] h-[56px] border-2 rounded-xl p-[18px_24px]"
                type="countr"
                placeholder="Alexei Ward"
                required
              />
            </div>
          </div>
          <div>
            <div
              class="brandTextOrange uppercase font-bold text-[13px] leading-6 tracking-[0.928571px] mb-4"
            >
              Payment Details
            </div>
          </div>
          <div class="form-row flex justify-between mb-[53px]">
            <div class="w-[309px]">
              <div class="font-bold text-xs tracking-[-0.214286px]">
                Payment Method
              </div>
            </div>
            <div class="grid w-[309px]">
              <div
                class="flex mb-4 items-center border-[#CFCFCF] h-[56px] border-2 rounded-xl p-[18px_24px]"
              >
                <input
                  class="w-[20px]"
                  type="radio"
                  placeholder="Alexei Ward"
                  required
                  name="payment"
                />
                <div class="font-bold text-sm ml-4">e-Money</div>
              </div>
              <div
                class="flex items-center border-[#CFCFCF] h-[56px] border-2 rounded-xl p-[18px_24px]"
              >
                <input
                  class="w-[20px]"
                  type="radio"
                  placeholder="Alexei Ward"
                  required
                  name="payment"
                />
                <div class="font-bold text-sm ml-4">Cash on Delivery</div>
              </div>
            </div>
          </div>
          <div class="form-row flex justify-between mb-6">
            <div class="w-[309px]">
              <label class="font-bold flex mb-[9px] text-xs" for="name"
                >e-Money Number</label
              >
              <input
                class="w-full flex border-[#CFCFCF] h-[56px] border-2 rounded-xl p-[18px_24px]"
                type="name"
                placeholder="238521993"
                required
              />
            </div>
            <div class="w-[309px]">
              <label class="font-bold flex mb-[9px] text-xs" for="email"
                >e-Money Pin</label
              >
              <input
                class="w-full flex border-[#CFCFCF] h-[56px] border-2 rounded-xl p-[18px_24px]"
                type="email"
                placeholder="6891"
                required
              />
            </div>
          </div>
        </form>
      </div>
      <div class="w-[350px] h-[100%] block p-[54px_48px] bg-white rounded-xl">
        <div
          class="mb-[31px] uppercase font-bold text-lg leading-6 tracking-[1.2px]"
        >
          Summary
        </div>
        <div>
          <div class="flex justify-between items-center mb-6">
            <div class="flex items-center align-middle">
              <img
                src="../../assets/images/cart/image-xx99-mark-two-headphones.jpg"
                class="block w-16 h-16 rounded-xl"
              />
              <div class="grid ml-4 place-content-center">
                <span class="font-bold text-[15px] uppercase">XX99 MK II</span>
                <span class="text-black opacity-50 font-bold">$2,999</span>
              </div>
            </div>
            <div class="flex w-[15px] justify-around items-center h-8">
              <div>x1</div>
            </div>
          </div>
          <div class="flex justify-between items-center mb-6">
            <div class="flex items-center align-middle">
              <img
                src="../../assets/images/cart/image-xx59-headphones.jpg"
                class="block w-16 h-16 rounded-xl"
              />
              <div class="grid ml-4 place-content-center">
                <span class="font-bold text-[15px] uppercase">XX59</span>
                <span class="text-black opacity-50 font-bold">$899</span>
              </div>
            </div>
            <div class="flex w-[15px] justify-around items-center h-8">
              <div>x2</div>
            </div>
          </div>
          <div class="flex justify-between items-center mb-6">
            <div class="flex items-center align-middle">
              <img
                src="../../assets/images/cart/image-yx1-earphones.jpg"
                class="block w-16 h-16 rounded-xl"
              />
              <div class="grid ml-4 place-content-center">
                <span class="font-bold text-[15px] uppercase">YX1</span>
                <span class="text-black opacity-50 font-bold">$599</span>
              </div>
            </div>
            <div class="flex w-[15px] justify-around items-center h-8">
              <div>x1</div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex justify-between mb-[8px]">
            <div class="uppercase text-black opacity-50">Total</div>
            <div class="font-bold text-lg">$5,396</div>
          </div>
          <div class="flex justify-between mb-[8px]">
            <div class="uppercase text-black opacity-50">Shipping</div>
            <div class="font-bold text-lg">$50</div>
          </div>
          <div class="flex justify-between mb-[24px]">
            <div class="uppercase text-black opacity-50">VAT (INCLUDED)</div>
            <div class="font-bold text-lg">$1,079</div>
          </div>
          <div class="flex justify-between mb-[32px]">
            <div class="uppercase text-black opacity-50">Grand Total</div>
            <div class="font-bold text-lg brandTextOrange">$5,446</div>
          </div>
          <div>
            <div
              class="btn-secondary cursor-pointer text-center uppercase text-xs"
            >
              Continue & Pay
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "alt-default",
});
</script>

<style scoped></style>
