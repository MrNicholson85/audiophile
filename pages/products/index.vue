<template>
  <div><h1>products</h1></div>
  <div v-for="p in data">
    <NuxtLink :to="`/products/${p.id}`">{{ p.name }}</NuxtLink>
  </div>
</template>

<script setup>
import data from "../../data/data.json";
</script>

<style scoped></style>
