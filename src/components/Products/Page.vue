<template>
  <div>
    <DiscountedProducts />
    <ProductsDetails />
  </div>
</template>

<script>

import Details from "@/components/Products/Details.vue";
import Discounted from "@/components/Products/Discounted.vue";

export default {
  name: 'ProductsPage',
  components: {
    DiscountedProducts: Discounted,
    ProductsDetails: Details
  },

}
</script>