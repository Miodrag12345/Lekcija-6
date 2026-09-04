<template>
  <div>
    <navigation />
    <router-view></router-view>
    <footer />

  </div>


</template>

<script>
import Navigation from "@/components/Partials/navigation.vue";
import Footer from "@/components/Partials/footer.vue";

export default {
  name: 'App',
  components: {Footer, Navigation},
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

<style src="./assets/css/main.css">

</style>