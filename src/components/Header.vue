<template>
  <header>
    <nav class="container">
      <router-link class="logo" :to="{ name: 'Home' }">
        <img src="@/assets/ranek.svg" alt="Ranek" />
      </router-link>

      <router-link tag="button" class="btn" to="/">
        Vender / Login
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 30px;

  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.logo img {
  width: 90px;
}
</style>
