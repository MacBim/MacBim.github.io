<template>
  <div class="relative overflow-hidden">
    <main class="bg-dark-black">
      <RouterView />
    </main>
  </div>

  <FooterComponent />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterComponent from '@/components/FooterComponent.vue'
</script>
