<template>
  <div>
    <h1>Discounted Products</h1>
    <div class="discounted" v-for="product in discountedProducts" :key="product.id">
      <ProductInfo :product="product" />
    </div>
  </div>
</template>

<script>
import Info from "@/components/Products/Info.vue";

export default {
  name: "DiscountedProducts",
  components: { ProductInfo: Info },
  inject: ['productList'],
  computed: {
    discountedProducts() {
      return this.productList.filter(product => product.discount != null)
    }
  }
}
</script>

<style scoped>
.discounted {
  background-color: red
}
</style>