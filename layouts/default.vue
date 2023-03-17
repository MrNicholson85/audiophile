<template>
  <div class="">
    <header class="bg-[#141414] z-10 w-full">
      <Nav />
    </header>
    <!-- Page Content-->
    <div>
      <slot />
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
header nav {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
