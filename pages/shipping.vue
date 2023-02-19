<template lang="">
    <div class="bg-gray-100 p-12 w-full h-full  min-h-screen flex flex-col items-center">
        <div class="prose mb-12">
            <h1>
                <span class="font-bold text-2xl">
                    Companies & Products
                </span>
            </h1>
        </div>
       <div class="left flex flex-row justify-center flex-grow h-96">
        <div class="prose mr-4 p-8 bg-white overflow-y-scroll  rounded-md min-w-[20ch] flex flex-col">
            <h3 class="font-bold mb-6">COMPANIES</h3>
            <div
            class="space-y-1 mb-4 flex flex-col"
            v-for="company in companies"
            :key="company.id"
            >
            <div class="font-bold underline">{{company.Company}}</div>
            <nuxt-link
            v-for="(product, index) in company.products"
            :key="product.id"
            class="flex flex-row space-x-1 no-underline prose-sm font-normal"
            :to="product.path"
            :class="{
                'text-blue-500 font-semibold':
                product.path === $route.fullPath,
                'text-gray-600':
                product.path !== $route.fullPath  
            }"
            >
            <span class="text-gray-500">{{index + 1}}.</span>
            <span>{{product.ProductName}}</span>

            </nuxt-link> 
            </div>
        </div>


        <div class="right prose p-8 bg-white rounded rounded-md w-[65ch]">
            <NuxtPage />
        </div>
       </div>
    </div>
</template>
<script setup>
const { companies } = useShipping()
</script>
<style >
</style>