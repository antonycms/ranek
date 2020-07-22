<template>
  <div class="container">
    <ul class="card-container">
      <li class="card" v-for="(product, index) in products" :key="index">
        <span class="product-pricing">{{ product.preco | moneyBRL }}</span>
        <p class="product-name">{{ product.nome }}</p>
        <p class="product-description">{{ product.descricao }}</p>
        <br />
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: 'ListProducts',

  data: () => ({
    products: [],
    loading: true,
  }),

  filters: {
    moneyBRL(value = 0) {
      return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    },
  },

  methods: {
    async loadListProductsFromApi() {
      const response = await api.get('/produto', {
        params: {
          _limit: 10,
        },
      });

      this.products = response.data;
      this.loading = false;
    },
  },

  created() {
    this.loadListProductsFromApi();
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  padding: 20px 40px;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 0 240px;

  margin: 15px 20px;
  padding: 15px 20px;
  border-radius: 4px;
  box-shadow: 0.5px 0.5px 3px rgba(30, 60, 90, 0.4);
  transition: all 0.3s;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.04);
  box-shadow: 0.5px 0.5px 3px rgba(30, 60, 90, 0.6);
}

.product-pricing {
  color: rgb(230, 150, 1);
  font-weight: bold;
}

.product-name {
  color: #234;

  font-weight: bold;
  font-size: 24px;

  margin: 5px 0 10px 0;
}

.product-description {
  color: rgb(77, 77, 77);
}
</style>
