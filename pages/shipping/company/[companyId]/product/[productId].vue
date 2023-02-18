<template lang="">
    <div>
        <h3 class="font-bold ">Product</h3>
        <p>Company id: {{company.Business}}</p>
        <p>Product id: {{product.City}}</p>
    </div>
</template>
<script setup>
const shipping = useShipping()
const route = useRoute()
console.log(shipping)
const company = computed(() => {
    return shipping.companies.find(
        (company) => company.id === route.params.companyId
    )
})
const product = computed(() => {
    return company.value.Transportation.find(
        (product) => product.id === route.params.productId
    )
})

</script>
<style lang="">
    
</style>