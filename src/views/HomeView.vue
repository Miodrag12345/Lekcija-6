
<template>
  <div>
    <DiscountedProducts />
    <ProductsDetails />
  </div>
</template>


<script>

import ProductsDetails from "@/components/Products/Details.vue";
import DiscountedProducts from "@/components/Products/Discounted.vue";

export default {
  name:'HomeView',
  components: {DiscountedProducts, ProductsDetails},

}

</script>