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
    <div class="flex mb-4">
        <div class="font-bold mr-2">Description:</div> 
        {{ product.Description }}</div>

    <AppointmentButton 
    :model-value= "isAppointment"
    @update:model-value="toggleAppointment"
    />
  </div>
</template>
<script setup>
const shipping = useShipping();
const route = useRoute();

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
const title = computed(() => {
    return `${company.value.Company} - ${product.value.ProductName}`
})
useHead({
    title
})

const appointment = useLocalStorage('appointment', [])

const isAppointment = computed(() => {
    if(!appointment.value[company.value.id - 1]){
        return false
    }

    if(!appointment.value[company.value.id - 1][product.value.id - 1]){
        return false
    }

    return appointment.value[company.value.id - 1][
        product.value.id - 1 
    ]
})

const toggleAppointment = () => {
    if(!appointment.value[company.value.id - 1]){
        appointment.value[company.value.id - 1] = []
    }

    appointment.value[company.value.id - 1][
        product.value.id - 1 
    ] = !isAppointment.value
}
</script>
<style lang=""></style>
