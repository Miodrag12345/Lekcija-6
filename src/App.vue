<template>
  <products-page />
</template>

<script>
import Page from "@/components/Products/Page.vue";

export default {
  name: 'App',
  components: { ProductsPage: Page },
  provide() {
    return {
      productList: this.productList
    }
  },
  data: () => ({
    productList: [
      {
        name: "HTML Course",
        price: 150,
        length: "3 months",
        discount: 20
      },
      {
        name: "CSS Course",
        price: 120,
        length: "2 months",
        discount: 30
      },
      {
        name: "JavaScript Course",
        price: 200,
        length: "4 months",
        discount: 25
      },
      {
        name: "React Course",
        price: 250,
        length: "5 months",
        discount: 50
      },
      {
        name: "Node.js Course",
        price: 220,
        length: "4 months",
        discount: 50
      }
    ]
  })
}
</script>

