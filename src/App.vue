<template>
  <div id="app">
    <Header />

    <main>
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script>
import '@/styles/GlobalStyles.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  background-image: url('./assets/pattern.svg');
}

main {
  flex: 1;
}
</style>
