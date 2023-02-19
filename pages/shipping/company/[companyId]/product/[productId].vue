<template lang="">
  <div>
    <h3 class="font-bold mb-4 text-gray-600">Product</h3>
    <div class="flex">
      <div class="font-bold mr-2">Product:</div>
      {{ product.Product }}
    </div>
    <div class="flex">
      <div class="font-bold mr-2">Daily Destination:</div>
      {{ product.DailyDestination }}
    </div>
    <div class="flex">
      <div class="font-bold mr-2">Vehicle:</div>
      {{ product.Vehicle }}
    </div>
    <div class="flex">
      <div class="font-bold mr-2">Driver:</div>
      {{ product.Driver }}
    </div>
    <div class="flex">
      <div class="font-bold mr-2">City:</div>
      {{ product.City }}
    </div>
    <div class="flex">
        <div class="font-bold mr-2">Description:</div> 
        {{ product.Description }}</div>
  </div>
</template>
<script setup>
const shipping = useShipping();
console.log("İD", shipping)
const route = useRoute();
console.log(shipping);
const company = computed(() => {
  return shipping.companies.find(
    (company) => company.id === route.params.companyId
  );
});
const product = computed(() => {
  return company.value.Product.find(
    (product) => product.id === route.params.productId
  );
});
</script>
<style lang=""></style>
