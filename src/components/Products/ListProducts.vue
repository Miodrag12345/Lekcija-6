<template>
  <div>
    <div class="product-container" v-for="product in notDiscountedProducts" :key="product.id">
      <ProductInfo :product="product" />
    </div>
  </div>
</template>

<script>
import ProductInfo from "@/components/Products/Info.vue";

export default {
  name: "ListProducts",
  props: [
    'type'
  ],
  components: { ProductInfo },
  inject: ["productList"],
  created() {
    if(this.type==='discounted'){
      this.productList=this.discountedProducts
    } else if (this.type===' not discounted'){
      this.productList=this.notDiscountedProducts

    }
  },
  computed: {
    notDiscountedProducts() {
      return this.productList.filter(product => product.discount === null);
    },
    discountedProducts() {
      return this.productList.filter(product => product.discount !== null);
    }
  }
}
</script>

<style src="@/assets/partials/productDetails.css"></style>