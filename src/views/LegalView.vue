<template>
  <div>
    <section class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl py-10 md:py-20">
      <RouterLink to="/" class="text-lg text-green">Return to the home page</RouterLink>
      <div class="mt-10 md:mt-20">
        <h1 class="text-center text-white font-black inline-block text-4xl md:text-5xl">
          Legal Informations
        </h1>
      </div>
    </section>

    <section class="pt-10 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <h1 class="text-green font-black text-4xl">Credits</h1>
      <div class="mt-6 text-xl text-white">
        <p>
          JB MERCIER's website is available at jb.mercier.com and was designed and developed by
          Amélia MASSOT.
        </p>
        <p>
          This website was created as part of Amélia MASSOT's web design and web development skills
          within the company AKAWAKA, her employer.
        </p>
        <p>The content of the site was written by JB MERCIER, who is the owner of the site.</p>
      </div>
    </section>

    <section class="pt-10 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <h1 class="text-green font-black text-4xl">Copyright</h1>
      <p class="mt-6 text-xl text-white">
        The content available on this site is, unless otherwise stated, licensed under
        <a href="https://creativecommons.org/licenses/by-sa/2.0/fr/" class="underline"
          >Creative Commons (BY-SA)</a
        >.
      </p>
    </section>

    <section class="pt-10 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <h1 class="text-green font-black text-4xl">Privacy Policy</h1>
      <p class="mt-6 text-xl text-white">This site does not collect any personal data.</p>
    </section>

    <section
      class="pb-16 pt-10 mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 md:pb-32 lg:px-8 lg:max-w-7xl"
    >
      <h1 class="text-green font-black text-4xl">Contact</h1>
      <p class="mt-6 text-xl text-white">
        For any request for information or contact, you can contact JB MERCIER using the means of
        contact provided.
      </p>
    </section>

    <div class="sm:mx-auto sm:max-w-3xl sm:px-6 hidden xl:block">
      <div class="absolute inset-y-0 right-0 w-2/4 h-1/3">
        <div class="">
          <div class="absolute inset-y-0 triangle-reverse bg-green left-0 right-0 w-full"></div>
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
