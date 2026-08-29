<template>

    <div v-for="product in notDoiscountedProducts"  :key ="product.id">
      <ProductInfo :product="product" />
    </div>

</template>


<script>

import Info from "@/components/Products/Info.vue";

export default {
  name:"ProductsDetails",
  components: {ProductInfo: Info},
  inject:["productList"],
  computed:{
    notDiscountedProducts()  {
      return this.productList.filter(product=>product.discount === null)
    }
  }

}
</script>