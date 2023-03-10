<template>
  <div><h1>Earphones</h1></div>
  <div v-for="p in data">
    <div v-if="p.category === 'earphones'">
      <NuxtLink :to="`/products/${p.id}`">{{ p.name }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import data from "../../data/data.json";
</script>

<style scoped></style>
