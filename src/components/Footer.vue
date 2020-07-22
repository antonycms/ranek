<template>
  <footer class="container">
    <p><strong>Ranek. Todos os direitos reservados.</strong></p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 30px;
  background-color: var(--primary);
  color: white;

  position: relative;
  top: 80px;
}
</style>
