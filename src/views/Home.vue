<template>
  <div class="container">
    <p class="title">Compre ou Venda</p>

    <ListProducts />
  </div>
</template>

<script>
import ListProducts from '@/components/ListProducts';

export default {
  name: 'Home',
  components: {
    ListProducts,
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  color: var(--secondary);
  font-weight: bold;
  font-size: 30px;
  margin: 40px 0;
}
</style>
