<template>
    <div class="relative overflow-hidden">
        <main class="bg-dark-black">
            <PresentationComponent/>

            <TechPresentationComponent/>

            <HobbiesComponent/>

            <ContactComponent/>
        </main>
    </div>
</template>

<script setup lang="ts">
import TechPresentationComponent from "@/components/home/TechPresentationComponent.vue";
import HobbiesComponent from "@/components/home/HobbiesComponent.vue";
import ContactComponent from "@/components/home/ContactComponent.vue";
import PresentationComponent from "@/components/home/PresentationComponent.vue";
</script>
