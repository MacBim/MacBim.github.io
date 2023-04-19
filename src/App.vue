<template>
  <RouterView />

  <FooterComponent/>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterComponent from "@/components/FooterComponent.vue";
</script>
