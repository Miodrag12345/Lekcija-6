<template>

<ListProducts type="all"></ListProducts>
</template>

<script>

import ListProducts from "@/components/Products/ListProducts.vue";

export default {
  name:'ProductsView',
  components :{
    ListProducts
  },
  computed: {
    notDiscountedProducts() {
      return this.productList.filter(product => product.discount === null)
    }}

}
</script>