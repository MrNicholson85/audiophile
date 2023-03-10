<template>
  <div>
    <p>Product Deatils For {{ id }}</p>
    <p>
      No, it was The Enchantment Under The Sea Dance. Our first date. It was the
      night of that terrible thunderstorm, remember George? Your father kissed
      me for the very first time on that dance floor. It was then I realized I
      was going to spend the rest of my life with him.
    </p>
    <div v-for="p in data">
      <div v-if="p.id == id">
        {{ p.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
import data from "../../data/data.json";
</script>

<style scoped></style>
