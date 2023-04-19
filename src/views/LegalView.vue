<template>
    <main class="relative bg-black">
        <section class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl py-10 md:py-20">
            <RouterLink to="/" class="text-lg text-green">Retourner à l'accueil</RouterLink>
            <div class="mt-10 md:mt-20">
                <h1 class="text-center text-white font-black inline-block text-4xl md:text-5xl">Informations Légales</h1>
            </div>
        </section>

        <section class="pt-10 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h1 class="text-green font-black text-4xl">Crédits</h1>
            <div class="mt-6 text-xl text-white">
                <p>Le site de JB MERCIER accessible à l'adresse jb.mercier.com a été conçu et développé par Amélia MASSOT.</p>
                <p>Ce site a été réalisé dans le cadre de la mise à disposition des compétences de web design et de développement web d'Amélia MASSOT au sein de l'entreprise AKAWAKA, son employeur.</p>
                <p>Le contenu du site a été rédigé par JB MERCIER, qui est le propriétaire du site.</p>
            </div>
        </section>

        <section class="pt-10 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h1 class="text-green font-black text-4xl">Droit d'auteur</h1>
            <p class="mt-6 text-xl text-white">Le contenu disponible sur ce site est, sauf mention contraire, diffusé sous licence <a href="https://creativecommons.org/licenses/by-sa/2.0/fr/" class="underline">Creative Commons (BY-SA)</a>.</p>
        </section>

        <section class="pt-10 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h1 class="text-green font-black text-4xl">Vie privée</h1>
            <p class="mt-6 text-xl text-white">Ce site ne recueille aucune donnée personnelle.</p>
        </section>

        <section class="pb-16 pt-10 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 md:pb-32 lg:px-8 lg:max-w-7xl">
            <h1 class="text-green font-black text-4xl">Contact</h1>
            <p class="mt-6 text-xl text-white">Pour toute demande de renseignements ou de contact, vous pouvez vous adresser à JB MERCIER en utilisant les moyens de contact mis à disposition.</p>
        </section>

        <div class="sm:mx-auto sm:max-w-3xl sm:px-6 hidden xl:block">
            <div class="absolute inset-y-0 right-0 w-2/4 h-1/3">
                <div class="">
                    <div class="absolute inset-y-0 triangle-reverse bg-green left-0 right-0 w-full"></div>
                    <div class="absolute inset-y-0 triangle bg-green left-0 right-0 w-full"></div>
                </div>
                <img src="/images/fond.svg" alt="" class="absolute bottom-0 right-0 w-4/5 big-desktop:w-2/5 big-desktop:right-72">
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">

</script>
