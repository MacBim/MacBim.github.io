<template>
  <section class="relative bg-black py-16 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-base font-semibold uppercase tracking-wider text-green">Developper</h2>
      <h1 class="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        What do I do ?
      </h1>
      <div class="mt-20">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <article class="pt-6">
            <div class="flow-root bg-dark-black border-b-4 border-green shadow-2xl px-6 pb-8">
              <div class="-mt-6">
                <div
                  class="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple to-green p-3 shadow-lg"
                >
                  <img src="/images/sylius-icon.svg" alt="icon sylius" class="h-10 w-10" />
                </div>
                <h2 class="mt-6 text-lg font-medium tracking-tight text-white">Sylius</h2>
                <p class="mt-5 text-base text-white">
                  Build your own rules or use discriminators for promotion, payment and shipment.
                  Everything is possible!
                </p>
              </div>
            </div>
          </article>

          <article class="pt-6">
            <div class="flow-root bg-dark-black border-b-4 border-green shadow-2xl px-6 pb-8">
              <div class="-mt-6">
                <div
                  class="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple to-green p-3 shadow-lg"
                >
                  <img src="/images/symfony-text.svg" alt="icon symfony" class="h-10 w-10" />
                </div>
                <h2 class="mt-6 text-lg font-medium tracking-tight text-white">Symfony</h2>
                <p class="mt-5 text-base text-white">
                  Sellers can view their customers and are able to create customer groups including
                  a default one.
                </p>
              </div>
            </div>
          </article>

          <article class="pt-6">
            <div class="flow-root bg-dark-black border-b-4 border-green shadow-2xl px-6 pb-8">
              <div class="-mt-6">
                <div
                  class="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple to-green p-3 shadow-lg"
                >
                  <img src="/images/php-text.svg" alt="icon php" class="h-10 w-10" />
                </div>
                <h2 class="mt-6 text-lg font-medium tracking-tight text-white">PHP</h2>
                <p class="mt-5 text-base text-white">
                  Create an unlimited number of sellers. Add a seller to products, build a dedicated
                  page for a seller or use your default catalog...
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
