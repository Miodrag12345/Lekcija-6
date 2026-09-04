
<template>
  <div>
    <ListProducts type="discounted"></ListProducts>
    <ListProducts type="not_discounted"></ListProducts>
  </div>
</template>


<script>


import ListProducts from "@/components/Products/ListProducts.vue";

export default {
  name:'HomeView',
  components: {ListProducts},

}

</script>