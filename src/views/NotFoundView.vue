<template>
    <div class="h-screen">
        <section
            class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl py-10 md:py-20"
        >
            <RouterLink to="/" class="text-lg text-green">Retourner à l'accueil</RouterLink>
            <div class="mt-10 md:mt-20">
                <h1 class="text-center text-white font-black inline-block text-4xl md:text-5xl">
                    404
                </h1>
            </div>
        </section>

        <div class="sm:mx-auto sm:max-w-3xl sm:px-6 hidden xl:block">
            <div class="absolute inset-y-0 right-0 w-2/4 h-1/3">
                <div class="">
                    <div
                        class="absolute inset-y-0 triangle-reverse bg-green left-0 right-0 w-full"
                    ></div>
                    <div class="absolute inset-y-0 triangle bg-green left-0 right-0 w-full"></div>
                </div>
                <img
                    src="/images/fond.svg"
                    alt=""
                    class="absolute bottom-0 right-0 w-4/5 big-desktop:w-2/5 big-desktop:right-72"
                />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>
